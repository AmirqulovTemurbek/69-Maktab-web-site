import React from 'react';
import {Link} from "react-router-dom";
import "./hodimlar.scss";



const Hodimlar = () => {

    return (
        <>
            <div className="container">
                <h4><Link to="/">Home |</Link><span>Hodimlar</span></h4>
                <div className="col-12">
                    <div className="row">
                        <div className="hodimlar">
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link className="nav-link">Direktor</Link></li>
                                <li className="nav-item"><Link className="nav-link">zauchlar</Link></li>
                                <li className="nav-item"><Link href="#oqituvchi" to="/hodimlar" className="nav-link">o’qituvchilar</Link></li>
                                <li className="nav-item"><Link className="nav-link">maktab ishchilari</Link></li>
                                <li className="nav-item"><Link className="nav-link">vakansiyalar</Link></li>
                            </ul>
                        </div>
                        <div className="ruyxat col-8">
                            <div className="direktor">
                                <h2>Direktor</h2>
                                <img src="/images/1.png" alt="Error"/>
                                <div>
                                    <h5>Dildora Rustamova Ahmatovna</h5>
                                </div>
                            </div>
                            <div className="zauchlar">
                                <h2>Zauchlar</h2>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-3">
                                            <img src="/images/2.png" alt="Error"/>
                                            <p>Dildora Rustamova Ahmatovna</p>
                                        </div>
                                        <div className="col-3">
                                            <img src="/images/2.png" alt="Error"/>
                                            <p>Dildora Rustamova Ahmatovna</p>
                                        </div>
                                        <div className="col-3">
                                            <img src="/images/2.png" alt="Error"/>
                                            <p>Dildora Rustamova Ahmatovna</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="oqituvchilar">
                                <h2 id="oqituvchi">O’qituvchilar</h2>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-3">
                                            <img src="/images/1.png" alt="Error"/>
                                            <p>Dildora Rustamova Ahmatovna</p>
                                        </div>
                                        <div className="col-3">
                                            <img src="/images/1.png" alt="Error"/>
                                            <p>Dildora Rustamova Ahmatovna</p>
                                        </div>
                                        <div className="col-3">
                                            <img src="/images/1.png" alt="Error"/>
                                            <p>Dildora Rustamova Ahmatovna</p>
                                        </div>
                                        <div className="col-3">
                                            <img src="/images/1.png" alt="Error"/>
                                            <p>Dildora Rustamova Ahmatovna</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="ishchilar">
                                <h2>Maktab ishchilari</h2>
                                <div className="row">
                                    <div className="col-3">
                                        <img src="/images/1.png" alt="Error"/>
                                        <p>Dildora Rustamova Ahmatovna</p>
                                    </div>
                                    <div className="col-3">
                                        <img src="/images/1.png" alt="Error"/>
                                        <p>Dildora Rustamova Ahmatovna</p>
                                    </div>
                                    <div className="col-3">
                                        <img src="/images/1.png" alt="Error"/>
                                        <p>Dildora Rustamova Ahmatovna</p>
                                    </div>
                                    
                                </div>

                                <div className="row">
                                    <div className="col-3">
                                        <img src="/images/1.png" alt="Error"/>
                                        <p>Dildora Rustamova Ahmatovna</p>
                                    </div>
                                    <div className="col-3">
                                        <img src="/images/1.png" alt="Error"/>
                                        <p>Dildora Rustamova Ahmatovna</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hodimlar;