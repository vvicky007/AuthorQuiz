import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Authorquiz from './Authorquiz';
import * as serviceWorker from './serviceWorker';
import { shuffle, sample } from 'underscore';
import { authors } from './authors'
import { BrowserRouter, Route } from 'react-router-dom';
import Authorform from './AddAuthor';


let color = -1;

let props = {

  tdata: {
    Data: getTurnData(authors),
    highlight_color: color
  }


}
console.log(authors);


function getTurnData(authors) {
  const allBooks = authors.reduce(function (p, c, i) {
    return p.concat(c.books);
  }, []);

  /* 
  The reduce() method reduces the array to a single value.

  The reduce() method executes a provided function for each value of the array (from left-to-right).

  The return value of the function is stored in an accumulator (result/total).
  The some() method checks if any of the elements in an array pass a test (provided as a function).
  
  */
  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  const answer = sample(fourRandomBooks);

  return {
    book: fourRandomBooks,
    author: authors.find((author) =>
      author.books.some((title) =>
        title === answer))
  }
}

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     authors : 
  //   }
  // }
  render() {
    console.log(authors);
    return (<Authorquiz {...props} />);
  }
}

function render() {
  ReactDOM.render(
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/" component={App} />
        <Route path="/add" component={Authorform} />
      </React.Fragment>
    </BrowserRouter>
    ,
    document.getElementById('root')

  );
}
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
