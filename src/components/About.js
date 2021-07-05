import React from 'react';
import AboutBtn from './Button/AboutBtn';

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6 p-25">
                        <h3>About Us</h3>
                        <h1>WELCOME TO MAESTRO PIZZINI</h1>
                        <p>here you getting a pizza with extra maddnes Blah blah
                        here you getting a pizza with extra maddnes Blah blah
                        </p>
                        <AboutBtn />
                    </div>
                    <div className="col-6">
                        <div className="about__img">
                            <img src="https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80" alt="pizz ki image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
