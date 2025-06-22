import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Portfolio() {
    const [images, setImages] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://arka-backend.vercel.app/api/images?folder=arka")
            .then(res => res.json())
            .then(data => setImages(data))
            .catch(err => console.error("Error fetching images:", err));
    }, []);

    return (
        <div className="w-full backdrop-blur-md text-white font-manrope">
            <section className="py-12 px-4 md:px-12">
                <h1 className="text-white text-4xl font-black text-center mb-10 mt-10">
                    Portfolio
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    {images.slice(0, 6).map((img, idx) => (
                        <img
                            key={idx}
                            src={img.secure_url}
                            alt={`project-${idx}`}
                            className="w-full h-60 object-cover rounded-lg hover:scale-105 transition-transform"
                        />
                    ))}
                </div>

                <div className="text-center mt-8">
                    <button
                        onClick={() => navigate("/gallery")}
                        className="bg-[#f2730c] hover:bg-[#d6600b] transition text-white font-bold px-6 py-3 rounded-xl mb-10"
                    >
                        View More
                    </button>
                </div>
            </section>
        </div>
    );
}
