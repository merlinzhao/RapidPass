import React from 'react';
import footerP from '../Images/rapidpass-footer1.jpg';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Container, Row, Col, Button, Card, Table} from 'react-bootstrap'

export default function Footer() {
   
    return(  
    <div className='main-footer'>
        <div className='container'>
            <div className="row">
                {/* C1 */}
                <div className="col">
                    <h5> RAPIDPASS INC.</h5>
                    <ul className="list-unstyled">
                        <li>905-323-9909</li>
                        <li>Hamilton, ON</li>
                        <li>1280 Main St. </li>
                    </ul>
                </div>
                {/* C2 */}
                <div className="col">
                    <h4> SITEMAP</h4>
                    <ul className="list-unstyled">
                        <li>Home</li>
                        <li>Dashboard</li>
                        <li>About </li>
                        <li>Contact Us </li>
                    </ul>
                </div>
                {/* C1 */}
                <div className="col">
                    <h4> SOCIALS</h4>
                    <ul className="list-unstyled">
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Email </li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className='row'>
                <p className="col-sm">
                   &copy;{new Date().getFullYear()} RAPIDPASS INC | All Rights Reserved | Terms of Service | Privacy
                </p>
            </div>



        </div>
       
        
    </div>
    )
};

    //className="footer-style"