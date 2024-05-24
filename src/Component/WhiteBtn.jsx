import React from 'react';
import './WhiteBtn.css';

export default function WhiteBtn(props) {
  return (
    <button type='button' className='white-btn'><span><i className='fa fa-long-arrow-right'></i> <span>{props.text}</span></span></button>
  )
}
