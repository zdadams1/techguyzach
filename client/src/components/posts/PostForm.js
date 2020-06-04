import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addPost } from '../../actions/postActions';
import TextFieldGroup from '../common/TextFieldGroup';
class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      image: '',
      video: '',
      content: '',
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;

    const newPost = {
      name: this.state.name,
      description: this.state.description,
      image: this.state.image,
      video: this.state.video,
      content: this.state.content,
    };

    this.props.addPost(newPost);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <form noValidate onSubmit={this.onSubmit}>
        <TextFieldGroup
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={this.onChange}
          error={errors.name}
        />
        <TextFieldGroup
          placeholder='description'
          name='description'
          type='text'
          value={this.state.description}
          onChange={this.onChange}
          error={errors.description}
        />
        <TextFieldGroup
          placeholder='image'
          name='image'
          type='text'
          value={this.state.image}
          onChange={this.onChange}
          error={errors.image}
        />
        <TextFieldGroup
          placeholder='video'
          name='video'
          type='text'
          value={this.state.video}
          onChange={this.onChange}
          error={errors.video}
        />
        <TextAreaFieldGroup
          placeholder='post content'
          name='content'
          type='text'
          value={this.state.content}
          onChange={this.onChange}
          error={errors.content}
        />
        <input type='submit' className='btn btn-success btn-block mt-4' />
      </form>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { addPost })(PostForm);
