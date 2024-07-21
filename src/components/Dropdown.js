import React, { useEffect, useRef, useState } from "react";
import Vector from '../image/Navbar/Vector.png'
import "../styles/components/Dropdown.css";

function Dropdown({ dataLocation }) {

  const [locationData, setLocationData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('City,Hotel,Place to go');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    setLocationData(dataLocation)
  }, [dataLocation])


  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
      if (selectedOption === "City,Hotel,Place to go") {
        setSelectedOption('City,Hotel,Place to go')
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="dropdown-location">
      <button onClick={toggleDropdown} className="btn-dropdown">
        <img src={Vector}></img>
        {selectedOption}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <div className="lt-dropdown" onClick={() => handleOptionClick("City,Hotel,Place to go")}>
            Popular Destination
          </div>
          {locationData?.map((data, index) =>
          (
            <div className="bg-dropdown-color" key={index} onClick={() => handleOptionClick(data?.district + ", " + data?.city)}>
              <div className="letter-name-city" >
                <div className="lt-name-city">{data?.district}</div>
                <div className="lt-name-city">{data?.city}</div>
              </div>
              <button className="btn-district">
                District / City
              </button>
            </div>
          )
          )}
        </div>
      )}
    </div>
  );

}
export default Dropdown;