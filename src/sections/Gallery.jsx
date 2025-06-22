import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Gallery() {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://arka-backend.vercel.app/api/images?folder=arka")
            .then(res => res.json())
            .then(data => setImages(data))
            .catch(err => console.error("Error loading images:", err));
    }, []);

    return (
        <div className="min-h-screen bg-[#0A271D] text-white font-manrope py-12">
            {/* Header */}
            <div className="relative mb-8 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 flex justify-center items-center">
                {/* Back Button */}
                <button
                    className="absolute left-4 sm:left-6 md:left-12 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow"
                    onClick={() => navigate("/")}
                >
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path d="M15 19l-7-7 7-7" stroke="#f2730c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                {/* Heading */}
                <h2 className="text-3xl font-bold text-white text-center">
                    Full Gallery
                </h2>
            </div>

            {/* Image Grid with Mobile Padding */}
            <div className="px-4 sm:px-6 md:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    {images.map((img, idx) => (
                        <img
                            key={idx}
                            src={img.secure_url}
                            alt={`gallery-img-${idx}`}
                            className="w-full h-60 object-cover rounded hover:scale-105 transition-transform cursor-pointer"
                            onClick={() => setSelectedImage(img.secure_url)}
                        />
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative">
                        <img
                            src={selectedImage}
                            alt="full"
                            className="rounded max-h-[90vh] max-w-[90vw] object-contain shadow-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            className="absolute top-2 right-2 bg-white text-black font-bold px-3 py-1 rounded-full"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
