import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostItem from '../posts/PostItem';
import Spinner from '../common/Spinner';
import { getPost } from '../../actions/postActions';
import axios from 'axios';
import Nav from '../Nav';
import Footer from '../footer/Footer';
import ReactHtmlParser from 'react-html-parser';
import Subscribe from '../subscribe/Subscribe';

class Post extends Component {
  state = {
    fullPost: [],
  };
  componentDidMount() {
    console.log(this.props.match);
    axios.get(`/api/posts/${this.props.match.params.post}`).then((res) => {
      const fullPost = res.data;
      this.setState({ fullPost });
    });
  }

  htmlDecode(input) {
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
  }

  render() {
    const { loading } = this.props;
    const { fullPost } = this.state;

    let postContent;

    if (fullPost === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = fullPost.map((post) => (
        <div className='card card-body mb-3'>
          <div className='post-home'>
            <div className=''>
              <img
                className='rounded-circle d-none d-md-block'
                src={post.image}
                alt=''
              />

              <br />
              <p className='text-center post-name'>{post.name}</p>
            </div>
            <div className=''>
              <p className='content'>{post.description}</p>
              <p className='content-2'>{ReactHtmlParser(post.content)}</p>
            </div>
          </div>
        </div>
      ));
    }

    return (
      <div className='post'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <Nav />

              {postContent}
            </div>
          </div>
        </div>
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

export default Post;
