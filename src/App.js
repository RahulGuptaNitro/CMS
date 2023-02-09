import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
//import Divide3 from './component/Divide3';
import Divide2 from './component/Divide2';
import React, { useState, useEffect } from 'react';
import Buttonsuc from './component/Buttonsuc';
import Buttonwarn from './component/Buttonwarn';
import Addcard from './component/Addcard';
//import LoginCard from './component/LoginCard';

function App() {

  const [userData, setuserData] = useState([])
  const [useruiData, setuseruiData] = useState("")
  const [userHead, setuserHead] = useState("")
  const [servurl, setservurl] =  useState("http://192.168.55.91:8080/students")

  useEffect(() => {
    fetch(servurl)
    .then(res=>res.json())
    .then(res=>setuserData(res))
  },[])
  
  function studentFetch(){
    setuseruiData(<div className='row'>
      <h4><center>Student Data</center></h4>
      {userData.map(x=>
      <div className='col-4 card my-1' key={x.id}>
        <center>
        {"Name:"}  {x.studentName} <br></br> 
        {"Course:"}  {x.studentBranch}<br></br> 
        {"Gender:"}  {x.studentGender}<br></br> 
        {"Year:"}  {x.studentYear}

        <Divide2 text1={<Buttonsuc clickfunc={()=>{studentedit(x)}} name={"Update Details"}/>} 
        text2={<Buttonwarn clickfunc={()=>{studentdel(x.id)}} name={"Delete Details"}/>}/>

        </center>
      </div>
  )}</div>)
  .then(fetchdeldata)
  }

function fetchdeldata(){
  fetch(servurl)
    .then(res=>res.json())
    .then(res=>setuserData(res))
}

  function studentdel(delid){
    let x=servurl+"/"+delid;
    fetch(x, {method: "DELETE"})
    .then(res=>res.json())
    .then(res=>{setuseruiData(<div className='row'>
    <h4><center>Student Data</center></h4>
    {res.map(x=>
    <div className='col-4 card my-1' key={x.id}>
      <center>
      {"Name:"}  {x.studentName} <br></br> 
      {"Course:"}  {x.studentBranch}<br></br> 
      {"Gender:"}  {x.studentGender}<br></br> 
      {"Year:"}  {x.studentYear}

      <Divide2 text1={<Buttonsuc clickfunc={()=>{studentedit(x)}} name={"Update Details"}/>} 
      text2={<Buttonwarn clickfunc={()=>{studentdel(x.id)}} name={"Delete Details"}/>}/>

      </center>
    </div>
)}</div>)})
    
  }
    
  function studentedit(x){
    setuseruiData(
    <Addcard id={x.id} name={x.studentName} branch={x.studentBranch} gender={x.studentGender} year={x.studentYear}/>)
  }

  // function loginhead(){
  //   setuserHead(<LoginCard setuserHead={setuserHead} studentFetch={studentFetch}/>);
  // }

  function heading(){
    setuserHead()
  }

  return (
    <div className='container regBody'>
      <div><center><h2><u>College Management System</u></h2></center>
      <Divide2 text1={<Buttonsuc clickfunc={studentFetch} name={"Students"}/>} 
              text2={<Buttonsuc clickfunc={""} name={"Course"}/>}/>
      <hr></hr></div>
      <br></br>
      {useruiData}
    </div>
  );
}

export default App;