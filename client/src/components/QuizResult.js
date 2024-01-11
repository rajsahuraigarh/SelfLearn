import React from 'react';
import { Link , Route} from 'react-router-dom';
import Courses from '../Pages/Course/CourseList';
import Webpage from './webpage';
import AppPage from './AppPage';
// import WebNewPage from './WebNewPage';
// import AppNewPage from './AppNewPage';

function QuizResult(props) {
  const { score, wrongCount, tryAgain } = props;
  const isWebScoreHigher = wrongCount > score;

  return (
    <>
      <div className="font-bold-lg text-yellow-600 fs-5">
        All the Best Go To The Above Link For Course Based on Your Interest
      </div>
     
      <div className="space-x-6 btn-btn-primary btn-lg"> 
              <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg mt-10 cursor-pointer hover:bg-Primary-600 transition-all ease-in-out duration-300" onClick={tryAgain}>
              Try Again
              </button>
            
            <Link to={"/"}>
              <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg mt-10 cursor-pointer hover:border-yellow-600 transition-all ease-in-out duration-300">
                Home
              </button>
            </Link>
          </div>
         <br/>
         <br/>
         <br/>

      {isWebScoreHigher ? (
        <Link to="/Webpage" id='Button'>
          <button id="go-to-new-page" type="button" class="btn btn-primary btn-block mt-5">Go to Web New Page</button>
        </Link>
      ) : (
          <Link to="/AppPage">
            <button  id="go-to-new-page" type="button" class="btn btn-primary btn-block mt-5">Go to App New Page</button>
          </Link>
      )}

      {/* Add routes for the new pages */}
      {/* <Route path="/web-new-page" component={WebNewPage} />
      <Route path="/app-new-page" component={AppNewPage} /> */}
    </>
  );
}

export default QuizResult;
