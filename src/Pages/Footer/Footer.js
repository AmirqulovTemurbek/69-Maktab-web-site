import React from 'react';
import "./footer.scss";
import {Link} from "react-router-dom";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {FiFacebook, FiInstagram, FiTwitter} from "react-icons/fi";
// import {FaTelegramPlane} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="email">
                        <h3>Yangliklarimizga obuna bo‘ling!</h3>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="E-mail"/>
                            <div className="input-group-append">
                                <button className="btn" type="submit">Yuborish</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="moliya">
                    <img className="gerb" src="/images/gerb.png" alt="Error"/>
                    <img className="flag_line mx-1" src="/images/flag_line.png" alt="Error"/>
                    <h1 className="ml-2">O‘zbekiston respublikasi
                        Moliya vazirligi</h1>
                </div>

                <div className="row footer_menu">
                    <div className="footer1">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link">Tariflar</Link></li>
                            <li className="nav-item"><Link className="nav-link">Internet</Link></li>
                            <li className="nav-item"><Link className="nav-link">Xizmatlar</Link></li>
                            <li className="nav-item"><Link className="nav-link">Internet-do'kon</Link></li>
                        </ul>
                    </div>
                    <div className="footer2">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link">Roumerlarga</Link></li>
                            <li className="nav-item"><Link className="nav-link">To'lov</Link></li>
                            <li className="nav-item"><Link className="nav-link">FunZone</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="line"></div>

            <div className="footer-modal">
                <div className="container ">
                    <div className="row">
                        <div className="public">
                            Illustration graphic art design format
                            Public domain license
                        </div>
                        <div className="footer_icons">
                            <button type="button" className="btn icon"><img src="/images/facebook.png" alt="Error"/></button>
                            <button type="button" className="btn icon"><img src="/images/instagram.png" alt="Error"/></button>
                            <button type="button" className="btn icon"><img src="/images/twitter.png" alt="Error"/></button>
                            <button type="button" className="btn icon"><img src="/images/telegram.png" alt="Error"/></button>
                        </div>
                        <div className="grafik">
                            Illustration graphic art design format
                            Public domain license
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Footer;