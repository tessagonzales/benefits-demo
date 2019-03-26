import React from 'react';
import { View, Text } from 'react-vr'

class ExpandCard extends React.Component {
  render () {
    console.log('touched', this.props.keyValue)
    return (

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          transform: [
            {rotateX: 0},
            {translate: [-9.3, 2.5, -10]},
          ],
          // width: 20,
        }}
      >
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            margin: 0.0125,
            width: 6.3,
          }}
        >
          <View style={{
            width: 8,
            height: 8,
            backgroundColor: 'green',
            alignItems: 'center'
            // opacity: 0.3
          }}>
          </View>
        </View>
      </View>
    )
  }
}

export default ExpandCard;