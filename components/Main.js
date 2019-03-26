import React from 'react';
import { View } from 'react-vr';
import Canvas from './Canvas';
import UI from './UI'

const cardConfig = [
  {
    key: 0,
    thumbnailSrc: 'airplane.jpg',
    backgroundSrc: '',
    title: 'Air',
    subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.'
  },
  {
    key: 1,
    thumbnailSrc: 'travel.jpg',
    backgroundSrc: '',
    title: 'Travel',
    subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.'
  },
  {
    key: 2,
    thumbnailSrc: 'hotel.jpg',
    backgroundSrc: '',
    title: 'Hotel',
    subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.'
  }
]

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: 'space.jpg'
    }
  }
  render() {
    return (
      <View>
        <Canvas background={this.state.background} />
        <UI
          cardConfig={cardConfig}
          onClick={key => console.log(key) }
        />
      </View>
    )
  }
};

export default Main;