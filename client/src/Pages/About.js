import React from "react";
import Layout from "../Layout/Layout";
import aboutMainImage from "../Assets/Images/aboutMainImage.png";
import raj from "../Assets/Images/QuotesPersonalityImage/raj.jpeg";
import payal from "../Assets/Images/QuotesPersonalityImage/Payal.jpeg";
import abhi from "../Assets/Images/QuotesPersonalityImage/abhi.jpeg";
import gau from "../Assets/Images/QuotesPersonalityImage/gau.jpeg";

const About = () => {
  return (
    <Layout>
      <div className="pl-20 pt-10 flex flex-col text-white">
        {/* creating the about page main section */}
        <div className="flex items-center gap-5 mx-10">
          {/* out moto section */}
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and Quality Education
            </h1>
            <p className="text-xl text-gray-200">
              Our goal is to provide the affordable and quality education to the
              world. We are providing the platform for the aspiring 
              students to share their creativity, skills and knowledge to each
              other to empower and contribute in the growth and wellness of the
              mankind.
            </p>
          </section>

          {/* our moto image section */}
          <div className="w-1/2">
            <img
              id="test1"
              style={{
                filter: "drop-shadow(0px 10px 10px rgb(0, 0, 0))",
              }}
              className="drop-shadow-2xl "
              src={aboutMainImage}
              alt="aboutMainImage"
            />
          </div>
        </div>

        {/* top personalities quotes section */}
        <div className="carousel m-auto w-1/2 my-16">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              {/* for personality image */}
              <img
                className="w-40 rounded-full border-2 border-gray-400"
                src={raj}
                alt="RAj "
              />
              {/* for writting the quotes */}
              <p className="text-xl text-gray-200">
                "Role in Project as Full Stack developer"
              </p>
              {/* for personality name */}
              <h3 className="text-2xl font-semibold">RAJ SAHU</h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              {/* for personality image */}
              <img
                className="w-40 rounded-full border-2 border-gray-400"
                src={abhi}
                alt="Abhi"
              />
              {/* for writting the quotes */}
              <p className="text-xl text-gray-200">
              "Role in Project as Full Stack developer"
              </p>
              {/* for personality name */}
              <h3 className="text-2xl font-semibold">Abhishek Vishwakarma</h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide3" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              {/* for personality image */}
              <img
                className="w-40 rounded-full border-2 border-gray-400"
                src={payal}
                alt="Payal"
              />
              {/* for writting the quotes */}
              <p className="text-xl text-gray-200">
              "Role in Project as Content Writer"
              </p>
              {/* for personality name */}
              <h3 className="text-2xl font-semibold">Payal Pasi</h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide4" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              {/* for personality image */}
              <img
                className="w-40 rounded-full border-2 border-gray-400"
                src={gau}
                alt="gautam"
              />
              {/* for writting the quotes */}
              <p className="text-xl text-gray-200">
              "Role in Project as UI Designer"
              </p>
              {/* for personality name */}
              <h3 className="text-2xl font-semibold">Gautam Chandrakar</h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
