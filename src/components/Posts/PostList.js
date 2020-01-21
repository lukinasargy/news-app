import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
// import { getNews } from '../../utils/fetchNews'
import PostData from '../../data/posts';
import Post from "./Post/Post";

class PostList extends Component {
    state ={
        // articles : [],
        data : PostData,
        counter: 0,
        // refreshing: true
    };

    // clickPostHandler = (index) => {
    //     let posts = [...this.state.data];
    //     posts = posts.filter((item, ind) => ind === index);
    //     this.setState({data: posts});
    // };
    // unClickPostHandler =() => {
    //     this.setState({data : PostData});
    // };
    /*fetch NEWS API START*/
    // fetchNews = () => {
    // componentDidMount = () => {
    //     this.fetchNews();
    // };
    //     getNews()
    //         .then(data => {
    //             this.setState({ data, refreshing: false })
    //         })
    //         .catch((err) => {this.setState({ refreshing: false });console.log(err)})
    // };
    // handleRefresh = () => {
    //     this.setState({ refreshing: true }, () => this.fetchNews())
    // };
    /*fetch NEWS API END*/

    render() {
        const style = {
            width: '100%'
        };
        return (
            /*<Route path="/all" exact>*/
            <div className="PostList" style={style}>
                {this.state.data.map((postDetail, index) => {
                    return (
                        <div key={Math.random()}>
                            {/*<Link to={"/"+postDetail.id} key={"link"+postDetail.id}>{postDetail.title}</Link>*/}
                            <Switch  >
                                <Route path={"/"+postDetail.id}  >
                                    <Post
                                        key={index}
                                        author={postDetail.author}
                                        title={postDetail.title}
                                        description={postDetail.description}
                                        urlToImage={postDetail.urlToImage}
                                        date={postDetail.publishedAt}
                                        content={postDetail.content}
                                        // click={() => this.clickPostHandler(index)}
                                        // unClick={() => this.unClickPostHandler()}
                                        // refreshing={this.state.refreshing}
                                        // onRefresh={this.handleRefresh}
                                        link={postDetail.url}
                                    />
                                </Route>
                            </Switch>
                        </div>



                        );
                })}
            </div>
            // </Route>
        );
    };

}

export default PostList;
