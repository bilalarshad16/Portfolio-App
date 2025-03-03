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
          I'm a passionate and dedicated Frontend Developer with a flair for
          crafting immersive user experiences. My journey in web development has
          been a dynamic exploration of creativity, innovation, and a commitment
          to delivering seamless user interfaces.
        </p>

        <br />

        <p className="text-md sm:text-xl">
          I joined TURINGOID, a Karachi-based software house, for a 3-month
          onsite internship as a Frontend Intern, where I worked on building
          responsive user interfaces using Tailwind CSS and converted HTML/CSS
          templates into React.js applications and also gained an understanding
          of version control systems like GitHub. In June 2025, I joined
          Virtuosoft as an Intern and have since grown into my current role as
          an Associate Software Engineer - Next and Flutter. Here, I contribute
          to building scalable applications, enhancing user interfaces, and
          expanding my expertise in both web and mobile development.{" "}
        </p>
        <br />
        {/* <p className="text-md sm:text-xl">
          In June 2025, I joined Virtuosoft as an Intern and have since grown
          into my current role as an Associate Software Engineer - Next and
          Flutter. Here, I contribute to building scalable applications,
          enhancing user interfaces, and expanding my expertise in both web and
          mobile development.{" "}
        </p>
        <br /> */}
        <p className="text-md sm:text-xl">
          I'm always eager to connect with individuals and companies to
          contribute to their projects and be a part of innovative teams.
        </p>
      </div>
    </div>
  );
};

export default About;
