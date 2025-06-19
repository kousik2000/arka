export default function About() {
    return (
        <div
            className="backdrop-blur-md relative flex size-full flex-col dark justify-between group/design-root overflow-x-hidden"
            style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
        >
            <div className="w-full">
                <div className="@container w-full">
                    <div className="w-full flex justify-center">
                        <div
                            className="flex min-h-[calc(100vh-64px)] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 sm:p-6 md:p-8 rounded-xl w-full max-w-4xl"
                        >
                            <h1 className="text-white text-4xl font-black text-center">
                                About
                            </h1>
                            <h1
                                className="text-white text-4xl font-black leading-tight tracking-[-0.033em] text-center @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                            >
                                Architectural Plans, Elevations, 3D Designs, and Consulting
                            </h1>
                            <h2 className="text-white text-sm font-normal leading-normal text-center max-w-3xl @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal px-4 sm:px-0">
                                I'm a freelance architect specializing in creating detailed architectural plans, precise elevations, immersive 3D designs, and offering expert consulting
                                services. My goal is to bring your vision to life with accuracy and creativity.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div><div className="h-5 bg-transparent"></div></div>
        </div>
    )
}