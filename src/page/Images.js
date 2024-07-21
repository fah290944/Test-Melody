import React, { useEffect, useState } from "react";
import "../styles/page/Images.css";
import arrow1 from '../image/Home/arrow1.png'
import img1 from '../image/pageImages/img1.png'
import img2 from '../image/pageImages/img2.png'
import img3 from '../image/pageImages/img3.png'
import img4 from '../image/pageImages/img4.png'
import img5 from '../image/pageImages/img5.png'
import img6 from '../image/pageImages/img6.png'
import img7 from '../image/pageImages/img7.png'
import img8 from '../image/pageImages/img8.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import chevronLeft from '../image/pageImages/chevron-left.png'
import chevronRight from '../image/pageImages/chevron-right.png'


function Images() {

  const [selected, setSelected] = useState(0)
  const [type, setType] = useState("")

  const next = () => {
    if (selected >= imgShow.length - 1) {
      setSelected(0)
    } else {
      setSelected(prev => prev + 1)
    }
  }

  const prev = () => {
    if (selected <= 0) {
      setSelected(imgShow.length - 1)
    } else {
      setSelected(prev => prev - 1)
    }
  }

  const [imgTemp, setImgTemp] = useState([
    {
      img: img1,
      type: "bedroom"
    },
    {
      img: img2,
      type: "bedroom"
    },
    {
      img: img3,
      type: "bedroom"
    },
    {
      img: img4,
      type: "lobby"
    },
    {
      img: img5,
      type: "bedroom"
    },
    {
      img: img6,
      type: "bedroom"
    },
    {
      img: img7,
      type: "lobby"
    },
    {
      img: img8,
      type: "bedroom"
    }])

  const [imgShow, setImgShow] = useState([]);

  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    setSelected(0)
    if (type) {
      setImgShow(imgTemp?.filter(img => img?.type == type))
    } else {
      setImgShow(imgTemp)
    }
  }, [type])

  return (
    <div className="images-container">
      <div className="tag-images-page">
        <div className="letter-tag-images-page">
          Home
        </div>
        <img className="img-arrow-90" src={arrow1}></img>
        <div className="letter-tag-images-page">Hotels</div>
        <img className="img-arrow-90" src={arrow1}></img>
        <Link className="out-line" to={"/"}>
          <div className="letter-tag-images-page">THE LUXURY HOTEL</div>
        </Link>
        <img className="img-arrow-90" src={arrow1}></img>
        <div className="letter-tag-images">Photo by Hotel</div>
      </div>
      <div className="bg-lt-photo">
        <h1 className="lt-photo">Photo by Hotel</h1>
      </div>
      <div className="carousel-container">
        <div onClick={() => prev()}>
          <img src={chevronLeft} ></img>
        </div>
        {imgShow.length > 0 && (<>
          <img src={imgShow[selected].img} width="800px" height="420px"></img>
        </>)}
        <div onClick={() => next()}>
          <img src={chevronRight}></img>
        </div>
      </div>
      <div className="app">
        <div className="tab-navigation">
          <button className={`btn-navigation ${type == '' ? 'selected' : ''}`} onClick={() => setType("")}>
            All Photos
          </button>
          <button className={`btn-navigation ${type == 'bedroom' ? 'selected' : ''}`} onClick={() => setType("bedroom")}>Bedroom({imgTemp.filter(img => img.type == "bedroom").length})</button>
          <button className={`btn-navigation ${type == 'lobby' ? 'selected' : ''}`} onClick={() => setType("lobby")}>Lobby({imgTemp.filter(img => img.type == "lobby").length})</button>
        </div>
        <div className="image-grid">
          {
            type && imgShow?.filter(src => src.type == type)?.map((src, index) => (
              <img width="250px" height="194px" onClick={() => setSelected(index)} key={index} src={src?.img} className={`grid-image ${index == selected ? 'selected' : ''}`} />
            ))
          }
          {!type && imgShow?.map((src, index) => (
            <img width="250px" height="194px" onClick={() => setSelected(index)} key={index} src={src?.img} className={`grid-image ${index == selected ? 'selected' : ''}`} />
          ))}
        </div>
      </div>
    </div>
  );

}

export default Images;