import React from 'react';
import "./lokatsiya.scss";
import {Link} from "react-router-dom";

const Lokatsiya = () => {
    return (
        <>
            <div className="container">
                <h4><Link to="/">Home |</Link><span>Lokatsiya</span></h4>
                <div className="col-12">
                    <div className="row">
                        <div className="lokatsiya">
                            <button type="button" className="btn lokatsiya_btn"><h1>Lokatsiya</h1></button>
                        </div>
                        <div className="xarita">
                            <h2>Lokatsiya</h2>
                            <div className="blue_line"></div>

                            <h6>Manzil:</h6>
                            <p>Navoiy v. Xatirchi tumani, 69-maktab</p>
                            <div className="karta">
                                <a className="maktab"
                                   href="https://yandex.uz/maps?utm_medium=mapframe&utm_source=maps"
                                >Яндекс Карты</a>
                                <a className="tashkent"
                                   href="https://yandex.uz/maps/105805/bukhara-province/geo/4194035203/?azimuth=5.470594132014814&display-text=navoiy%20viloyati%20xatirchi%20tumani%2069%20maktab&from=tabbar&ll=65.023926%2C40.529492&mode=search&sctx=ZAAAAAgAEAAaKAoSCb2%2B1qXGeVBAEfnbkq41HERAEhIJAJH12DeS7D8RgOXyioEq2z8iBgABAgMEBSgKOABAtvYLSAFqAnV6nQHNzEw9oAEAqAEAvQFWbe7iwgECAADqAQDyAQD4AQCCAiluYXZvaXkgdmlsb3lhdGkgeGF0aXJjaGkgdHVtYW5pIDY5IG1ha3RhYooCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=65.024008%2C40.530206&source=serp_navig&sspn=0.016137%2C0.007636&text=navoiy%20viloyati%20xatirchi%20tumani%2069%20maktab&tilt=0.8726646259971648&utm_medium=mapframe&utm_source=maps&z=18.23"
                                   className="tashkent">Navoiy v. Xatirchi tumani, 69-maktab</a>
                                <iframe src="https://yandex.uz/map-widget/v1/-/CCUBV6cKkD" width="560" height="400" frameBorder="1"
                                        allowFullScreen="true"></iframe>
                            </div>
                            <p className="online">onlayn xarita orqali ko’rish</p>

                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Lokatsiya;