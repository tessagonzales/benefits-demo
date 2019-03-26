import React from 'react';
import { asset, Pano } from 'react-vr'

class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      background: this.props.background
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      background: nextProps.background
    });
  }

  render() {
    return (
      <Pano source={asset(this.state.background)}/>
    );
  }
};

export default Canvas;