import React, {Component} from 'react';
// import {Route, Switch} from 'react-router-dom';
import renderHTML from 'react-render-html';
import adsData from '../../../data/ads';
import classes from './Post.module.css';

class Post extends Component {
    state = {
        showContent: true,
        adsContent: adsData

    };

    render() {
        let content = null;
        let rand;

        const adContent = (prevRand) => {
            const dataLength = this.state.adsContent.length;
            // alert(dataLength);
            // let prevRand = rand;
            rand = Math.floor(Math.random()*dataLength);
            while (rand === prevRand) {
                rand = Math.floor(Math.random()*dataLength);
            }

            return  (
                <a className={classes.ad} href={this.state.adsContent[rand].url}>
                    <img className={classes.adImg} src={this.state.adsContent[rand].urlToImage} alt=""/>
                    <p className={classes.adText}>{renderHTML(this.state.adsContent[rand].description)}</p>
                </a>
            );
        } ;
        return (
                    <div className={`${classes.Post} ${this.state.showContent && classes.Post__active}`} >
                        <p>{this.props.date}</p>
                        <p>{this.props.author}</p>
                        <h1 className={classes.title}>{this.props.title}</h1>
                        {!this.state.showContent && <p>{this.props.description}</p>}
                        <img src={this.props.urlToImage}
                             className={classes.img} alt=""/>
                        {adContent()}
                        <p className={classes.text}>{renderHTML(this.props.content)}</p>
                        {adContent(rand)}
                        <br/>
                        <a href={this.props.link}>Link</a>
                    </div>
        );
    }

};

export default Post;
