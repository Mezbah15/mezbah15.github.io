/* rafce */
import React from 'react'
import './testimonial.css'
import pic1 from "../../Assets/c1.jpg";
import pic2 from "../../Assets/c1.jpg";
import pic3 from "../../Assets/c1.jpg";
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

 const  data = [
  {
    index: 1,
    image: pic1,
    name: "Khairul Islam, CEO SmartWorkBD",
    review: "You are not your user” is a common UX mantra and one to keep in mind when designing for maximum user understanding. Starting with the basics: Your users may not have the same relationship to technology as you do."
  },
  {
    index: 2,
    image: pic2,
    name: "Jhon Doe, GM Skytech",
    review: "You are not your user” is a common UX mantra and one to keep in mind when designing for maximum user understanding. Starting with the basics: Your users may not have the same relationship to technology as you do.www.github.com"
  },
  {
    index: 3,
    image: pic3,
    name: "Rabish R, CEO Jackpro",
    review: "You are not your user” is a common UX mantra and one to keep in mind when designing for maximum user understanding. Starting with the basics: Your users may not have the same relationship to technology as you do.www.github.com"
  }

]

const testimonial = () => {
  return (
    <section className='testimonials'>
      <h5 className='text-light'> What Clients say</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial_container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({image, name, review}, index) => {
            return (
            <SwiperSlide key={index} className='testimonial'>
              <div className="client-avatar">
                <img src={image} alt="" />
              </div>
{/* To do dynamic By Using map see portfolio jsx */}
              <h5 className='client-name'>{name}</h5>
              <small className='client-review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>   
  )
}

export default testimonial