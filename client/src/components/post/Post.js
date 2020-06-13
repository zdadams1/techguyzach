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
              <p className='content-2'>{post.content}</p>
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
              <Link to='/blog' className='btn  back-btn mb-3'>
                Back
              </Link>
              {postContent}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Post;
