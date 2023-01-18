import React from 'react';
import "./home.scss";
import {MdOutlineWatchLater} from "react-icons/md";


const Home = () => {

    return (
        <div className="container">
            <div className="yangiliklar">
                <div className="col-12">
                    <h1>Yangiliklar</h1>
                    <div className="blue_line"></div>
                    <div className="row">
                        <div className="col-4">
                            <img src="/images/Yangiliklar1.png" alt="Error"/>
                            <div className="satr"><p>Maktabimiz o’quvchilari adabiyot fan oyligi doirasida ajdodlarimiz me’rosini
                                o’rganmoqda</p></div>
                            <div className="span"><MdOutlineWatchLater/> 09:41</div>
                        </div>
                        <div className="col-4">
                            <img src="/images/Yangiliklar2.png" alt="Error"/>
                            <div className="satr"><p>Yong’in havsizligi mavzusida bo’lib o’tgan seminardan foto report</p></div>
                            <div className="span"><MdOutlineWatchLater/> 09:41</div>
                        </div>
                        <div className="col-4">
                            <img src="/images/Yangiliklar3.png" alt="Error"/>
                            <div className="satr"><p>Maktabimiz o’quvchilari ichki ishlar bo’imi, ish jarayoni bilan yaqindan tanishdilar</p></div>
                            <div className="span"><MdOutlineWatchLater/> 09:41</div>
                        </div>
                        <div className="col-4">
                            <img src="/images/Yangiliklar4.png" alt="Error"/>
                            <div className="satr"><p>Konstitutsiya kuni munosabati bilan maktabda ”Huquq bilimdoni” musobaqasi boshlandi</p></div>
                            <div className="span"><MdOutlineWatchLater/> 09:41</div>
                        </div>
                        <div className="col-4">
                            <img src="/images/Yangiliklar5.png" alt="Error"/>
                            <div className="satr"><p>Shu yilning noyabr oyida Xatirchi tumani “Hokim kubogi” sport musobaqasidan lavhalar</p></div>
                            <div className="span"><MdOutlineWatchLater/> 09:41</div>
                        </div>
                        <div className="col-4">
                            <img src="/images/Yangiliklar6.png" alt="Error"/>
                            <div className="satr"><p>“Kimyo” fan oyligida o’quvchilarimiz olgan bilmlarini amaliyotda qo’llamoqda </p></div>
                            <div className="span"><MdOutlineWatchLater/> 09:41</div>
                        </div>
                    </div>
                </div>
                <div className="barcha">
                    <button className="btn">Barchasini ko‘rish</button>
                </div>
            </div>
            <div className="rang"></div>

            <div className="haqida">
                <div className="col-12">
                    <h1>Maktabimiz haqida</h1>
                    <div className="blue_line"></div>
                    <div className="row">
                        <div className="col-6">
                            <p>Maktabimiz Navoiy viloyati, Xatirchi tumanidagi 69-O’TM hisoblanadi. MAktabimiz tukadagi
                                eng ilg’or maktablardan biridir. O’qituvchi va o’quvchilarimiz o’z ustilarida muntazam
                                ishlovchi, jamiyat va maktab hayotida aktiv qatnashadilar. Maktab hududida bog’, yozgi
                                va qishki sport maydonlari, oshxona, kutbxona, yig’ilish xonalari, 200 o’rinli majlislar
                                zali mavjud. Maktabimiz shu yining yoz oylarida to’liq tamirdan chiqdi va hozi o’zining
                                yangi ko’rinishiga ega va barcha honlara zamon talabiga mos ravishda jihozdan
                                chiqarildi. Maktabizmi moddiy-texnik bazasi to’li yangilandi. Endi bizdan faqat bularga
                                munosib ilm olish qoldi halos! Sizlarni maktabimizda kutib qolamiz.</p>
                        </div>
                        <div className="col-6">
                            <img src="/images/maktab69.png" alt="Error"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="media">
                <div className="col-12">
                    <h1>Media kontent</h1>
                    <div className="blue_line"></div>

                    <div className="row">
                        <div className="col-7">
                            <a className="img-1">
                                <img src="/images/media1.png" alt="Error"/>
                            </a>
                            <a className="img-2">
                                <img src="/images/media2.png" alt="Error"/>
                            </a>
                            <a className="img-3">
                                <img src="/images/media2.png" alt="Error"/>
                            </a>
                            <a className="img-4">
                                <img src="/images/media4.png" alt="Error"/>
                            </a>
                            <a className="img-5">
                                <img src="/images/media5.png" alt="Error"/>
                            </a>
                            <a className="img-6">
                                <img src="/images/media6.png" alt="Error"/>
                            </a>
                        </div>
                        <div className="col-5">
                            <img src="/images/media7.png" alt="Error"/>
                            <h5>Ulug’ o’tmishdan buyuk kelajaksari...</h5>
                            <div className="start">
                                <img src="/images/start.png" alt="Error"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;