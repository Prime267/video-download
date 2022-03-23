import React from 'react';
import './solutionDevelopment.css';
import robotHand from '../assets/robotHand.png';

const SolutionDevelopment = () => {
    return (
        <div class="row">
                <div class="col solution-wrapper">
                    <img src={robotHand} class="robot-hand" />
                </div>
                <div class="col text-wrapper">
                    <div class="text-header">Solution Development</div>
                    <div class="parag1">
                        AI-based automation is hard to do alone. There <br />
                        are so many things to consider: AI vendor, <br />
                        system integrator, cloud infrastructure, <br />
                        maintenance. <br />
                    </div>
                    <div class="parag1">
                        Our experienced team can help you not only to <br />
                        understand the landscape of current automation <br />
                        opportunities but fit an optimal solution for your <br />
                        business.
                    </div>
                    <div class="parag1">
                        We make robots and human work together <br/> 
                        safely.
                    </div>
                </div>
            </div>
    )
}

export default SolutionDevelopment;