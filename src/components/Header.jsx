import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuItems = ['home', 'about', 'services', 'contact'];

    return (
        <header className="w-full bg-white bg-opacity-70 backdrop-blur-md shadow-md z-50 transition-all duration-300 pr-20 pl-20">
            <div className="container mx-auto flex items-center justify-between p-4">
                <img src="src/assets/arka.png" alt="MyLogo" className="h-10 w-auto" />

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-6">
                    {menuItems.map(item => (
                        <a
                            key={item}
                            href={`#${item}`}
                            className="capitalize text-gray-800 hover:text-[#f2730c] font-medium transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-[#f2730c]" onClick={toggleMenu}>
                    <span className="text-3xl">&#9776;</span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow">
                    {menuItems.map(item => (
                        <a
                            key={item}
                            href={`#${item}`}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 border-b border-gray-200 text-gray-700 hover:bg-[#f2730c]/10"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
