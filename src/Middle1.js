import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import middle1bg from './middle1bg.jpeg';
var height=380;
const Middle1 = () => (
    
<div>

        <div class="position-relative">
        <img src={middle1bg} style={{"width":"100%"}} height={height}alt="" /> 
        </div>
        <Container>
            <figcaption class="middle1_figcaption">
                <p class="middle_first_text">In Collaboration with Matrix Labs, Alvin and University of Alberta.</p>
                <br/>
                <p class="middle_second_text"></p>
            </figcaption>
        </Container>
        
</div>
);


export default Middle1;
