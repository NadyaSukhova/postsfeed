import React from "react";

class EveryPost extends React.Component {
  render() {
    return (
      <div>
        <h2>Пост №{this.props.post.id}<br/>{this.props.post.title.toUpperCase()}</h2>
        {this.props.post.body.slice(0, 50)}...<br/><br/>
        <button onClick={() => this.props.showAll(this.props.post.id)}>Просмотр</button>
      </div>
    );
  }Y

}

export default EveryPost;
