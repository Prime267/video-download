import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import logo from '../assets/logo.png';
import robotHand from '../assets/robotHand.png';
import Login from '../login/login';
import SolutionDevelopment from '../solutionDevelopment/solutionDevelopment';
import FeasibilityStudy from '../feasibilityStudy/feasibilityStudy';
import {languages} from '../languages';

console.log(logo);

const Main = () => {
    const [language, setLanguage] = useState("en");

    const handleLanguage = (language) => (event) => {
      setLanguage(language);
    };
    return (
        <div class="container-fluid header">
            <div class="row main">
                <div class="col">
                    <img src={logo} class="logo" />
                </div>
                <div class="col">
                    <button class="btn-started">{languages[language].btnStarted}</button>
                    <div class="dropdown">
                        <button class="dropbtn">EN</button>
                        <div class="dropdown-content">
                            <a href="#EN" onClick={handleLanguage("en")}>EN</a>
                            <a href="#UA" onClick={handleLanguage("ua")}>UA</a>
                            <a href="#Pl" onClick={handleLanguage("pl")}>PL</a>
                            <a href="#DE" onClick={handleLanguage("de")}>DE</a>
                        </div>
                    </div>
                </div>
            </div>
            //<div class="row">
                <div class="col solution-wrapper">
                    <img src={robotHand} class="robot-hand" />
                </div>
                <div class="col text-wrapper">
                    <div class="text-header">{languages[language].solution}</div>
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
            <Login />
        </div>
    )
}

export default Main;