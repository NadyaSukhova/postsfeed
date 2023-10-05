import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import EveryPost from "./EveryPost";
import SinglePost from "./SinglePost";

class ShowPosts extends React.Component {
  constructor(props) {
    super(props);
    this.showAll = this.showAll.bind(this);
    this.state = {
      specificPost: false,
      idPost: 0,
    };
  }

  showAll(id) {
    this.setState({ specificPost: !this.state.specificPost });
    if (this.state.idPost) {
      this.setState({ idPost: 0 });
    } else {
      this.setState({ idPost: id });
    }
  }

  render() {
    if (this.state.specificPost) {
      const foundPost = this.props.posts.find((obj) => {
        return obj.id === this.state.idPost;
      });
      return (
        <div id="posts">
            <SinglePost post={foundPost} showAll={this.showAll} />
        </div>
      );
    } else {
      return (
        <div id="posts">
          {this.props.posts.map((el) => (
            <EveryPost post={el} showAll={this.showAll} />
          ))}
        </div>
      );
    }
  }
}

export default ShowPosts;
