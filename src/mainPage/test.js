import React from 'react';
import './test.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Test = () => {
    return (
        <div className="container-fluid">
            <div className="row header-background">
                <div className="col-10">
                    <div className="text-header">
                        <img src="https://images.folloze.com/image/upload/c_fill,f_auto,q_auto/v1639728737/crybr3lmz6bxgak2srmf.png" />
                    </div>
                    <div className="text-header">
                        <h2>AI for Workplace Safety</h2>
                        <FontAwesomeIcon className="coffee" icon={faCoffee} />
                        <FontAwesomeIcon icon="fa-thin fa-laptop" />
                    </div>
                </div>
                <div className="col-2">

                </div>
            </div>
        </div>
    )
}

export default Test;