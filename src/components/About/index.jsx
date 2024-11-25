import React,{useEffect,useRef} from "react";
import "./About.css";
import { profile2, profile3, profile4, profile5, profile6 } from "../../images";
import gsap from "gsap";
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from "gsap/ScrollTrigger";

const About = () => {
  const container = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(()=>{
    const el = container.current;
    gsap.fromTo(".about__container",{
      scale:0.7
    },
    {
      scale:1,
      scrollTrigger:{
        trigger:el,
        scrub:true
      }
    }
  )
  },[])
  return (
      <section id="about" ref={container}>
        <div className="section__wrapper about__container">
          <div className="me__container blur-effect">
            <div className="photo__container">
              <img src={profile6} alt="" />
            </div>
          </div>
          <div className="section__header">
            <h2 className="primary__title">About</h2>
            <h1 className="title">
              I am <span className="color__primary">Rashi Baranwal</span>
            </h1>
            <p className="text__muted description">
            A passionate full-stack developer and problem solver, skilled in crafting dynamic web solutions. With a knack for blending design with functionality, I've developed projects that not only optimize performance but also enhance user experience. From leading successful development teams to securing accolades in coding challenges, I'm always ready to push boundaries in technology. Let's build something great together!
            </p>
          </div>
        </div>
      </section>
  );
};

export default About;
