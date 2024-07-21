import React, { useEffect, useState, useRef, } from "react";
import "../styles/components/SelectPeople.css";
import arrow from '../image/Navbar/arrow.png'
import people from '../image/Navbar/people.png'


function SelectPeople() {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    const [roomOption, setRoomOption] = useState([
        {
            title: "Room",
            min: 1,
            count: 1,
            detail: " "
        },
        {
            title: "Adult",
            min: 1,
            count: 1,
            detail: "Age 18 or above"
        },
        {
            title: "Children",
            min: 0,
            count: 0,
            detail: "Age 0-17"
        }
    ]);

    const handleChangeCounter = (val, index) => {
        const data = roomOption
        let now = data[index]?.count + val
        if (now < data[index]?.min) {
            return;
        }
        data[index].count = now
        setRoomOption([...data])
    }


    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <div ref={dropdownRef} className="dropdown-people">
            <button onClick={toggleDropdown} className="btn-dropdown-people">
                <div className="setting-people">
                    <img className="img-people" src={people}></img>
                    <div>
                        <div className="lt-select">1 Adult</div>
                        <div className="lt-select">1 room</div>
                    </div>
                </div>
                {isOpen ? <img className="img-arrow-180" src={arrow}></img> : <img className="img-arrow" src={arrow}></img>}
            </button>
            {isOpen && (
                <div className="dropdown-content-people">
                    {roomOption?.map((data, index) =>
                    (
                        <div className="counter-section" key={index}>
                            <div className="counter-letter">
                                <div className="counter-title">{data?.title}</div>
                                <span className="counter-detail">{data?.detail}</span>
                            </div>
                            <div className="counter-control">
                                <button className="btn-counter" onClick={() => handleChangeCounter(-1, index)}>
                                    {data?.count > data?.min ?
                                        <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#4B2804" stroke-width="1.5"></circle> <path d="M15 12H9" stroke="#4B2804" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                                        :
                                        <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#757575" stroke-width="1.5"></circle> <path d="M15 12H9" stroke="#757575" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                                    }
                                </button>
                                <span className="counter-value">{data?.count}</span>
                                <button
                                    className="btn-counter"
                                    onClick={() => handleChangeCounter(1, index)}
                                >
                                    <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#4B2804" stroke-width="1.5"></circle> <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#4B2804" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                                </button>
                            </div>
                        </div>
                    )
                    )}
                </div>
            )}
        </div>
    );

}
export default SelectPeople;