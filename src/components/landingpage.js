import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';
export default class LandingPage extends Component{
    render(){
        return(
           <div style={{width:'100%', margin: 'auto'}}>
           <Grid className="landing-grid">
            <Cell col={12}>
            <img 
            src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
            className="avatar-img"/>
            <div className="banner-text">
            <h1>Full stack web developer</h1>
            <hr/>
            <p>ASP.NET | React |NodeJS | Javascript | MongoDb</p>
            <div className="social-links">
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" area-hidden="true"/>
            </a>
            <a href="https://github.com/lohumi/ReactShoppingCart" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" area-hidden="true"/>
            </a>
            </div>
            </div>

            </Cell>
            </Grid>
           </div>
        )

    }
}