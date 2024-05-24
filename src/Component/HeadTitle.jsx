import React from 'react';
import './HeadTitle.css'

export default function HeadTitle(props) {
    return (
        <div className="head-title">
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
        </div>
    )
}
