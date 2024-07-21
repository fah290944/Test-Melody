import React, { useEffect, useState } from "react";
import "../styles/components/Overview.css";
import chevronup from '../image/Components/Overview/mdi_chevron-up.png'
import check from '../image/Components/Overview/check-sm.png'
import ModalComponent from "./ModalComponent";


function Overview({ dataMainFacilities, specialData }) {

    const [mainFacilities, setMainFacilities] = useState([]);
    const [special, setSpecial] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        setMainFacilities(dataMainFacilities)
    }, [dataMainFacilities])

    useEffect(() => {
        setSpecial(specialData)
    }, [specialData])


    return (
        <div className="">
            <div className="overview-container">
                <div className="set-bd-overview">
                    <div className="bg-overview-hotel">
                        <h4 className="titel-hotel">THE LUXURY HOTEL</h4>
                        <p className="detail-hotel">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                        <button className="btn-read-more-hotel" onClick={toggleModal}>
                            <div className="lt-read-more-hotel" >Read More</div>
                            <img src={chevronup}></img>
                        </button>
                        <ModalComponent show={showModal} onClose={toggleModal}></ModalComponent>
                    </div>
                    <div className="bg-get-special">
                        <div className="lt-special">
                            Staycation offers available
                            Get special benefits for your stay
                        </div>
                        <div className="set-position-special">
                            {special.map((data, index) =>
                            (
                                <div className="position-special-container" key={index}>
                                    <div className="icon-special">
                                        <img src={data.img}></img>
                                        <div className="lt-set-special">{data.title}</div>
                                    </div>
                                    {data.detail.map((text, idx) => (
                                        <div className="set-detail-position" key={idx}>
                                            <div className="set-detail-special">
                                                <img src={check}></img>
                                                <div className="lt-set-special">{text}</div>
                                            </div>
                                        </div>
                                    )
                                    )}
                                </div>
                            )
                            )}
                        </div>
                    </div>
                </div>
                <div className="main-faci">
                    <div className="bg-main-facilities">
                        <div className="main-facilities-container">
                            <p className="lt-main-facilities">Main Facilities</p>
                            <div className="container-grid">
                                {mainFacilities?.map((data, index) =>
                                (
                                    <div className="set-lt-main-facilities" key={index}>
                                        <img src={data.img} width='17px' height='15px'></img>
                                        <p className="lt-overview">{data.title}</p>
                                    </div>
                                )
                                )}
                            </div>
                            <div className="read-more-main-faci">
                                <div className="lt-read-more" >Read More</div>
                                <img src={chevronup}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-overview-boder">
                <div className="overview-boder"></div>
            </div>
        </div>
    );

}
export default Overview;