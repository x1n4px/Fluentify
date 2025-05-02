# Fluentify - AI English Text Corrector


## 📝 Descripción

Fluentify es una aplicación web que utiliza inteligencia artificial para corregir y mejorar textos en inglés. La herramienta analiza gramática, vocabulario, puntuación y estilo, proporcionando correcciones detalladas y explicaciones de los cambios realizados.

## ✨ Características principales

- 🔍 Corrección gramatical avanzada
- 📖 Explicaciones detalladas de cada corrección
- 🎤 Reconocimiento de voz para dictado
- 🔊 Síntesis de voz para escuchar el texto corregido
- 🎨 Interfaz intuitiva y responsive
- ⚡ Tecnología moderna (React, Vite, Tailwind CSS)

## 🚀 Tecnologías utilizadas

- **Frontend**:
  - React.js
  - Vite
  - Tailwind CSS
  - Web Speech API (reconocimiento y síntesis de voz)
  - Axios (para conexión con API)

- **Backend**:
  - Google Gemini API (para el análisis y corrección de texto)

## 🛠️ Instalación y configuración

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/fluentify.git
   cd fluentify
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**:
   Crear un archivo `.env` en la raíz del proyecto con:
   ```env
   VITE_GEMINI_API_KEY=tu_api_key_de_google_gemini
   ```

4. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

5. **Construir para producción**:
   ```bash
   npm run build
   ```

## 🌐 Uso

1. Escribe o dicta tu texto en inglés en el área de texto
2. Haz clic en "Corregir texto"
3. Revisa las correcciones y explicaciones
4. Escucha el texto corregido con el lector de voz

## 📂 Estructura del proyecto

```
fluentify/
├── public/
├── src/
│   ├── components/
│   │   ├── AudioReader.jsx
│   │   ├── CorrectionView.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   └── TextInput.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🤝 Contribución

Las contribuciones son bienvenidas. Sigue estos pasos:

1. Haz un fork del proyecto
2. Crea una rama con tu feature (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Haz push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Distribuido bajo la licencia MIT. Consulta el archivo `LICENSE` para más información.

## ✉️ Contacto

Tu Nombre - [@tu_twitter](https://twitter.com/tu_twitter) - tuemail@ejemplo.com

Enlace del proyecto: [https://github.com/tu-usuario/fluentify](https://github.com/tu-usuario/fluentify)

---
