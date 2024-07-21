import React, { useEffect, useState } from "react";
import "../../styles/components/Location.css";
import locationFavorite from '../../image/Components/Location/location-favorite.png'
import img1 from '../../image/Components/Location/img1.png'
import star from '../../image/Components/Location/star.png'
import DropdownLocation from "../Location/DropdownLocation";




function Location({ boxNearData }) {

    const [boxNear, setBoxNear] = useState([]);
    const [currentDropdown, setCurrentDropdown] = useState();

    useEffect(() => {
        setBoxNear(boxNearData)
    }, [boxNearData])

    const toggleDropdown = (index) => {
        setCurrentDropdown(index);
    };


    return (
        <div className="location-nearby-container">
            <h3 className="letter-location-hotel">Where’s the LUXURY Hotel</h3>
            <div className="bg-location-nearby">
                <iframe className="map-location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8700.944863915065!2d100.529676606063!3d13.728714649562129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f2940cb3013%3A0x8b66d8fea0193de6!2z4Liq4Li14Lil4Lih!5e0!3m2!1sth!2sth!4v1721207294234!5m2!1sth!2sth" width="850px" height="500px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="what-nearby-container">
                    <div className="box-near">What’s near by</div>
                    <div className="box-current">
                        <div className="bg-box-current">
                            <div className="box-current-container" >
                                <img src={locationFavorite} width="20px" height="20px"></img>
                                <div className="lt">Current Selection</div>
                            </div>
                        </div>
                    </div>
                    <div className="box-star">
                        <div className="bg-box-star">
                            <div className="box-star-container">
                                <img src={img1} width="100px" height="80px"></img>
                                <div className="score-container">
                                    <div className="lt">THE LUXURY HOTEL 2</div>
                                    <div className="bg-score">
                                        <img src={star} width="14px" height="14px"></img>
                                        <img src={star} width="14px" height="14px"></img>
                                        <img src={star} width="14px" height="14px"></img>
                                        <img src={star} width="14px" height="14px"></img>
                                        <div className="lt set-pad">9.0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    {boxNear?.map((location, index) =>
                    (
                        <DropdownLocation onClick={() => toggleDropdown(index)} key={index} locationNear={location} open={index == currentDropdown}></DropdownLocation>
                    )
                    )}
                </div>
            </div>
        </div>
    );

}
export default Location;