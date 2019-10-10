import React from 'react';
import classes from './homePage.css';
import NavElement from './navElement/navElement';
import Patient from '../patient/patient';
import { Link, Route } from 'react-router-dom';

export default class homePage extends React.Component {
    state = {
        navElements : ['donor', 'patient']
    };

    render () {
        return (
            <div>
                <section className={classes.homePage}>
                    <h1>Welcome!</h1>
                    <nav>
                        {
                            this.state.navElements.map(el => (
                                <NavElement key={el} link={el}>{el}</NavElement>
                            ))
                        }
                    </nav> 
                </section>
            </div>
        );
    }
}