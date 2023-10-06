import React from "react";
import { Link } from "react-router-dom";

class EveryPost extends React.Component {
  render() {
    return (
      <>
        <h2 style={{ textAlign: "center" }}>
          Пост №{this.props.post.id}
          <br />
          Заголовок: {this.props.post.title}
          <br />
        </h2>
        <h3>ID пользователя: {this.props.post.userId}</h3>
        <h3>Текст поста:</h3>
        <p style={{ width: "80%" }}>{this.props.post.body}</p>
        <Link to="/postsfeed">
          <button>Назад</button>
        </Link>
      </>
    );
  }
}

export default EveryPost;
