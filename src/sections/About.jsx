const About = () => {
    return (
        <div
            className="relative flex size-full flex-col bg-[#181411] dark justify-between group/design-root overflow-x-hidden"
            style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
        >
            <div>
                <div className="@container">
                    <div className="@[480px]:p-4">
                        <div
                            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                            style={{
                                backgroundImage:
                                    'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDkBmkpkcQ_uGYZw7I1Zj_y6SXpJx_XK3240XWJC-IOkLdTi4p44ZFgBUfT4ON_PQOWEpuXXAQ-UoVV0xLEzvpiSPivT4MhjSjKYPOiZiH9q1z50IOb7qPueTx5fAtNLj3haZ725IIyi5RMjnZlYOxy8oys5PAvmq6dev0spgPkFhc3kZnYIYQgJabJ6WMXnze_5yxjs0TTBvOqbeEa5v4hYmhTdx4N0Wg0CFGtdyd8GshefKaGcmuBHMIeqeZ9NY3BKZg7cCS-QTc")'
                            }}
                        >
                            <div className="flex flex-col gap-2 text-left">
                                <h1
                                    className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                                >
                                    Architectural Plans, Elevations, 3D Designs, and Consulting
                                </h1>
                                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                                    I'm a freelance architect specializing in creating detailed architectural plans, precise elevations, immersive 3D designs, and offering expert consulting
                                    services. My goal is to bring your vision to life with accuracy and creativity.
                                </h2>
                            </div>
                            <button
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#f2730c] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                            >
                                <span className="truncate">View Portfolio</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div><div className="h-5 bg-[#181411]"></div></div>
        </div>
    );
};

export default About;