import logo1 from '../../../assets/icons/logo1.svg'
import logo2 from '../../../assets/icons/logo2.png'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperNavButton from "./SwiperNavButton";

const LiveScore = () => {
    const handleSlideChange = (swiper) => {
        const button = document.querySelector('.custom-swiper-button');
        if (swiper.isBeginning) {
            button.textContent = 'Next';
        } else if (swiper.isEnd) {
            button.textContent = 'Prev';
        } else {
            button.textContent = 'Next / Prev';
        }
    };
    return (
        <>
            <h3 className="font-sans text-text_dark_grey text-2xl font-semibold mb-[20px] ">Live Score</h3>

            {/* <div className="grid lg:grid-cols-3 grid-cols-1 gap-20"> */}

            <div className="carousal_swiper">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={1}
                    spaceBetween={16}
                    loop={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                    breakpoints={{
                        700: {
                            slidesPerView: 2,
                            spaceBetween: 10
                            ,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 16,
                        },

                        768: {
                            slidesPerView: 2,
                            spaceBetween: 16,
                        },

                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 16,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="header_car">
                            <div className="header_carousal">
                                <p>Clientes felices</p>

                                <h2>Empresas que confían en nosotros</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="header_car">
                            <div className="header_carousal">
                                <p>Clientes felices</p>

                                <h2>Empresas que confían en nosotros</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="header_car">
                            <div className="header_carousal">
                                <p>Clientes felices</p>

                                <h2>Empresas que confían en nosotros</h2>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperNavButton />
                </Swiper>
            </div>

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
            {/* </div> */}


        </>
    );
};

export default LiveScore;