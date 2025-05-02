import { useState, useRef } from 'react';
import { TextInput } from '../components/TextInput';
import { CorrectionView } from '../components/CorrectionView';
import { AudioReader } from '../components/AudioReader';
import { GeminiEndpoint } from '../service/geminiService'

export const Home = () => {
    const [originalText, setOriginalText] = useState('');
    const [correctedText, setCorrectedText] = useState('');
    const [corrections, setCorrections] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);




    const handleSubmit = async (text) => {
        if (!text.trim()) {
            setError('Por favor, escribe algún texto para corregir');
            return;
        }

        setIsLoading(true);
        setError(null);
        setOriginalText(text);
        setCorrectedText('');
        setCorrections([]);

        try {
            const result = await GeminiEndpoint(text);

            setCorrectedText(result.correctedText);
            setCorrections(result.corrections);
        } catch (err) {
            setError(err.message || 'Error al procesar el texto. Por favor, inténtalo de nuevo.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };



    return (
        <div className="h-auto  py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Corrector de Texto</h1>
                    <p className="text-gray-600">Escribe tu texto y recibe correcciones y sugerencias</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <TextInput onSubmit={handleSubmit} />
                </div>

                {isLoading && (
                    <div className="text-center py-8">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                        <p className="mt-2 text-gray-600">Procesando tu texto...</p>
                    </div>
                )}

                {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                        <p className="text-red-700">{error}</p>
                    </div>
                )}

                {correctedText && !isLoading && (
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <CorrectionView
                                originalText={originalText}
                                correctedText={correctedText}
                                corrections={corrections}
                            />
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4 text-gray-800">Escuchar texto corregido</h2>
                            <AudioReader text={correctedText} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};