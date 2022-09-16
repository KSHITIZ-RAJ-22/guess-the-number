import React from 'react';
import { Button } from 'reactstrap';

export default function Btn(props) {
  return (
    <Button className='btn-primary' onClick={props.click}>{props.title}</Button>
  )
}
