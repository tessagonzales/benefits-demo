import React from 'react';
import {
  asset,
  Image,
  View,
  VrButton,
  Animated
} from 'react-vr';
import { Easing } from 'react-native';
import Card from './Card'

class CardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      animatedTranslation: new Animated.Value(0),
    }
  }

  animateIn = () => {
    Animated.timing(
      this.state.animatedTranslation, {
        toValue: 1.5,
        duration: 100,
        easing: Easing.in,
      }
    ).start();
  }

  animateOut = () => {
    Animated.timing(
      this.state.animatedTranslation, {
        toValue: 0,
        duration: 100,
        easing: Easing.in,
      }
    ).start();
  }

  onButtonClick = () => {
    this.props.onClick();
  }

  render () {
    const {
      thumbnailSrc,
      backgroundSrc,
      title,
      subtitle,
      description
    } = this.props
    return (
      <Animated.View
        lit
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          margin: 0.0125,
          transform: [
            {translateZ: this.state.animatedTranslation},
          ],
          width: 310,
        }}
      >
        <VrButton
          onClick={this.onButtonClick}
          onEnter={this.animateIn}
          onExit={this.animateOut}
        >
         <Card
            thumbnailSrc={thumbnailSrc}
            backgroundSrc={backgroundSrc}
            title={title}
            subtitle={subtitle}
            description={description}
          />
        </VrButton>
      </Animated.View>
    );
  }
};

export default CardContainer;