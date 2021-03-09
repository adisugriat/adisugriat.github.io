import React, { Component } from 'react';
import './skillcard.css';
import Serticard from './serticard';
import listserts from '../assets/listseri';

class Sertificate extends Component{
    render(){
        return(
            <>
                <div className="about">
                    <h6 className="about_intro">
                    Some of my certificates in some bootcamp that I received
                    </h6>
                    <div className="container about_container">
                        <div className="row">
                            {
                                listserts.map(listsert =>{
                                    return <Serticard values={listsert}/>;
                                })
                            }
                            {/* <Serticard /> */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Sertificate;