import React, { Component } from 'react';
import Bar from './bar';
import react from '../assets/icons/react.svg';
import python from '../assets/icons/python.svg';
import js from '../assets/icons/js.svg';
import ux from '../assets/icons/ux.svg';
import './resume.css';

const languages = [
    {
        icon: python,
        name:'Python',
        level:'50'
    },
    {
        icon: react,
        name:'Ruby',
        level:'40'
    },
    {
        icon: react,
        name:'Reactjs',
        level:'80'
    },
    {
        icon: js,
        name:'Javascript',
        level:'89'
    },
    {
        icon: react,
        name:'Nodejs',
        level:'70'
    },
    {
        icon: ux,
        name:'Bootstrap',
        level:'80'
    },
    {
        icon: react,
        name:'Materializecss',
        level:'80'
    },
    {
        icon: react,
        name:'HTML5',
        level:'90'
    },
    {
        icon: react,
        name:'CSS3',
        level:'85'
    },
    {
        icon: react,
        name:'SASS',
        level:'76'
    },
    {
        icon: react,
        name:'PHP',
        level:'45'
    },
    {
        icon: react,
        name:'And Others ++',
        level:'60'
    }
];

const tools = [
    {
        icon: react,
        name:'Webpack',
        level:'40'
    },
    {
        icon: react,
        name:'Parcel',
        level:'86'
    },
    {
        icon: react,
        name:'MySql',
        level:'78'
    },
    {
        icon: react,
        name:'Workbox',
        level:'70'
    },
    {
        icon: react,
        name:'GIT',
        level:'68'
    },
    {
        icon: react,
        name:'Axios',
        level:'78'
    },
    {
        icon: react,
        name:'NPM',
        level:'73'
    },
    {
        icon: react,
        name:'And Others ++',
        level:'60'
    }
];

class Resume extends Component{
    render(){
        return(
            <>
                <div className="container resume">
                    <div className="row">
                        <div className="col-lg-6 resume-card">
                            <h4 className="resume-card_heading">
                                Short Story
                            </h4>
                            <div className="resume-card_body">
                                <h5 className="resume-card_title">
                                    Web Developer
                                </h5>
                                <p className="resume-card_name">
                                    My Study
                                </p>
                                <p className="resume-card_details">
                                I studied programming in early 2018 self-taught because I was very serious about being able to program in early 2019 I learned several bootcamps but online or remote, including Dicoding Academy, Prograte, Skillvul, and udemy.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 resume-card">
                            <h4 className="resume-card_heading">
                                Experience
                            </h4>
                            <div className="resume-card_body">
                                <h5 className="resume-card_title">
                                    Create static and dynamic web projects
                                </h5>
                                <p className="resume-card_name">
                                    
                                </p>
                                <p className="resume-card_details">
                                    I create a web there are two ways, by using a CMS or creating a web from 0 to WPAs.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 resume-languages">
                            <h5 className="resume-languages_heading">
                                Languages and Framework skills
                            </h5>
                            <div className="resume-languages_body">
                                {
                                    languages.map(language =>{
                                        return(
                                            <Bar value={language} />
                                        )
                                    })
                                }
                                
                            </div>
                        </div>
                        <div className="col-lg-6 resume-languages">
                            <h5 className="resume-languages_heading">
                                Tools skills
                            </h5>
                            <div className="resume-languages_body">
                                {
                                    tools.map(tool => { 
                                        return(<Bar value={tool} />) 
                                    })
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Resume;