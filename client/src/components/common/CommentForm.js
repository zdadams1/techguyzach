import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "./TextAreaFieldGroup";
import { addAppComment } from "../../actions/userActions";
import LoginSignup from "../auth/LoginSignup";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      showForm: true,
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onClick() {
    const { user } = this.props.auth;
    if (!user) {
      this.setState({ showForm: false });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;
    const { postId } = this.props;

    const commentData = {
      message: this.state.message,
      postId: postId,
      username: user.name
    };

    this.props.addAppComment(commentData.postId, commentData);
    this.setState({ message: "" });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, showForm } = this.state;

    let formContent;
    if (!showForm) {
      formContent = <LoginSignup />;
    } else {
      formContent = (
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <TextAreaFieldGroup
              placeholder={this.props.placeholder}
              name="message"
              value={this.state.message}
              onChange={this.onChange}
              onClick={this.onClick}
              error={errors.text}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      );
    }

    return (
      <div>
        <div className="post-form mb-3">
          <div className="card card-info request-comment-form red-bkd fixed-bottom pb-5">
            <div className="card-body">{formContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addAppComment }
)(CommentForm);
