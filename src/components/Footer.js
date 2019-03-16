import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
    render() {
        return (
            <footer id='connect'>
                <h2><a href="mailto:medina.m1016@gmail.com" target="_top"><b>Let's Connect!</b></a></h2><br />
                <div id="footer-links">
                    <a href="https://github.com/mmedina3" rel="noopener noreferrer" target="_blank"><img src={require("../image/github.png")} alt="Github Link" /></a>
                    <a href="https://www.instagram.com/mmedina3/" rel="noopener noreferrer" target="_blank"><img src={require("../image/insta.png")} alt="Instagram Link" /></a>
                    <a href="https://twitter.com/mmed1na" rel="noopener noreferrer" target="_blank"><img src={require("../image/twitter.png")} alt="Twitter Link" /></a>
                </div>
                <br />
                <p>Made by Michelle Medina </p>
            </footer>
        );
    }
}

export default Footer;