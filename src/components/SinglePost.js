import React from "react";
import { Link } from "react-router-dom";

class EveryPost extends React.Component {
  render() {
    return (
      <div>
        <h2>
          Пост №{this.props.post.id}
          <br />
          {this.props.post.title.toUpperCase()}
        </h2>
        {this.props.post.body}
        <br />
        <br />
        <Link to="/">
          <button>Назад</button>
        </Link>
      </div>
    );
  }
}

export default EveryPost;
