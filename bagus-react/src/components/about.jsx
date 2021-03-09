import React, { Component } from 'react';
import skills from '../assets/listabout';
import Skillcard from '../components/skillcard';
import './skillcard.css';


class About extends Component{
    render(){
        return(
            <>
                <div className="about">
                    <h6 className="about_intro">
                    I made this portfolio to hone my skills and web App for the hiring process and I am very grateful to the platform that has provided programming lessons, especially web developers, including the bootcamp that I follow:
                    </h6>
                    <div className="container about_container">
                        <h6 className="about_heading">Thank you for</h6>
                        <div className="row">
                            {
                                skills.map(skill=>
                                    <Skillcard skill={skill}/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default About;