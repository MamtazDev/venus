import { useSwiper } from "swiper/react";
import prev from "../../../assets/icons/add.png";
import nextImage from "../../../assets/icons/auction.svg";
const SwiperNavButton = () => {
  const swiper = useSwiper();
  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()}>
        <img src={prev} alt="" />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <img src={nextImage} alt="" />
      </button>
    </div>
  );
};

export default SwiperNavButton;
