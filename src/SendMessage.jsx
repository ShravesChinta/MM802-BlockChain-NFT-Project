import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

function SendMessage(props) {

//function SendMessage({name, message}) {
  return (
          
    <>
        <div>
        <p> {"WalletAdd:" + props.match.params.id} </p>
        </div>
    </>
  );
};

export default SendMessage;
