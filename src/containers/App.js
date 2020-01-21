import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PostList from "../components/Posts/PostList";
import Home from "../components/Home/Home";
import PostData from '../data/posts';
// import TestInput from "../components/TestInput/TestInput";
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
    state = {
        data : PostData,
    };
    loadHandler = () => {
        {this.state.data.map((postDetail, index) => {
            if (index >= 10) {
                return ( <Link to={"/"+postDetail.id} key={"link"+postDetail.id} className="App-link">{postDetail.title}</Link>)
            }
        })}
    };
    render() {
        // const baseUrl = "/1"; // will be /hypercomp;

        return (
            // <Route path="/" >
                <div className="App">
                    <div className="App-header">
                        <img src={logo} alt="" className="App-logo"/>
                        <Link to={"/"} className={"App-title"}>News App</Link>
                    </div>
                    {/*<TestInput/>*/}
                    <div className="App-nav">
                        {this.state.data.map((postDetail, index) => {
                                return  <Link to={"/"+postDetail.id} key={"link"+postDetail.id} className="App-link">{postDetail.title}</Link>
                        })}
                    </div>
                    <Home />
                    {/*<Route path="/" component={PostList}/>*/}
                    <PostList />
                </div>
            // </Route>

        );

    };

}

export default App;
