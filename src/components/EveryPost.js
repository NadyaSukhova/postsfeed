import React from "react";
import { Link } from "react-router-dom";

class EveryPost extends React.Component {
  JSXPost(el) {
    return (
      <>
        <h2>
          Пост №{el.id}
          <br />
          {el.title.toUpperCase()}
        </h2>
        {el.body.slice(0, 50)}...
        <br />
        <br />
        <Link to={"/postsfeed/" + String(el.id)}>
          <button>Просмотр</button>
        </Link>
      </>
    );
  }

  render() {
    var res = [];
    this.props.posts.forEach((el) => {
      res.push(this.JSXPost(el));
    });
    return res;
  }
}

export default EveryPost;
