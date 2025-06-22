import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuItems = ['home', 'about', 'services', 'portfolio'];

    return (
        <header className="fixed w-full bg-transparent z-50 transition-all duration-300 px-5 md:px-20">
            <div className="bg-white mt-10 container mx-auto flex items-center justify-between p-4 px-3 md:px-10 rounded-lg shadow-lg">
                <img src="https://i.ibb.co/HfY9WM10/arka.png" alt="MyLogo" className="h-12 w-auto" />

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

                <button className="bg-[#f2730c] hover:bg-[#d6600b] transition text-white font-bold px-5 py-2 rounded-xl hidden md:block">
                    <a
                        key="contact"
                        href={`#contact`}
                        className="capitalize text-white font-medium transition-colors"
                    >
                        Contact
                    </a>
                </button>

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
