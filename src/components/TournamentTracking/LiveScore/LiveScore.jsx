import logo1 from '../../../assets/icons/logo1.svg'
import logo2 from '../../../assets/icons/logo2.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



const LiveScore = () => {
    return (
        <>
            <h3 className="font-sans text-text_dark_grey text-2xl font-semibold mb-[20px] ">Live Score</h3>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-20 ">

                {/* <div className="max-w-[465px]  w-full ">
                    <div className="bg-white p-20 w-full h-[192px] ">
                        <div className='flex flex-col gap-15'>
                            <div className="flex justify-between items-center">

                                <p className='text-text_dark_grey font-sans  text-lg  font-medium '>1st ODI</p>
                                <p className='text4'>North Sound</p>
                            </div>
                            <div className="flex justify-between">
                                <p className='flex  gap-15 text-dark_sky font-sans font-semibold items-center '><img src={logo1} alt="logo1" /> <span>ENG</span></p>
                                <p className='text5 font-semibold' >325/8</p>
                            </div>
                            <div className="flex justify-between">
                                <p className='flex  gap-15 text-dark_sky font-sans font-semibold items-center '><img src={logo2} alt="logo1" /> <span>WI</span></p>
                                <p className='text5 font-semibold'><span style={{ fontWeight: "400" }}>(40.5/50 ov. T 326)</span> 250/4</p>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="max-w-[465px]  w-full ">
                    <div className="bg-white p-20 w-full h-[192px]">
                        <div className='flex flex-col gap-15'>
                            <div className="flex justify-between items-center">

                                <p className='text-text_dark_grey font-sans  text-lg  font-medium '>5th T20</p>
                                <p className='text4'>Bengaluru</p>
                            </div>
                            <div className="flex justify-between">
                                <p className='flex  gap-15 text-dark_sky font-sans font-semibold items-center '><img src={logo1} alt="logo1" /> <span>IND</span></p>
                                <p className='text5 font-semibold' >160/8</p>
                            </div>
                            <div className="flex justify-between">
                                <p className='flex  gap-15 text-dark_sky font-sans font-semibold items-center '><img src={logo2} alt="logo1" /> <span>AUS</span></p>
                                <p className='text5 font-semibold'><span style={{ fontWeight: "400" }}>(20 ov. T 161)</span> 154/8</p>
                            </div>
                            <p className='text4'>India won by 6 runs</p>
                        </div>


                    </div>
                </div> */}
            </div>

            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-20">
                    <SwiperSlide className='h-[190px]'>
                        <div className=" w-[465px]">
                            <div className="bg-white p-20 w-full h-[192px]">
                                <div className='flex flex-col gap-15'>
                                    <div className="flex justify-between items-center">
                                        <p className='text-text_dark_grey font-sans  text-lg  font-medium'>5th T20</p>
                                        <p className='text4'>Bengaluru</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className='flex  gap-15 text-dark_sky font-sans font-semibold items-center '><img src={logo1} alt="logo1" /> <span>IND</span></p>
                                        <p className='text5 font-semibold' >160/8</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className='flex  gap-15 text-dark_sky font-sans font-semibold items-center '><img src={logo2} alt="logo1" /> <span>AUS</span></p>
                                        <p className='text5 font-semibold'><span style={{ fontWeight: "400" }}>(20 ov. T 161)</span> 154/8</p>
                                    </div>
                                    <p className='text4'>India won by 6 runs</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='h-[190px]'>
                        <div className=" w-[465px]  ">
                            <div className="bg-white p-20 w-full h-[192px]">
                                <div className='flex flex-col gap-15'>
                                    <div className="flex justify-between items-center">

                                        <p className='text-text_dark_grey font-sans  text-lg  font-medium '>5th T20</p>
                                        <p className='text4'>Bengaluru</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className='flex  gap-15 text-dark_sky font-sans font-semibold items-center '><img src={logo1} alt="logo1" /> <span>IND</span></p>
                                        <p className='text5 font-semibold' >160/8</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className='flex  gap-15 text-dark_sky font-sans font-semibold items-center '><img src={logo2} alt="logo1" /> <span>AUS</span></p>
                                        <p className='text5 font-semibold'><span style={{ fontWeight: "400" }}>(20 ov. T 161)</span> 154/8</p>
                                    </div>
                                    <p className='text4'>India won by 6 runs</p>
                                </div>


                            </div>
                        </div>
                    </SwiperSlide>

                </div>


            </Swiper>
        </>
    );
};

export default LiveScore;