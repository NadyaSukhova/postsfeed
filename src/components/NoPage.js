import React from "react";
import { Link } from "react-router-dom";


class NoPage extends React.Component {

  render() {
    return <>
    <h2>Нет такой страницы :(</h2>
    <Link to="/postsfeed">
    <button>Назад</button>
    </Link>
    </>
  }
}

export default NoPage;