import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

export default function Divide3(props) {
  const {text1,text2}=props;
  return (
    <div className="container">
        <div className='row'>
            <div className='col-6'>{text1}</div>
            <div className='col-6'>{text2}</div>
        </div>
    </div>
  )
}
