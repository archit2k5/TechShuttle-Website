import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Arjun Sharma",
    role: "Final Year, CSE",
    image: "/img/testimonials/student1.jpg",
    quote:
      "TechShuttle completely transformed my college experience. The workshops and coding events helped me land my dream internship at a top tech company!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Gupta", 
    role: "Third Year, IT",
    image: "/img/testimonials/student2.jpg",
    quote:
      "Being part of TechShuttle has been incredible. The supportive community and learning opportunities are unmatched. I've grown so much as a developer.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Alumni, Batch 2023",
    image: "/img/testimonials/student3.jpg",
    quote:
      "TechShuttle gave me the platform to explore my interests in AI and ML. The connections I made here are invaluable even in my professional career.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneha Agarwal",
    role: "Second Year, ECE",
    image: "/img/testimonials/student4.jpg",
    quote:
      "The coding competitions pushed me out of my comfort zone. I went from a complete beginner to confidently solving DSA problems!",
    rating: 5,
  },
  {
    id: 5,
    name: "Vikash Kumar",
    role: "Third Year, CSE",
    image: "/img/testimonials/student5.jpg",
    quote:
      "The tech talks and industry connect sessions opened my eyes to real-world applications of what we learn. Truly inspiring!",
    rating: 5,
  },
];

const StarRating = ({ rating }) => (
  <div className="testimonial--stars">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? "star filled" : "star"}>
        ★
      </span>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section className="testimonials--section" id="Testimonials">
      <div className="testimonials--header">
        <span className="testimonials--badge">Testimonials</span>
        <h2 className="testimonials--heading">What Our Members Say</h2>
        <p className="testimonials--subheading">
          Hear from our community members about their experiences with TechShuttle
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          1200: {
            slidesPerView: 3,
            centeredSlides: false,
          },
        }}
        className="testimonials--swiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial--card">
              <div className="testimonial--quote-icon">"</div>
              <p className="testimonial--quote">{testimonial.quote}</p>
              <StarRating rating={testimonial.rating} />
              <div className="testimonial--author">
                <div className="testimonial--avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="testimonial--info">
                  <h4 className="testimonial--name">{testimonial.name}</h4>
                  <span className="testimonial--role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
