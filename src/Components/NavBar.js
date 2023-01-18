import React, {useState} from 'react';
import "./navbar.scss";
import {Link} from "react-router-dom";
import Modal from "./Modal/Modal";

const NavBar = () => {
    const [modalActive, setModalActive] = useState(true);
    return (
        <>
            <div className="container">
                <div className="first">
                    <Link to="/" className="left">
                        <img className="gerb" src="/images/gerb.png" alt="Error"/>
                        <img className="flag_line mx-1" src="/images/flag_line.png" alt="Error"/>
                        <h1 className="ml-2">Navoiy viloyati, xatirchi tumani, 69-O’TM</h1>
                    </Link>

                    <div className="right ml-auto">
                        <img className="uzb mr-2" src="/images/uzb.png" alt="Error"/>
                        <img className="gerb_icon mr-2" src="/images/gerb_icon.png" alt="Error"/>
                        <img className="music mr-3" src="/images/music.png" alt="Error"/>
                        <button className="ozbek btn mr-2" type="button">
                            <img className="mikrofon" src="/images/mikrofon.png" alt="Error"/> O`zbek
                        </button>
                        <button className="btn number" type="button">
                            +90 123-45-67
                        </button>
                    </div>
                </div>
                <nav className="navbar second navbar-expand-md" id="main_bar">
                    <button type="button" className="btn btn-primary" onClick={() => setModalActive(true)}>Barcha menyu</button>

                    <ul className="navbar-nav">
                        <li className="nav-item"><Link to="/hodimlar" className="nav-link">Hodimlar</Link></li>
                        <li className="nav-item"><Link to="/kontaktlar" className="nav-link">Kontaktlar</Link></li>
                        <li className="nav-item"><Link to="/lokatsiya" className="nav-link">Lokatsiya</Link></li>
                    </ul>
                    <button className="btn ml-auto">Kabinetga kirish</button>
                </nav>

                <Modal active={modalActive} setActive={setModalActive}>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Modal>
            </div>
        </>
    );
};

export default NavBar;