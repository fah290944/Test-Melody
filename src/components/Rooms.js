import React, { useEffect, useState } from "react";
import "../styles/components/Rooms.css";
import chevronup from '../image/Components/Overview/mdi_chevron-up.png'
import person from '../image/Components/Rooms/person-fill.png'


function Rooms({ roomData }) {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        setRooms(roomData)
    }, [roomData])


    return (
        <div className="room-container">
            <h3 className="lt-room">ROOMS</h3>
            {rooms?.map((data, index) =>
            (
                <div className="bg-rooms" key={index}>
                    <div className="letter-name-rooms">{data?.namerooms}</div>
                    <div className="a-room">
                        <div className="room-option-img">
                            <img width="340px" height="200px" src={data?.img}></img>
                            <div className="room-option">
                                <h5 className="lt-a-room">Room Option(s)</h5>
                                <p className="lt-a-room op-letter h">{data?.roomOption}</p>
                            </div>
                        </div>
                        <div className="guest">
                            <h5 className="lt-a-room">Guest(s)</h5>
                            <div className="sum-img-person area">
                                <p className="lt-a-room op-letter">{data?.guest}</p>
                                <div className="img-person">
                                    <img width="16px" height="16px" src={person}></img>
                                    <img width="16px" height="16px" src={person}></img>
                                </div>
                            </div>
                        </div>
                        <div className="price-room-night">
                            <h5 className="lt-a-room">Price/room/night</h5>
                            <p className="lt-a-room op-letter area">{data?.price}</p>
                        </div>
                        <button className="btn-choose">Choose</button>
                    </div>
                    <div className="see-room">
                        <div className="li-see-room" >See room details</div>
                        <img src={chevronup}></img>
                    </div>
                </div>
            )
            )}
        </div>
    );

}
export default Rooms;