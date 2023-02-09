import React from 'react'
import {Button} from 'react-bootstrap'

export default function Buttonwarn(props) {
  const {clickfunc,name}=props
  return (
    <div>
        <center>
          <Button onClick={clickfunc} variant="danger">{name}</Button>
        </center>
    </div>
  )
}
