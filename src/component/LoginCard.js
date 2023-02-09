import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Buttonsuc from './Buttonsuc';
import Divide2 from './Divide2';

export default function LoginCard(setuserHead, studentFetch) {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
    );

    const handleSubmit = (event) => {
        // Prevent page reload
        
        event.preventDefault();

        validate(event.target[0].value,event.target[1].value)
      };      

    function validate(x,y){
        if (x==="admin" && y==="admin1234"){
          setuserHead(<div><center><h2><u>College Management System</u></h2></center>
          <Divide2 text1={<Buttonsuc clickfunc={studentFetch} name={"Students"}/>} 
                  text2={<Buttonsuc clickfunc={""} name={"Course"}/>}/>
          <hr></hr></div>)
        }
        else{
          console.log("Invalid")
        }     
    }

  return (
    <div className='container'>
        <div className="card bg-light mb-3">
            <center>
            <div className="card-header"><h2>Student Management System</h2></div>
            <div className="card-body">
            <h4 className="card-title"><u>Sign In</u></h4>
            <form onSubmit={handleSubmit}>
       <div className="input-container">
         <label>Username </label>
         <input type="text" className=' form-control' name="uname" required />
         {renderErrorMessage("uname")}
       </div>
       <div className="input-container">
         <label>Password  </label>
         <input type="password" name="pass" className=' form-control' required />
         {renderErrorMessage("pass")}
       </div>
       <br></br>
       <div>
       <div className="button-container">
         <input type="submit" class='btn btn-success'/>
       </div>
       </div>
     </form>
            </div>
            </center>
        </div>
    </div>
  )
}
