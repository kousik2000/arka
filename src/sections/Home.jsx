export default function Home() {
    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-transparent justify-between group/design-root overflow-x-hidden"
            style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
        >
            <div>
                <div className="@container">
                    <div>
                        <div
                            className="flex min-h-[calc(100vh-64px)] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 rounded-xl"
                        >
                            <h1 className="text-white text-4xl font-black text-center">
                                Arka Nest Designs
                            </h1>
                            <h3 className="text-white text-4xl font-black text-center">
                                Designing Spaces That Inspire
                            </h3>
                            <button className="bg-[#f2730c] hover:bg-[#d6600b] transition text-white font-bold px-5 py-2 rounded-xl">
                                Let's Build Together
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div><div className="h-5 bg-transparent"></div></div>
        </div>
    )
}