/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Spiner from '../spiner';
import ErrorIndicator from '../error-indicator';

const withData = View => {
  return class extends Component {
    state = {
      data: [],
      error: false,
      loading: true
    };

    onError = () => {
      this.setState({
        error: true,
        loading: false
      });
    };

    componentDidMount() {
      this.update();
    }

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    update() {
      this.setState({
        loading: true,
        error: false
      });

      this.props
        .getData()
        .then(data => this.setState({ data, loading: false }))
        .catch(() => {
          this.setState({
            error: true,
            loading: false
          });
        });
    }

    render() {
      const { data, loading, error } = this.state;
      const errorIndicator = error ? <ErrorIndicator /> : null;
      const loader = loading ? <Spiner /> : null;

      if (loading) {
        return <Spiner />;
      }

      if (error) {
        return <ErrorIndicator />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
