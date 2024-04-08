import React, { useContext } from 'react'
import { ContextProvider } from '../Context/Store'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Herobar = () => {
    const {products, setProducts} = useContext(ContextProvider);

    const heroImgs = products?.slice(0, 8);
  return (
    <Swiper effect={'coverflow'}
    grabCursor={true}
    slidesPerView={3}
    spaceBetween={30}
    loop={true}
    coverflowEffect={{
        rotate: 40,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: true
    }}
    autoplay={{delay: 1500, disableOnInteraction: false}}
    pagination = {true}
    modules={[EffectCoverflow, Pagination, Autoplay]}
    className="mySwiper"
    >
        {heroImgs?.map((img, index)=> (
            <SwiperSlide key={index}>
                <img alt='' className=' min-h-[200px] pb-5 lg:pb-0' src={img.thumbnail} />
            </SwiperSlide>
        ))}

    </Swiper>
  )
}

export default Herobar