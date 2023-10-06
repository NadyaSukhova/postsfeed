import React from "react";
import EveryPost from "./components/EveryPost";
import SinglePost from "./components/SinglePost";
import NoPage from "./components/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.showAll = this.showAll.bind(this);
    this.state = {
      posts: [],
      idPost: 0,
    };
  }

  showAll(id) {
    if (this.state.idPost) {
      this.setState({ idPost: 0 });
    } else {
      this.setState({ idPost: id });
    }
  }

  async getPosts() {
    let res = [];
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const response = await fetch(url);
    const data = await response.json();
    data.map((el) => res.push(el));
    this.setState({ posts: res });
  }

  foundPost(id) {
    return this.state.posts.find((obj) => {
      return obj.id === id;
    });
  }

  render() {
    this.getPosts();
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/postsfeed/"
            element={<EveryPost posts={this.state.posts} />}
          />
          {this.state.posts.map((el) => (
            <Route key={String(el.id)}
              path={"/postsfeed/" + String(el.id)}
              element={<SinglePost post={this.foundPost(el.id)} />}
            />
          ))}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
