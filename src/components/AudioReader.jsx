import { useState, useEffect, useRef } from 'react';

export const AudioReader = ({ text }) => {
  const [isReading, setIsReading] = useState(false);
  const [error, setError] = useState(null);
  const utteranceRef = useRef(null);

  // Verificación más robusta de soporte del navegador
  const isSupported = () => {
    if (typeof window === 'undefined') return false;
    return 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  };

  useEffect(() => {
    if (!isSupported()) return;

    // Cargar las voces disponibles
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length === 0) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    };
    
    loadVoices();

    return () => {
      window.speechSynthesis.cancel();
      if (utteranceRef.current) {
        utteranceRef.current.onend = null;
        utteranceRef.current.onerror = null;
      }
    };
  }, []);

  const readText = () => {
    if (!text || !isSupported()) {
      setError('Texto vacío o navegador no compatible');
      return;
    }

    setError(null);
    window.speechSynthesis.cancel();

    try {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 1.0;
      utterance.pitch = 1.0;

      utterance.onend = () => {
        setIsReading(false);
        utteranceRef.current = null;
      };

      utterance.onerror = (event) => {
        console.error('Error en speech synthesis:', event);
        setIsReading(false);
        setError('Error al leer el texto');
        utteranceRef.current = null;
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
      setIsReading(true);

    } catch (err) {
      console.error('Error al crear utterance:', err);
      setError('Error al iniciar la lectura');
      setIsReading(false);
    }
  };

  const stopReading = () => {
    if (!isSupported() || !isReading) return;
    
    try {
      window.speechSynthesis.cancel();
      setIsReading(false);
      utteranceRef.current = null;
    } catch (err) {
      console.error('Error al detener lectura:', err);
      setError('Error al detener la lectura');
    }
  };

  if (!isSupported()) {
    return (
      <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700 mb-4">
        Tu navegador no soporta la función de lectura de texto. Prueba con Chrome, Edge o Safari.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <button
          onClick={readText}
          disabled={!text || isReading}
          className={`px-4 py-2 rounded-lg ${
            !text || isReading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          } text-white transition-colors`}
        >
          {isReading ? 'Leyendo...' : 'Leer texto'}
        </button>
        <button
          onClick={stopReading}
          disabled={!isReading}
          className={`px-4 py-2 rounded-lg ${
            !isReading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-red-600 hover:bg-red-700'
          } text-white transition-colors`}
        >
          Detener lectura
        </button>
      </div>

      {error && (
        <div className="p-3 bg-red-50 border-l-4 border-red-500 text-red-700">
          {error}
        </div>
      )}

      {text && (
        <p className="text-sm text-gray-500">
          Duración estimada: {Math.ceil(text.length / 12)} segundos
        </p>
      )}
    </div>
  );
};