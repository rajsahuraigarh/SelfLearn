import React, { useEffect } from "react";
import { Link, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Layout/Layout";
import Webpage from "../../Components/webpage"; 
import AppPage from "../../Components/AppPage";

const Courses = () => {
  const dispatch = useDispatch();
  const { coursesData } = useSelector((state) => state.course);

  return (
    <Layout>
      <div className="min-h-[90vh] pt-12 pl-20 flex flex-col flex-wrap gap-10 text-white">
        <h1 className="text-center text-3xl font-semibold">
          Explore the courses {" "}
          <span className="font-bold text-yellow-500">Start Your journey</span>
        </h1>
        <h1>To start the journey with web development you need to know the content of the web development by<br></br> clicking the button and getting the career path for the web development And Achive the free Certification</h1>
        <Link to="/Webpage">
          <button type="button" className="btn btn-primary btn-block"> List of Web Development course & Certification</button>
        </Link>
        <br></br>
        <h1>To start the journey with App development you need to know the content of the App development by<br></br> clicking the button and getting the career path for the App development And Achive the free Certification</h1>
        <Link to="/AppPage">
          <button type="button" className="btn btn-secondary btn-block">List of App Development Course & Certification</button>
        </Link>
      </div>
    </Layout>
  );
};

export default Courses;

