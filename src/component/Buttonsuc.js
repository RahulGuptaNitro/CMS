import React from 'react'
import {Button} from 'react-bootstrap'

export default function Buttonsuc(props) {
  const {clickfunc,name}=props
  return (
    <div>
        <center>
          <Button onClick={clickfunc} variant="success">{name}</Button>
        </center>
    </div>
  )
}
