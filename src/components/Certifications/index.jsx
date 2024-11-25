import React from "react";
import "./Certifications.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {certificate1} from "../../images";
import { certificate2 } from "../../images";
import { certificate3 } from "../../images";
import { certificate4 } from "../../images";

const data = [
  {
    avatar: certificate1,
    name: "Cloud Computing NPTEL (Elite) Certificate",
    review: ` Successfully completed a 12-week online course on Cloud Computing offered by NPTEL, achieving the prestigious "Elite" certification with a consolidated score of 76%. This included excelling in online assignments (25/25) and a proctored exam. The course provided in-depth knowledge of cloud technologies, deployment models, and architectures.`,
  },
  {
    avatar: certificate2,
    name: "GFG DSA Self Paced Course Certificate",
    review: `Completed an 8-week Data Structures and Algorithms (DSA) Self-Paced course by GeeksforGeeks, gaining hands-on experience in solving complex algorithmic problems. The course covered essential topics like arrays, recursion, linked lists, trees, graphs, and dynamic programming.`,
  },
  {
    avatar: certificate3,
    name: "Bit By Bytes of Computer Networks Certificate",
    review: `Earned a certification for completing "The Bits and Bytes of Computer Networking" course offered by Google through Coursera. This course explored the fundamentals of computer networking, including protocols, IP addressing, network troubleshooting, and security concepts, preparing for real-world networking challenges`,
  },
  {
    avatar: certificate4,
    name: "Technical Lead Appointment Certificate",
    review: `Appointment Certificate as the official recognition of my promotion to Technical Lead for the Blockchain Club of VIT Bhopal in the academic year 2024-25.`,
  },
];

const Certifications = () => {

  return (
    <section id="certifications">
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="primary__title">Certifications</h2>
          <p className="text__muted description">
          Explore milestones that showcase my expertise, growth, and commitment to mastering web development. Each certification reflects my dedication to learning, problem-solving, and delivering impactful digital solutions.
          </p>
        </div>
        <Swiper
          className="certification__container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            700: {
              slidesPerView: 2,
            },
          }}
        >
          {data.map(({ avatar, name, review }, index) => (
            <SwiperSlide className="certification" key={index}>
              <div className="client__avatar">
                <img src={avatar} alt={review} />
              </div>
              <h3 className="client__name">{name}</h3>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Certifications;
