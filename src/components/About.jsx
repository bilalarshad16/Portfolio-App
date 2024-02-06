import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mt-24 sm:mt-20">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>
        <p className="text-md sm:text-xl mt-14">
         I'm a passionate and dedicated Frontend developer with a flair for crafting immersive experiences for users.  My journey in the realm of web development has been a dynamic exploration of creativity, innovation, and a commitment to delivering seamless user interfaces. 
        </p>

        <br />

        <p className="text-md sm:text-xl">
          I have the experience of converting HTML/CSS templates into React js applications. My first 2-month virtual internship at Codsoft as Web developer Intern helped me to build creative web applications. I collaborated with the team of experts virtually and gained valuable insights of the industry's latest trends. Then I joined "TURINGOID", a Karachi-based software house for a 3-month onsite internship as a Frontend Intern. There, I worked mainly on building responsive User Interfaces for my team through Tailwind CSS, also got the understanding of using version control systems like Github. Currently I'm on my journey of learning Next.js to enhance my Frontend Development skills.  
        </p>
        <br />
        <p className="text-md sm:text-xl">Currently, I'm seeking for the position of React Developer Intern or junior React Developer.</p>
      </div>
    </div>
  );
};

export default About;