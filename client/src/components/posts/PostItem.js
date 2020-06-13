import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { deletePost } from '../../actions/postActions';

class PostItem extends Component {
  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  render() {
    const { post, auth, showActions } = this.props;
    console.log(post);

    return (
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
            <p className='lead'>{post.description}</p>
            <a
              href={`/blog/${post.name}`}
              className='post-link btn btn-success'
            >
              View
            </a>
          </div>
        </div>
      </div>
    );
  }
}

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deletePost })(PostItem);
