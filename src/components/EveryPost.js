import React from "react";
import { Link } from "react-router-dom";

class EveryPost extends React.Component {
  JSXPost(el) {
    return (
      <div key={el.id}>
        <h3>Пост №{el.id}</h3>
        <h2 style={{ width: "60%" }}>
          {el.title[0].toUpperCase()}
          {el.title.substr(1)}
        </h2>
        {el.body.slice(0, 50)}...
        <br />
        <br />
        <Link to={"/postsfeed/" + String(el.id)}>
          <button>Просмотр</button>
        </Link>
        <hr />
      </div>
    );
  }

  render() {
    var res = [];
    {this.props.posts.pages.map((page) =>
        page.map((post) => res.push(this.JSXPost(post)))
      )}
    return res;
  }
}

export default EveryPost;
