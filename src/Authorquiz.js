import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import { authors } from './authors';
import { Link } from 'react-router-dom';
class Hero extends Component {
  render() {
    return (
      <div className="jumbotron col-10 offset-1">
        <h1> Authorquiz </h1>
        <p> Select the book written by author</p>
      </div>);
  }
}

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'white'
    }
    this.click = this.click.bind(this);
  }
  click(title, author_name) {
    let books;
    authors.map((author) => {
      if (author.name === author_name) {
        books = author.books;
      }
    })
    console.log(title);
    let ans = books.find((book) => {
      return book === title;
    })
    if (ans === title) {
      this.setState({ color: 'green' });
      window.location.reload(false);
    }
    else {
      this.setState({ color: 'red' });
    }
  }
  render() {

    return (
      <div className="answer" style={{ backgroundColor: this.state.color }} onClick={() => this.click(this.props.title, this.props.author_name)} >
        {this.props.title}
      </div>

    );
  }
}


class Turn extends Component {


  render() {

    console.log(this.props.highlight_color);
    return (
      <div className="row turn" >
        <div className="col-4 offset-1">
          <img className="authorimage" src={this.props.Data.author.imageUrl} alt="nothing" ></img>
        </div>

        <div className="col-6">
          {this.props.Data.book.map((title) => <Book title={title} key={title} author_name={this.props.Data.author.name} />)}
        </div>

      </div >);
  }
}

class Continue extends Component {
  render() {
    return (<div></div>);
  }
}

class Footer extends Component {
  render() {
    return (<div id="footer" className="row"></div>);
  }
}

class Authorquiz extends Component {

  render() {

    return (
      <div className="container-fluid">
        <Hero />
        <Turn {...this.props.tdata}
        />
        <Continue />
        <p><Link to="/add" > Add an author</Link> </p>
        <Footer />
      </div>
    );
  }
}

export default Authorquiz;
