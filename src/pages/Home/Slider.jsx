import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const Slider = () => {
    return (
        <div >
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src="https://i.postimg.cc/5tgPSQVv/pexels-cottonbro-5853667.jpg" className=''/>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.postimg.cc/Nf2zv06q/pexels-sarah-chai-7282403.jpg" className=''/>
                   
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.postimg.cc/DwVYvK6W/pexels-sunsetoned-7235668.jpg" className=''/>
                 
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.postimg.cc/Nj1CLPCd/pexels-william-fortunato-6393333.jpg" className=''/>
                   
                </SwiperSlide>
                {/* <SwiperSlide>
                    <img src="https://i.postimg.cc/5ycBpVpd/happy-bearded-man-business-clothes-looking-camera.jpg" />
                </SwiperSlide> */}
            </Swiper>
        </div>
    );
};

export default Slider;