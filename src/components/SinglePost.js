import React from "react";

class EveryPost extends React.Component {
  render() {
    return (
      <div>
        <h2>Пост №{this.props.post.id}<br/>{this.props.post.title.toUpperCase()}</h2>
        {this.props.post.body}<br/><br/>
        <button onClick={() => this.props.showAll()}>Назад</button>
      </div>
    );
  }
}

export default EveryPost;
