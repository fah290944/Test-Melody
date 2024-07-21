import React, { useEffect, useState } from "react";
import "../styles/components/Footer.css";
import brander from '../image/Navbar/brander.png'


function Footer() {
    const [titleNavbar, setTitleNavbar] = useState([
        { title: "Hotels" },
        { title: "Flights" },
        { title: "Airport Transfer" },
        { title: "Car Rental" },
        { title: "Things to Do" }
    ]);
    return (
        <div className="footer-container">
            <div className="bg-menu-footer">
                <img src={brander} alt="" className="image-brander"></img>
                <ul className="menu-footer">
                    {titleNavbar.map((data, index) =>
                    (
                        <li className="li-menu" key={index}>{data?.title}</li>
                    )
                    )}
                </ul>
            </div>
            <div className="bg-footer">
                <p className="lt-footer">© 2024 Go TRAVEL, Melody Skill</p>
            </div>
        </div>
    );

}
export default Footer;