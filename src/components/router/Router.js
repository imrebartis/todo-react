import React, {Component} from 'react';
import PropTypes from 'prop-types';

const getCurrentPath = () => {
  const path = document.location.pathname;
  return path.substring(path.lastIndexOf('/'));
};

export class Router extends Component {
  state = {
    route: getCurrentPath()
  };

  handleLinkClick = (route) => {
    this.setState({route});
    window.history && window.history.pushState && window.history.pushState(null, '', route);
  };

  static childContextTypes = {
    route: PropTypes.string,
    linkHandler: PropTypes.func
  };

  getChildContext() {
    return {
      route: this.state.route,
      linkHandler: this.handleLinkClick
    }
  };

// this will insure that the back & forward buttons work properly
  componentDidMount() {
    window.onpopstate = () => {
      this.setState({route: getCurrentPath()})
    }
  }

  render () {
    return <div>{this.props.children}</div>
  }
};