import React, { Component } from 'react';
import './AddAuthorForm.css';
import { authors } from './authors';
import { withRouter } from 'react-router-dom';

class AddAuthorForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'name': "",
            'img_url': '',
            'books': [],
            'book': ''
        }
        this.change_val = this.change_val.bind(this);
        this.update_book = this.update_book.bind(this);
        this.update_authors = this.update_authors.bind(this);

    }
    update_authors(e) {
        e.preventDefault();


        // authors.push({
        //     name: this.state.name,
        //     imageUrl: this.state.img_url,
        //     imageSource: 'user_added',
        //     books: this.state.books
        // });

        console.log(authors)
        this.props.onAddAuthor(this.state);
    }
    update_book(e) {
        this.setState({ books: this.state.books.concat([this.state.book]) })
        this.setState({
            book: ''
        });
        e.preventDefault();
        console.log('inside update');
    }


    change_val(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="AddAuthorForm">
                <form className="AddAuthorForm__input" onSubmit={this.update_authors}>
                    <label htmlFor="Author Name" >Name</label>
                    <input name="name" value={this.state.name} onChange={this.change_val}></input>
                    <label> Image URL</label>
                    <input name="img_url" value={this.state.imgurl} onChange={this.change_val}></input>
                    <div className="AddAuthorForm__input">

                        <label htmlFor="add books"> Add Books</label>
                        <input name="book" value={this.state.book} onChange={this.change_val}></input>

                        {this.state.books.map((book) => <p key={book}>{book}</p>)}

                        <input type="button" onClick={this.update_book} value="+" />


                    </div>
                    <button value="submit" >Add the author</button>

                </form>
            </div>
        );
    }

}
const AddAuthor = withRouter(({ history }) =>
    <AddAuthorForm onAddAuthor={(author) => {
        authors.push(author);
        history.push('/');
    }} />
);
export default AddAuthor;