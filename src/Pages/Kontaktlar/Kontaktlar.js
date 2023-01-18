import React from 'react';
import {Link} from "react-router-dom";
import "./kontaktlar.scss";

const Kontaktlar = () => {
    return (
        <>
            <div className="container">
                <h4><Link to="/">Home |</Link><span>Kontaktlar</span></h4>
                <div className="col-12">
                    <div className="row">
                        <div className="kontaktlar">
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link className="nav-link">Kontaktlar</Link></li>
                                <li className="nav-item"><Link className="nav-link">Rahbariyat bilan aloqa</Link></li>
                            </ul>
                        </div>

                        <div className="raqamlar">
                            <h2>Kontaktlar</h2>
                            <div className="blue_line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Kontaktlar;