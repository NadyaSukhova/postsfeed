import React from "react";
import ShowPosts from "./components/ShowPost";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.getPosts = this.getPosts.bind(this);
    this.state = {
      posts: [],
    };
  }
  async getPosts() {
    let res = [];
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const response = await fetch(url);
    const data = await response.json();
    data.map((el) => res.push(el));
    this.setState({posts: res})
  }

  
  render() {
    this.getPosts();
    return <div><ShowPosts posts= {this.state.posts}/></div>;
  }
}

export default App;
