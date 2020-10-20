import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import DisplayedMessage from './DisplayedMessage';

class AddComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newMessages: [
        {
          name: '',
          email: '',
          comment: ''
        }
      ]
    };

    this.add = this.add.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
  }

  componentDidMount() {
    const oldMessages = JSON.parse(localStorage.getItem('messages'));

    if (oldMessages !== null) {
      // eslint-disable-next-line no-return-assign
      oldMessages.map((item) => (
        !item.isNew
      ));
    }

    if (localStorage.getItem('messages') !== null) {
      this.setState({
        newMessages: oldMessages,
      });
    }
  } 

  add(event) {
    event.preventDefault();

    const newName = this.refs.nameRef.value;
    const newEmail = this.refs.emailRef.value;
    const newComment = this.refs.commentRef.value;
    const { newMessages } = this.state;
    const { movieId } = this.props;

    let messages;

    if (localStorage.getItem('messages') === null) {
      messages = [];
    } else {
      // the [...newMessages] creates a copy of the messages array that I get from the state
      messages = [...newMessages];
    }

    messages.push({
      name: newName,
      email: newEmail,
      comment: newComment,
      id: uuid.v4(),
      isNew: true,
      // short-hand per movieId:movieId
      movieId
    });
    localStorage.setItem('messages', JSON.stringify(messages));

    this.setState({
      newMessages: messages
    });

    this.refs.nameRef.value = '';
    this.refs.emailRef.value = '';
    this.refs.commentRef.value = '';
  }

  deleteMessage(event) {
    const id = event.target.getAttribute('id');
    const list = JSON.parse(localStorage.getItem('messages'));
    const newList = list.filter((item) => (
      item.id !== id
    ));
    this.setState({
      newMessages: newList
    });
    localStorage.setItem('messages', JSON.stringify(newList));
  }

  render() {
    const { newMessages } = this.state;
    const { movieId } = this.props;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="mb-5">Comments</h2>
              <ul>
                {newMessages.filter((item) => item.movieId === Number(movieId))
                  .map(
                    (message) => (
                      <li>
                        <DisplayedMessage {...message} deleteMessage={this.deleteMessage}  />
                      </li>
                    )
                  )}
              </ul>
              <h3 className="mb-4 mt-5">Add Your Comment</h3>
              <h5 className="my-white-font">Your name</h5>
              <form onSubmit={this.add} className="mb-5">
                <input
                  type="text"
                  placeholder="enter your name"
                  className="form-control my-3"
                  ref="nameRef"
                  required
                />
                <h5 className="my-white-font">Your email</h5>
                <input
                  type="email"
                  placeholder="enter your email"
                  className="form-control my-3"
                  ref="emailRef"
                  required
                />
                <h5 className="my-white-font">Your message</h5>
                <textarea
                  className="form-control my-3"
                  placeholder="enter your message"
                  ref="commentRef"
                  required
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info my-white-font my-3"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddComment;

AddComment.propTypes = {
  movieId: PropTypes.number
};

AddComment.defaultProps = {
  movieId: null
};
