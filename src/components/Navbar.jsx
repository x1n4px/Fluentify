export const Navbar = () => {
    return (
        <nav className="bg-white shadow-sm py-4 px-6 sm:px-10">
            <div className="max-w-6xl mx-auto flex justify-center items-center relative">
                {/* Contenedor del logo centrado */}
                <div className="flex items-center">
                    <span className="text-2xl font-bold text-blue-600">Fluentify</span>
                    <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">AI Corrector</span>
                </div>
                
                {/* Botón de menú hamburguesa - posicionado absoluto a la derecha */}
                <button className="md:hidden text-gray-500 absolute right-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};