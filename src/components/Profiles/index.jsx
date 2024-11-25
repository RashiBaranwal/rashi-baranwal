import React, { useRef, useEffect } from "react";
import "./Profiles.css";
import { FaSquareGithub } from "react-icons/fa6";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Profiles = () => {
  const container = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const el = container.current;
    gsap.fromTo(
      ".profile__head",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: el,
        },
      }
    );

    gsap.fromTo(
      ".profile",
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "-100% bottom",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section id="profiles" ref={container}>
      <div className="section__wrapper profiles__wrapper">
        <div className="section__header center">
          <h2 className="primary__title">Coding Profiles</h2>
          <p className="text__muted description">
          Explore my coding journey across top platforms, tackling diverse problems from data structures to complex algorithms. These profiles highlight my problem-solving skills, dedication to learning, and passion for writing efficient, optimized code. See how I turn challenges into opportunities for growth and mastery!
          </p>
        </div>

        <div className="profiles__group">
          <article className="profile">
            <div className="profile__top">
              <div className="icon__container">
                <FaSquareGithub className="icon" />
              </div>
              <h3 className="title">GitHub</h3>
            </div>
            <div className="profile__middle">
              <p className="text__muted description">
                Passionate developer with a knack for open-source contributions
                and impactful repositories. Committed to clean code and
                innovative solutions—explore my GitHub to see ideas come to life
                <br />
                <strong>Followers:</strong> 76+
                <br />
                <strong>Repositories:</strong> 50+
                <br />
                <strong>Total Contributions:</strong> 1000+
              </p>
            </div>
            <div className="profile__bottom">
              <button className="btn btn__primary"><a href="https://github.com/RashiBaranwal" target="_blank" rel="noopener noreferrer">View Profile</a></button>
            </div>
          </article>

          {/* End github */}

          <article
            className="profile"
            style={{ "--color-primary": "blueviolet" }}
          >
            <div className="profile__top">
              <div className="icon__container">
                <SiGeeksforgeeks className="icon" />
              </div>
              <h3 className="title">GeeksForGeeks</h3>
            </div>
            <div className="profile__middle">
              <p className="text__muted description">
                Proud problem solver and coding enthusiast! Ranked{" "}
                <strong>#220</strong> at VIT Bhopal University. Explore my
                profile to see consistent effort and a passion for coding.
                <br />
                <strong>Coding Score:</strong> 1262
                <br />
                <strong>Problems Solved:</strong> 438
                <br />
                <strong>Current POTD Streak:</strong> 40 days
                <br />
                <strong>Language Used:</strong> C++, Java, Python
                <br />
              </p>
            </div>
            <div className="profile__bottom">
              <button className="btn btn__primary"><a href="https://www.geeksforgeeks.org/user/rashi1704h9og/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user" target="_blank" rel="noopener noreferrer">View Profile</a></button>
            </div>
          </article>

          {/* End gfg */}

          <article className="profile">
            <div className="profile__top">
              <div className="icon__container">
                <SiLeetcode className="icon" />
              </div>
              <h3 className="title">LeetCode</h3>
            </div>
            <div className="profile__middle">
              <p className="text__muted description">
              Explore my journey of consistent efforts in competitive
                programming!
                <br />
                <strong>Contest Rating:</strong> 1,487
                <br />
                <strong>Problems Solved:</strong> 89 / 3367
                <br />
                <strong>Global Ranking:</strong> 295,598 / 627,990
                <br />
                <strong>Achievements:</strong> Earned the{" "}
                <strong>50 Days Badge 2024</strong>.<br />
                <br />
                <strong>Activity:</strong> 117 submissions in past year
                
              </p>
            </div>
            <div className="profile__bottom">
              <button className="btn btn__primary"><a href="https://leetcode.com/u/rashi_04/" target="_blank" rel="noopener noreferrer">View Profile</a></button>
            </div>
          </article>

          {/* End leetcode */}
          
        </div>
      </div>
    </section>
  );
};

export default Profiles;
