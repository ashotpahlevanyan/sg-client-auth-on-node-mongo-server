import React, { Component } from 'react';
import { connect } from 'react-redux';

const composedComponent = (ChildComponent) => {
  class ComposedComponent extends Component {
    // component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }
    // component ust got updated
    componentDidUpdate(prevProps, prevState, snapshot) {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if(!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />
    }
  }


  function mapStateToProps(state) {
    return { auth: state.auth.authenticated };
  }

  return connect(mapStateToProps)(ComposedComponent);
};

export default composedComponent;
