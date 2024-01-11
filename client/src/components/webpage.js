import React from "react";
import Chtml from"../Pages/WebCPage/chtml";
import { Link } from 'react-router-dom';


function webpage(){

    return(
        <div className="font-bold-lg text-yellow-600 fs-5">
         Hello Learner .....Follow the path for Web Development and Get the Certification
        <br></br>
        <Link to="/Chtml">
          <button  id="go-to-new-page" type="button" class="btn btn-primary btn-block mt-5">Html</button>
        </Link>
<button type="button" class="btn btn-secondary btn-block mt-5">CSS</button><br></br>
<button type="button" class="btn btn-success btn-block mt-5" >Java script</button><br></br>
<button type="button" class="btn btn-danger btn-block mt-5 ">SQL</button><br></br>
<button type="button" class="btn btn-warning btn-block  mt-5 ">React</button><br></br>
<button type="button" class="btn btn-info btn-block mt-5">NODE JS</button><br></br>
      </div>
      
    )
}
export default webpage;