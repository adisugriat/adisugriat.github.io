import React, { Component } from 'react';
import facebook from '../assets/icons/facebook.svg';
// import instagram from '../assets/icons/instagram.svg';
// import github from '../assets/icons/github.svg';
import pin from '../assets/icons/pin.svg';
import tie from '../assets/icons/tie.svg';
import adis from '../assets/mighty-coder.svg';
import Cv from '../assets/Cv.pdf';
// import Saya from '../assets/sertific/adis.svg';

class Sidebar extends Component {
    
    render() {
        const handleEmailMe = ()=>{
            window.open("mailto:adisug934@gmail.com");
        }

        return (
            <div className="sidebar">
               <img src={adis} alt="avatar" className="sidebar_avatar" />
               <div className="sidebar_name">Adi <span>Sugriat</span></div>
               <div className="sidebar_item sidebar_title">Web Developer</div>
               <a href={Cv} download="Cv.pdf">
                   <div className="sidebar_item sidebar_resume">
                       <img src={tie} alt="resume" className="sidebar_icon" />Download My CV
                   </div>
               </a>
               <figure className="sidebar_social-icon">
                   <a href="https://ms-my.facebook.com/adi.sugriat.7">
                       <img src={facebook} alt="facebook" className="sidebar_icon" />
                    </a>
                   {/* <a href="#">
                       <img src={instagram} alt="instagram" className="sidebar_icon" />
                    </a> */}
               </figure>
               <div className="sidebar_contact">
                   <div className="sidebar_item sidebar_github">
                       <a href="htpps://www.linkedin.com/in/adi-sugriat-a012031a4"><img src={pin} alt="linkedin" className="sidebar_icon" />linkedin</a>
                   </div>
                   <div className="sidebar_location">
                       <img src={pin} alt="location" className="sidebar_icon"/>
                       Kab.Bandung, Indonesia</div>
                   <div className="sidebar_item">adisug934@gmail.com</div>
                   <div className="sidebar_item">No WA: 089644523410</div>
               </div>
               <div className="sidebar_item sidebar_email" onClick={handleEmailMe}>email me</div>
            </div>
        );
    }
}

export default Sidebar;
