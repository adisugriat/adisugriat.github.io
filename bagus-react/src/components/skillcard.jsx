import React from 'react';
import './skillcard.css';

const Skillcard = ({skill: { icon, title, about}}) => {
    return (
        <div className="col-lg-6">
            <div className="skill-card">
                <img src={icon} alt="" className="skill-card_icon"/>
                <div className="skill-card-body">
                    <h6 className="skill-card_title">{title}</h6>
                    <p className="skill_card_content">{about}</p>
                </div>
            </div>
        </div>
    );
}

export default Skillcard;
