import React from 'react'
import { View, Text, Image, asset } from 'react-vr'

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      thumbnailSrc: this.props.thumbnailSrc,
      backgroundSrc: this.props.backgroundSrc,
      title: this.props.title,
      subtitle: this.props.subtitle,
      description: this.props.description
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      thumbnailSrc: nextProps.thumbnailSrc,
      backgroundSrc: nextProps.backgroundSrc,
      title: nextProps.title,
      subtitle: nextProps.subtitle,
      description: nextProps.description
    });
  }
  render() {
    const {
      thumbnailSrc,
      backgroundSrc,
      title,
      subtitle,
      description
    } = this.state
    return (
      <View style={{
        width: 300,
        height: 300,
        backgroundColor: '#FFF',
        alignItems: 'center',
      }}>
        <Image
          style={{
            width: 300,
            height: 150,
          }}
          source={asset(thumbnailSrc)}
        >
        </Image>
        <View style={{
          paddingBottom: 1
        }}>
          <Text style={{
            color: 'lightgrey',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            fontFamily: 'Helvetica'
          }}>
            {title}
          </Text>
          <Text style={{
            color: 'grey',
            fontSize: 12,
            textAlign: 'center',
            fontFamily: 'Helvetica'
          }}>
            {subtitle}
          </Text>
        </View>
      </View>
    );
  }
};
export default Card;