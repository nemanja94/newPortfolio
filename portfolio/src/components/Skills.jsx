import React from "react";
import HTMLImg from "../assets/html.png";
import CSSImg from "../assets/css.png";
import BootstrapImg from "../assets/bootstrap.png";
import TailwindImg from "../assets/tailwind.png";
import JavaScriptImg from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import AngularImg from "../assets/angular.png";
import NodeImg from "../assets/node.png";
import NestImg from "../assets/nest.png";
// import GitHubImg from "../assets/github.png";
import MySQLImg from "../assets/mysql.png";
import PostgresImg from "../assets/postgres.png";
import MongoDBIMg from "../assets/mongo.png";
import LinuxImg from "../assets/linux.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full lg:h-screen h-[1025px] bg-[#0a192f] text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-start w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600  ">
            Skills
          </p>
          <p className="py-4">
            // These are the techonologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {/* <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTMLImg} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSSImg} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={BootstrapImg}
              alt="Bootstrap icon"
            />
            <p className="my-4">Bootstrap</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={TailwindImg}
              alt="Tailwind icon"
            />
            <p className="my-4">Tailwind</p>
          </div> */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScriptImg} alt="JS icon" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={AngularImg} alt="Angular icon" />
            <p className="my-4">Angular</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={NodeImg} alt="Node icon" />
            <p className="my-4">NodeJS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={NestImg} alt="NestJS icon" />
            <p className="my-4">NestJS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-32 mx-auto" src={MySQLImg} alt="MySQL icon" />
            <p className="my-4">MySQL</p>
          </div>
          {/* <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={PostgresImg}
              alt="Postgres icon"
            />
            <p className="my-4">Postgres</p>
          </div> */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MongoDBIMg} alt="MongoDB icon" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-32 mx-auto" src={LinuxImg} alt="Linux icon" />
            <p className="my-4">Linux</p>
          </div>
          {/* <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHubImg} alt="GitHub icon" />
            <p className="my-4">GITHUB</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
