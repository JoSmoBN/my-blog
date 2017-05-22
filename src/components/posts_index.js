import _                    from 'lodash';
import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router-dom';

import { fetchPosts }       from '../actions';

class PostsIndex extends Component {
  // lifecycle method that is called as soon as related component is loaded into the DOM
  // could use componentWillMount() as well, which is called before the component is loaded
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map( this.props.posts, post => {
      return (
        <li className="list-group-item" key={ post.id }>
          { post.title }
        </li>
      )
    } )
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
            <Link className="btn btn-primary" to="/posts/new">
              New Post
            </Link>
          </div>
        <h3>Posts</h3>
        <ul className="list-group">
          { this.renderPosts() }
        </ul>
      </div>
    )
  }
}

// anytime we want to consume anything from application level state
// always use this method
function mapStateToProps( state ) {
  return { posts: state.posts }
}

export default connect( mapStateToProps, { fetchPosts } )( PostsIndex );
