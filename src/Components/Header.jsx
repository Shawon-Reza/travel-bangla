
const Header = () => {
    return (
        <div className="md:flex justify-around gap-3 px-5 pt-5 md:pt-15 container mx-auto">

            {/* Text container part 1 */}
            <div className="px-5">
                <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-Dancing text-yellow-500 ">Explore Your Travel</h2>

                <h2 className="text-3xl md:text-5xl lg:text-7xl  xl:text-8xl font-Playfair font-extrabold py-2 md:py-5 lg:py-10">Trusted Travel Agency</h2>

                <p className="text-lg opacity-75 xl:text-2xl">I travel not to go anywhere, but to go. I travel for travel's sake the great affair is to move.</p>

                <div className="space-x-5 py-5 md:pt-5 lg:pt-10 ">
                    <button className="btn lg:btn-lg lg:rounded-xl hover:btn-accent  hover:text-white" >Contact US</button>
                    <button className="btn lg:btn-lg  lg:rounded-xl hover:btn-accent hover:text-white">Learn More</button>
                </div>
            </div>

            {/* img container part 2 */}
            <div className="relative">
                <img src="https://i.ibb.co.com/6JL7Xk7y/hero-banner.png" alt=""
                    className="px-10 md:p-0 w-auto max-w-full"
                />


                {/*360 degree Rorate Images */}

                <img src="https://i.ibb.co.com/7d8ffpJx/shape-3.png" alt=""
                    className=" absolute top-[42%] -left-4 md:-left-15 animate-slowSpin "
                />

                <img src="https://i.ibb.co.com/wrdsrLD5/shape-2.png" alt=""
                    className=" absolute -top-[7%] right-5 md:right-0 animate-slowSpin"
                />

                <img src="https://i.ibb.co.com/BVsF0NkF/shape-1.png" alt=""
                    className=" absolute bottom-0 right-7 md:right-0  animate-slowSpin"
                />

            </div>


            <div>
                
            </div>
        </div>
    );
};

export default Header;