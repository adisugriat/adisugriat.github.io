import React, { useState, useEffect } from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = ()=> {

    const [active, setActive] = useState('');

    useEffect(()=>{
        let currentURL = window.location.href
        console.log(currentURL);
        if(currentURL.endsWith('/'))
            setActive('About');
        else if(currentURL.endsWith('/setificate'))
            setActive('Sertificate');
        else if(currentURL.endsWith('/resume'))
            setActive('Resume');
    }, [active])

    return (
        <div className="navbar">
            <div className="navbar_active">
                {active}
            </div>
            <div className="navbar_items">
                {active !== 'About' &&
                    <Link to='/'>
                        <div className="navbar_item" onClick={()=>setActive("About")}>About</div>
                    </Link>
                }
                {active !== 'Resume' ?
                    <Link to='/resume'>
                        <div className="navbar_item" onClick={()=>setActive("Resume")}>Resume</div>
                    </Link>
                    : null}
                {active !== 'Sertificate' &&
                    <Link to='/sertificate'>
                        <div className="navbar_item" onClick={()=>setActive("Sertificate")}>Sertificate</div>
                    </Link>
                }
            </div>
        </div>
    );
}

export default Navbar;
