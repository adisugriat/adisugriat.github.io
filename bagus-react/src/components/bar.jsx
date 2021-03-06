import React from 'react';
// import python from '../assets/icons/python.svg';
import './resume.css';

const Bar = ({value: { icon, name, level } }) => {
    const bar_width = `${level}%`;
    return (
        <div className="bar">
            <div className="bar_wrapper" style={{
                "width": bar_width
            }}>
                <span className="bar_name">
                    <img src={icon} alt="icon" className="bar_icon mr-2"/> {name}
                </span>
            
            </div>
        </div>
    );
}

export default Bar;
