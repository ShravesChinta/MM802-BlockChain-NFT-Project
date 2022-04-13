import React, { useState } from "react"
import data from "../data/images.json"
import Modal from "../components/Modal"
import './AssetsGallery.css'
function AssetsGallery() {
  const [clickedImg, setClickedImg] = useState(null);
  const [imageInfo, setImageInfo] = useState('');

  const handleClick = (item, index) => {
    // setCurrentIndex(index);
    setClickedImg(item.link);
    setImageInfo(item.text);
    };
    
  return (
    <div className="AssetsGallery"> 
        <p>NFT Assets Gallery</p>
        {data.data.map((item, index)=> (
            <div key={index} className="pics">
                <img 
                    src={item.link} 
                    alt={item.text}
                    onClick={() => handleClick(item, index)}
                />
                <h2>{item.text}</h2>
            </div>    
        ))}
      <div>
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            // handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            // handelRotationLeft={handelRotationLeft}
            imageInfo={imageInfo}
          />
        )}
      </div>
    </div>

  )
}

export default AssetsGallery