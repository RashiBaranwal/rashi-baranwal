import React,{useRef} from "react";
import "./Header.css";
import { profile1, profile2, profile3, profile4, profile5, profile6 } from "../../images";
import Facts from "./Facts";
import gsap from "gsap";
import {useGSAP} from '@gsap/react';

const Header = () => {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(()=>{
    gsap.fromTo(".profile__photo__container",{
      scale:.5,
      duration:1,
      opacity:0.5,
    },
    {
      scale:1,
      duration:1,
      ease:"sine.in",
      opacity:1,
    }
  )
  gsap.from(".intro__text",{
    fontSize:100,
    duration:1,
    delay:1,
    ease:"sine.in",
  })

  const timeline = gsap.timeline();
  timeline
  .from(".header__info__top",{
    opacity:0
  })
  .from(".header__title",{
    opacity:0,
    y:-30,
  })
  .from(".header__description",{
    opacity:0,
  })
  .from(".btn",{
    x:-40,
    opacity:0,
    stagger:.5,
  })
  },{scope:container})
  return (
    <div>
      <header id="header" className="blur-effect" ref={container}>
        <div className="stroke__text intro__text">HELLO</div>
        <div className="section__wrapper header__container">
          <div className="column intro__container blur-effect">
            <div className="header__info">
              <div className="header__info__top">
                Hello There! I'm{" "}
                <span className="color__primary">Rashi Baranwal</span>
              </div>
              <div className="header__info__middle">
                <h1 className="primary__title header__title">
                  I'M A WEB DEVELOPER
                </h1>
                <p className="text__muted header__description">
                Creating seamless, innovative web solutions that blend cutting-edge technology with intuitive design, driven by a passion for coding and problem-solving.
                </p>
              </div>
              <Facts/>
              <div className="header__info__bottom">
                <button className="btn"><a href="https://drive.google.com/file/d/1vg3fiDAHS_zdyyhtUufnOOH6ZCCHeM3U/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV</a></button>
                <a href="mailto:rashi1704baranwal@gmail.com" className="btn">
                  Email Me
                </a>
              </div>
            </div>
          </div>
          <div className="column profile__wrapper">
            <div className="profile__photo__container">
              <img src={profile6} alt="" className="profile__photo" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
