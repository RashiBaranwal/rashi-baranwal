import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="container">
      {/* <div className="section__header exp1">
        <h2 className="primary__title exp2">About Journey</h2>
      </div> */}
      <main className="row">
        {/* Education Section */}
        <section className="col">
          <header className="title">
            <h2>EDUCATION</h2>
          </header>
          <div className="contents">
            <div className="box">
              <h4>Vellore Institute Of Technology, Bhopal (B Tech. CS)</h4>
              <h3>Aug 2022 - Sep 2026</h3>
              <p>
                {" "}
                GPA: 8.92 <br />
                Branch : CSE Core <br />
                {/* <br />
                • Pursuing a degree in Computer Science with a focus on software
                development, algorithms, and web technologies. Involved in
                various technical clubs, projects, and internships to enhance
                practical knowledge in the field. */}
              </p>
            </div>
            <div className="box">
              <h4>Vidya Devi Jindal School (Higher Secondary Education)</h4>
              <h3>Apr 2020 - Jun 2022</h3>
              <p>
                Grade : 94% <br />
                Activities and societies : Music ,Dance, Volleyball , Basketball
                and Coding.
                <br />
                Subjects: PCM with Economics & Dance(Kathak)
                <br />
                {/*• Completed Higher Secondary education with a specialization in
                Science. Developed a strong foundation in PCM with Economics &
                Dance(Kathak).Participation in coding competitions and school
                projects. */}
              </p>
            </div>
            <div className="box">
              <h4>ST THOMAS SCHOOL (Primary Education)</h4>
              <h3>Apr 2008 - Apr 2020</h3>
              <p>
                Grade : 94.4% <br />
                Subjects: Physics, Chemistry, Biology, Maths, English, Hindi,
                Commercial Application, History and Geography.
                <br />
                Activities and societies : Dancing, Music & Basketball.
                {/* <br />
                <br />
                • Built a solid academic foundation in core subjects. Actively
                engaged in extracurricular activities, laying the groundwork for
                a passion in technology and coding. */}
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="col">
          <header className="title">
            <h2>EXPERIENCE</h2>
          </header>
          <div className="contents">
            <div className="box">
              <h4>EVOLVEDEV</h4>
              <h3>FULL STACK DEVELOPER (Jun 2024 - Now)</h3>
              <p>
                <br />• Created an optimized landing page with Figma, React JS,
                and Tailwind CSS, increasing leads by 40% and enhancing user
                experience by 30%.
              </p>
            </div>
            <div className="box">
              <h4>BLOCKCHAIN CLUB</h4>
              <h3>Technical Team Lead (Nov 2023 - Now)</h3>
              <p>
                <br />• Leading the Blockchain Club's technical team, driving
                blockchain projects and fostering innovation at VIT Bhopal.
              </p>
            </div>
            <div className="box">
              <h4>VITRONIX CLUB</h4>
              <h3>Technical Team Core Member (Aug 2023 - Apr 2024)</h3>
              <p>
                <br />
                Contributed to tech projects as a core team member and organized
                the EDGETRONIX workshop for 200 participants, leading Arduino
                demos and quizzes.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Experience;
