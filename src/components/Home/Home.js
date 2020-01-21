import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
// import PostList from "../Posts/PostList";
import PostData from "../../data/posts";
import classes from './Home.module.css';

class Home extends Component {
    state = {
        data: PostData,
    };

    render() {
        return (
            <Route path="/" exact>
                <div className={classes.Home}>
                    <h1>Latest news</h1>
                    <div className={classes.Home__nav}>
                        {this.state.data.map((postDetail, index) => {
                            const tileStyle = {
                                backgroundImage: `url(${postDetail.urlToImage})`,
                                backgroundPosition: '50% 50%',
                                backgroundSize: 'cover'

                            };
                            return (

                                <Link to={"/" + postDetail.id} key={"link" + postDetail.id} className={classes.tile}
                                      style={tileStyle}>
                                    {/*<img src={postDetail.urlToImage} alt="" className={classes.tile__img}/>*/}
                                    <h2 className={classes.tile__title}>{postDetail.title}</h2>
                                </Link>

                            )
                        })}
                    </div>
                </div>

            </Route>
        );
    }
}

export default Home;