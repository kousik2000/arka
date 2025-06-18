export default function Home() {
    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-[#181411] dark justify-between group/design-root overflow-x-hidden"
            style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
        >
            <div>
                <div className="@container">
                    <div className="@[480px]:p-4">
                        <div
                            className="flex min-h-[calc(100vh-64px)] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 rounded-xl"
                            style={{
                                backgroundImage:
                                    'linear-gradient(rgba(24, 20, 17, 0.6), rgba(24, 20, 17, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBPDi6grxsTWyTyDkyFihhVUw6a5OMTMle3CtFFfL8VHi5fVNZUr5AXbnQiovwXDTJz4obYZ2eSy74wYYXdpB_WeBV5HoyruOZqvPJyR0BTO76xQ5mdPk5sDgv3RG0tBEb51UqeBpCnE78bNattMYvwddS5wZ6QakP9MHOWa0z2do_g4I92IhXHGdF_4aIPtUznKB68BShyQ4lusdykbbARxPSYLdzcUwFN89B6mgmnQnpBww7gQ3jgfgw-KyudkfnLD3SR-NpdlWE")',
                                backgroundBlendMode: 'multiply',
                            }}
                        >
                            <h1 className="text-white text-4xl font-black text-center">
                                Designing Spaces That Inspire
                            </h1>
                            <button className="bg-[#f2730c] hover:bg-[#d6600b] transition text-white font-bold px-5 py-2 rounded-xl">
                                Let's Build Together
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div><div className="h-5 bg-[#181411]"></div></div>
        </div>
    )
}