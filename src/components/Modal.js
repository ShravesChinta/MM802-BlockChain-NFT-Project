import AssetsGallery from "../pages/AssetsGallery";
import CloseIcon from '@mui/icons-material/Close';
import './modal.css'
import { Button } from "@mui/material";
const Modal = ({
    clickedImg,
    setClickedImg,
    imageInfo,
}) => {
    const handleClick = (e) => {
      if (e.target.classList.contains("closs-modal")) {
        setClickedImg(null);
      }
    };
  
    return (
      <>
      <div className="modal">
        <div className="overlay" onClick={handleClick}>
          {/* <p>image is {clickedImg}</p> */}
          <CloseIcon 
            className="closs-modal" 
            fontSize="large" 
            onClick={handleClick}/>

          <img src={clickedImg}/>
          <p className="imageDes">{imageInfo}</p>
        </div>
      </div>
      </>
    );
};

export default Modal;