import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import PostFeed from './PostFeed';
import Spinner from '../common/Spinner';
import { getPosts } from '../../actions/postActions';
import Nav from '../Nav';
import Footer from '../footer/Footer';
import axios from 'axios';
import Subscribe from '../subscribe/Subscribe';

class Posts extends React.Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get('/api/posts').then((res) => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  render() {
    const { loading } = this.props;
    const { posts } = this.state;
    const { user } = this.props.auth;
    console.log(posts);

    let postContent;
    let postForm;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      if (user.id === '5c9ef0eed817bc2ad498fddf') {
        postForm = <PostForm />;
        postContent = <PostFeed posts={posts} />;
      } else {
        postContent = <PostFeed posts={posts} />;
        postForm = null;
      }
    }

    return (
      <div className='feed'>
        <Nav />
        <div className='posts-header'>
          <div className=''>
            <p>My posts about technology</p>
          </div>
        </div>
        {postForm}
        {postContent}
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

Posts.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Posts);
