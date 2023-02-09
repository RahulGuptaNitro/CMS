import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

export default function Divide3(props) {
  const {text1,text2,text3}=props;
  return (
    <div className="container">
        <div className='row'>
            <div className='col-4'>{text1}</div>
            <div className='col-4'>{text2}</div>
            <div className='col-4'>{text3}</div>
        </div>
    </div>
  )
}
