import React, { useEffect, useState } from "react";
import "../styles/page/Home.css";
import arrow1 from '../image/Home/arrow1.png'
import Overview from "../components/Overview";
import smartAc from '../image/Components/Overview/hugeicons_smart-ac.png'
import restaurant from '../image/Components/Overview/restaurant.png'
import pool from '../image/Components/Overview/pool.png'
import parking from '../image/Components/Overview/parking.png'
import wifi from '../image/Components/Overview/logos_wifi.png'
import clockwise from '../image/Components/Overview/clockwise-fill.png'
import lift from '../image/Components/Overview/lift.png'
import activity from '../image/Components/Overview/activity.png'
import food from '../image/Components/Overview/food.png'
import wellness from '../image/Components/Overview/wellness.png'
import Rooms from "../components/Rooms";
import room1 from '../image/Components/Rooms/room1.png'
import room2 from '../image/Components/Rooms/room2.png'
import shop from '../image/Components/Location/shop.png'
import camera from '../image/Components/Location/camera.png'
import champagne from '../image/Components/Location/champagne.png'
import Location from "../components/Location/Location";
import locationFav from '../image/Home/location-favorite.png'
import imgHome1 from '../image/Home/img-home1.png'
import imgHome2 from '../image/Home/img-home2.png'
import imgHome3 from '../image/Home/img-home3.png'
import imgHome4 from '../image/Home/img-home4.png'
import imgHome6 from '../image/Home/img-home6.png'
import cameraLinear from '../image/Home/camera-linear.png'
import bgBox from '../image/Home/bg-box.png'
import { Link, Link as RouterLink } from "react-router-dom";
function Home() {

  const [isHovered, setIsHovered] = useState(false);
  const [clickLink, setClickLink] = useState('target1');
  const [mainFacilities, setMainFacilities] = useState([
    {
      title: "AC",
      img: smartAc
    },
    {
      title: "Restaurant",
      img: restaurant
    },
    {
      title: "Swimming Pool",
      img: pool
    },
    {
      title: "24-Hour Front Desk",
      img: clockwise
    },
    {
      title: "Parking",
      img: parking
    },
    {
      title: "Elevator",
      img: lift
    },
    {
      title: "WiFi",
      img: wifi
    }
  ]);
  const [special, setSpecial] = useState([
    {
      title: "Food and Drinks",
      img: food,
      detail: ["Room service [24-hour", "Coffee shop", "Room service"]
    },
    {
      title: "Wellness",
      img: wellness,
      detail: ["Salon", "Fitness center"]
    },
    {
      title: "Activities",
      img: activity,
      detail: ["Swimming Pool"]
    },
  ]);
  const [room, setRoom] = useState([
    {
      namerooms: "Superior Modern",
      roomOption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ",
      guest: 2,
      price: "฿1,358",
      img: room1
    },
    {
      namerooms: "Business Suite",
      roomOption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ",
      guest: 2,
      price: "฿2,358",
      img: room2
    },
  ]);
  const [boxNear, setBoxNear] = useState([
    {
      name: "Explore",
      icon: camera,
      subName: "The Gallery",
      datailSub: "0.2 km form Property",
    },
    {
      name: "Play",
      icon: champagne,
      subName: "The Bar",
      datailSub: "0.1 km form Property",
    },
    {
      name: "Shop",
      icon: shop,
      subName: "The Mall",
      datailSub: "0.8 km form Property",
    },
  ]);


  useEffect(() => {
    const savedLink = localStorage.getItem('clickLink');
    if (savedLink) {
      setClickLink(savedLink);
    }
  }, []);

  const handleClick = (id) => {
    setClickLink(id);
    localStorage.setItem('clickLink', id);
  };

  const handleResetClick = () => {
    localStorage.setItem('clickLink', "target1");
  };


  return (
    <div className="home-container">
      <div className="tag-home-page">
        <div className="letter-tag-home-page">
          Home
        </div>
        <img className="img-arrow-90" src={arrow1}></img>
        <div className="letter-tag-home-page">Hotels</div>
        <img className="img-arrow-90" src={arrow1}></img>
        <div className="letter-tag-home">THE LUXURY HOTEL</div>
      </div>
      <div className="bg-home">
        <h1 className="letter-name-home">THE LUXURY HOTEL</h1>
        <div className="icon-location-fav">
          <img src={locationFav} width="20px" height="20px"></img>
          <p className="letter-location-fav">The Luxury Hotel ,Pattaya,Chonburi,Thailand.</p>
        </div>
        <div className="homepage-link-img">
          <div className="bg-img-link">
            <img src={imgHome1} className="w-imgHome1"></img>
            <div className="bg-review-see-photo">
              <div className="bg-polygon">
                <img src={bgBox} width="160px" height="56px" className="set-polygon">
                </img>
                <div className="lt-polygon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#d5aa7f" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z" /></svg>
                  <div className="set-lt-lt-polygon">9.0 Reviews</div>
                </div>
              </div>
              <Link className="out-line" to={"/images"}>
                <button className="btn-see-photo" component={RouterLink} to="/images"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={handleResetClick}
                >
                  {isHovered ?

                    <img src={cameraLinear} width="20px" height="20px"></img>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="black" stroke-width="1.5"><circle cx="12" cy="13" r="3" /><path d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.408 4.408 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697c0-3.065 0-4.597-.749-5.697a4.407 4.407 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.405 4.405 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364c0 3.064 0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21Z" /><path stroke-linecap="round" d="M19 10h-1" /></g></svg>
                  }
                  See all photos
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-grid-img">
            <img src={imgHome2} className="bg-all-img-grid1" ></img>
            <img src={imgHome3} className="bg-all-img-grid2" ></img>
            <img src={imgHome4} className="bg-all-img-grid3"></img>
            <img src={imgHome6} className="bg-all-img-grid4" ></img>
          </div>
        </div>
      </div>
      <div className="tab-navigation-home">
        <div className="bg-tab-navigation-home">
          <a href="#overview"
            onClick={() => handleClick('target1')}
            className={clickLink === 'target1' ? 'active-overview' : 'btn-navigation-home'}
          >
            Overview
          </a>
          <a href="#rooms"
            onClick={() => handleClick('target2')}
            className={clickLink === 'target2' ? 'active-overview' : 'btn-navigation-home'}
          >Rooms</a>
          <a href="#location"
            onClick={() => handleClick('target3')}
            className={clickLink === 'target3' ? 'active-overview' : 'btn-navigation-home'}
          >
            Location</a>
        </div>
        <div className="bg-price-home">
          <div className="lt-price-home">฿1,358</div>
          <button className="btn-view-deal">View This Deal</button>
        </div>
      </div>
      <div id="overview" >
        <Overview dataMainFacilities={mainFacilities} specialData={special}></Overview>
      </div>
      <div id="rooms" >
        <Rooms roomData={room}></Rooms>
      </div>
      <div id="location" >
        <Location boxNearData={boxNear}></Location>
      </div>
    </div>
  );

}

export default Home;