import React, { useEffect, useState,useRef} from "react";
import "./Facts.css";
import Odometer from "react-odometerjs";
import gsap from "gsap";
import {useGSAP} from '@gsap/react';

const Facts = () => {
  const [projects, setProjects] = useState(0);
  const [contributions, setContributions] = useState(0);
  const [dsa, setDsa] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setProjects(15);
      setContributions(1000);
      setDsa(700);
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const container = useRef(null);
  gsap.registerPlugin(useGSAP);
  useGSAP(()=>{
    const timeline = gsap.timeline();
    timeline.from(".fact__item",{
      delay:1.5,
      x:-100,
      stagger:.5,
      opacity:0,
    })
  },{scope:container})

  return (
    <div className="fact__container" ref={container}>
      <div className="fact__item">
        <div className="count__container">
          <Odometer value={projects} />
          <span className="indicator">+</span>
        </div>
        <p className="name">Projects Completed</p>
      </div>
      <div className="fact__item">
        <div className="count__container">
          <Odometer value={contributions} />
          <span className="indicator">+</span>
        </div>
        <p className="name">Contributions</p>
      </div>
      <div className="fact__item">
        <div className="count__container">
          <Odometer value={dsa} />
          <span className="indicator">+</span>
        </div>
        <p className="name">DSA Problem Solved</p>
      </div>
    </div>
  );
};

export default Facts;
