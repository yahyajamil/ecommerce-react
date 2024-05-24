import React, { useState } from 'react'
import AccordinItem from './AccordinItem'
import data from './AccordinData';
import './Accordin.css';


const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const evenItems = data.filter((item, index) => index % 2 === 0);
    const oddItems = data.filter((item, index) => index % 2 !== 0);

    return (
        <>
            <div className='container'>
                {evenItems.map((item, index) => (
                    <AccordinItem
                        key={index * 2}
                        question={item.question}
                        answer={item.answer}
                        isOpen={activeIndex === index * 2}
                        onClick={() => { handleItemClick(index * 2) }}
                    />
                ))}
            </div>
            <div className='container'>
                {oddItems.map((item, index) => (
                    <AccordinItem
                        key={index * 2 + 1}
                        question={item.question}
                        answer={item.answer}
                        isOpen={activeIndex === index * 2 + 1}
                        onClick={() => { handleItemClick(index * 2 + 1) }}
                    />
                ))}
            </div>
        </>
    )
};

export default Accordion;
