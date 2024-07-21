import React, { useEffect, useState, useRef } from "react";
import "../styles/components/Navbar.css";
import brander from '../image/Navbar/brander.png'
import checkIn from '../image/Navbar/check-in.png'
import checkOut from '../image/Navbar/check-out.png'
import Dropdown from "./Dropdown";
import SelectPeople from "./SelectPeople";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Navbar() {

  const [titleNavbar, setTitleNavbar] = useState([
    { title: "Hotels" },
    { title: "Flights" },
    { title: "Airport Transfer" },
    { title: "Car Rental" },
    { title: "Things to Do" }
  ]);
  const [locationHotel, setLocationHotel] = useState([
    {
      district: 'Pattaya',
      city: 'Chonburi, Thailand',
    },
    {
      district: 'Bangkok',
      city: 'Thailand',
    },
  ]);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpenStartDate, setIsOpenStartDate] = useState(false);
  const [isOpenEndDate, setIsOpenEndDate] = useState(false);
  const dropdownStartDateRef = useRef(null);
  const dropdownEndDateRef = useRef(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleClickStartDate = () => {
    setIsOpenStartDate(!isOpenStartDate)
  }
  const handleClickEndDate = () => {
    setIsOpenEndDate(!isOpenEndDate)
  }

  const handleClickOutside = (event) => {
    if (dropdownStartDateRef.current && !dropdownStartDateRef.current.contains(event.target)) {
      setIsOpenStartDate(false)
    }
    if (dropdownEndDateRef.current && !dropdownEndDateRef.current.contains(event.target)) {
      setIsOpenEndDate(false)
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <div className="navbar-container">
      <div className="bg-navbar">
        <div className="brander-menu-navbar">
          <img src={brander} alt="" className="image-brander"></img>
          <ul className="menu-navbar">
            {titleNavbar.map((data, index) =>
            (
              <li className="li-menu" key={index}>{data?.title}</li>
            )
            )}
          </ul>
        </div>
        <div className="btn-navbar">
          <button className="btn-login btn">Login</button>
          <button className="btn-reg btn">Register</button>
        </div>
      </div>
      <div className="bg-navbar-search">
        <Dropdown dataLocation={locationHotel}></Dropdown>

        <div className="dropdown-date">
          <div className="dropdown-date-content">
            <div ref={dropdownStartDateRef} className="bg-check-in">
              <button className="btn-check-in" onClick={handleClickStartDate}>
                <img src={checkIn}></img>
                Check-in
              </button>
              {isOpenStartDate && (
                <div className="bg-check-in-color">
                  <div className="letter-check-in" >
                    <div className="lt-check-in">Check-in</div>
                  </div>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    inline
                    monthsShown={2}
                  />
                </div>
              )}
            </div>
            <div ref={dropdownEndDateRef} className="bg-check-out">
              <button className="btn-check-out" onClick={handleClickEndDate}>
                <img src={checkOut}></img>
                Check-out
              </button>
              {isOpenEndDate && (
                <div className="bg-check-out-color">
                  <div className="letter-check-out" >
                    <div className="lt-check-out">Check-out</div>
                  </div>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    inline
                    monthsShown={2}
                  />
                </div>
              )}

            </div>
          </div>
        </div>




        <SelectPeople></SelectPeople>
        <button className="btn-search btn set"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? <svg className="svg-search" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.248"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#D5AA7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> : <svg className="svg-search" viewBox="0 0 24 24" fill="none" width="16px" height="16px" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.248"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>}
          search
        </button>

      </div>
    </div>
  );

}

export default Navbar;