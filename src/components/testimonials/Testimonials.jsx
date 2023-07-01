import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eaque. Asperiores perspiciatis deserunt placeat temporibus aliquam, tenetur accusamus voluptas ducimus error omnis consectetur dolorem rem a odio architecto quis sint ab labore nam. Voluptatibus perferendis repellat eligendi, repudiandae fugiat doloremque animi sint delectus voluptate!'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eaque. Asperiores perspiciatis deserunt placeat temporibus aliquam, tenetur accusamus voluptas ducimus error omnis consectetur dolorem rem a odio architecto quis sint ab labore nam. Voluptatibus perferendis repellat eligendi, repudiandae fugiat doloremque animi sint delectus voluptate!'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eaque. Asperiores perspiciatis deserunt placeat temporibus aliquam, tenetur accusamus voluptas ducimus error omnis consectetur dolorem rem a odio architecto quis sint ab labore nam. Voluptatibus perferendis repellat eligendi, repudiandae fugiat doloremque animi sint delectus voluptate!'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eaque. Asperiores perspiciatis deserunt placeat temporibus aliquam, tenetur accusamus voluptas ducimus error omnis consectetur dolorem rem a odio architecto quis sint ab labore nam. Voluptatibus perferendis repellat eligendi, repudiandae fugiat doloremque animi sint delectus voluptate!'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Client</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container" // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review})=>{
            return(
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials