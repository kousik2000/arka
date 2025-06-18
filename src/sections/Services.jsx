const Services = () => {
    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-[#181411] dark justify-between group/design-root overflow-x-hidden"
            style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
        >
            <div>
                <div className="@container">
                    <div className="@[480px]:p-4">
                        <div
                            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                            style={{
                                backgroundImage:
                                    'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAL-lvZ5uEmpmP-QNOWdBUYS__yAeMuyvfymt3SaUUZW9cJv7bA0M-3ecVyo3EO0wdvjLM3mJr4vdshbTSDUyHguJoI7jHVxiyqMvQqRfzBkGW_uy2osJdRYaZDXmvI8I5yT0AhWavXy1hvqaSek5Rb3UDjYyrRfYB5D3rRe8ioaqHOMhHwSw0Ustz5gZ6up4YGWRACj3O1T5i2dbLfVGBKZtDbeh9CFz_q7gHH8FryRjXJBPUbt2UZsgEfSXranmZMemaSyEDS9z4")'
                            }}
                        >
                            <div className="flex flex-col gap-2 text-left">
                                <h1
                                    className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                                >
                                    Crafting Architectural Visions
                                </h1>
                                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                                    I'm a freelance architect specializing in bringing your design dreams to life. From initial concept to detailed plans, I offer a range of services to meet your
                                    project needs.
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
                <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Services</h2>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                    <div className="flex flex-1 gap-3 rounded-lg border border-[#54463b] bg-[#27211b] p-4 items-center">
                        <div className="text-white" data-icon="House" data-size="24px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                <path
                                    d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"
                                ></path>
                            </svg>
                        </div>
                        <h2 className="text-white text-base font-bold leading-tight">Elevations</h2>
                    </div>
                    <div className="flex flex-1 gap-3 rounded-lg border border-[#54463b] bg-[#27211b] p-4 items-center">
                        <div className="text-white" data-icon="Layout" data-size="24px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                <path
                                    d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V96H40V56ZM40,112H96v88H40Zm176,88H112V112H216v88Z"
                                ></path>
                            </svg>
                        </div>
                        <h2 className="text-white text-base font-bold leading-tight">Architectural Plans</h2>
                    </div>
                    <div className="flex flex-1 gap-3 rounded-lg border border-[#54463b] bg-[#27211b] p-4 items-center">
                        <div className="text-white" data-icon="Cube" data-size="24px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                <path
                                    d="M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z"
                                ></path>
                            </svg>
                        </div>
                        <h2 className="text-white text-base font-bold leading-tight">3D Renders</h2>
                    </div>
                    <div className="flex flex-1 gap-3 rounded-lg border border-[#54463b] bg-[#27211b] p-4 items-center">
                        <div className="text-white" data-icon="Users" data-size="24px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                <path
                                    d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"
                                ></path>
                            </svg>
                        </div>
                        <h2 className="text-white text-base font-bold leading-tight">Consulting</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;