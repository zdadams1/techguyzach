import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import PostFeed from './PostFeed';
import Spinner from '../common/Spinner';
import { getPosts } from '../../actions/postActions';
import Nav from '../Nav';
import Footer from '../footer/Footer';

class Posts extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props;
    const { user } = this.props.auth;
    console.log(user);

    let postContent;
    let postForm;

    if (posts === null || loading) {
      postContent = <Spinner />;
    }
    if (posts === undefined) {
      postContent = <div>No Posts Yet</div>;
      if (user.id === '5c9ef0eed817bc2ad498fddf') {
        postForm = <PostForm />;
      } else {
        postForm = null;
      }
    } else {
      postContent = <PostFeed posts={posts} />;
    }
    if (user.id === '5c9ef0eed817bc2ad498fddf') {
      postForm = <PostForm />;
    } else {
      postForm = null;
    }

    return (
      <div className='feed'>
        <Nav />
        {postForm}
        {postContent}
        <Footer />
      </div>
    );
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
  auth: state.auth,
});

export default connect(mapStateToProps, { getPosts })(Posts);
