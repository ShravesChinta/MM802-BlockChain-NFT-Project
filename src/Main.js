import React from 'react'
import mainback from './mainback.jpeg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";

var Link=require('react-router-dom').Link
export default function Banner() {
    return (
        <div>
            <Container>
            <div class="position-relative">
            <img src={mainback} style={{"width":"100%"}} class="img-fluid" alt="" /> 
            </div>
        <figcaption>
        <p class="main_first_text">Your NFT, Give Life to it.</p>
        <br/>
         <p class="main_second_text">MM802 SSRD is the Software which gives life to your NFT by engraving it on objects </p>
        </figcaption>
        <div className='nft-btn'>
         <button type='button'><Link to={"/SignMessage"}>Get Your NFT</Link></button>
       </div>
            </Container>
            </div>
    )
}
