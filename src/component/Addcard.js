import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Form, Button} from "react-bootstrap"

export default function Addcard(props) {

  let uri="http://192.168.55.91:8080/students/"+props.id

  function upd(event){
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    fetch(uri,{method:"PUT",headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(value)})
  }

  return (
    <div className='container card'>
        <Form method={'PUT'} onSubmit={upd}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='studentName' placeholder="Enter Name" defaultValue={props.name} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Branch</Form.Label>
        <Form.Control type="text" name="studentBranch" placeholder="Enter Name"  defaultValue={props.branch}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Gender</Form.Label>
        <Form.Control type="text" name="studentGender" placeholder="Enter Name"  defaultValue={props.gender}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Year</Form.Label>
        <Form.Control type="text" name="studentYear" placeholder="Enter Name"  defaultValue={props.year}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
    </div>
  )
}
