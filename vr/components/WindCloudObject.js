import React, { Component } from 'react';

import { Model,  asset, Animated } from 'react-vr';

export default class WindCloudObject extends Component {
  constructor() {
    super();

      this.state = {
        xValue: new Animated.Value(100)
      };

    setInterval(() => this.animateCloud(), 60000);
  }


  animateCloud = () => {

    this.state.xValue._value < 0 ?
      this.setState({xValue: new Animated.Value(100)})
      :
      Animated.timing(this.state.xValue, {
        toValue: -300,
        duration: 200000/this.props.wind.speed
      }).start();
    };



  componentDidMount() {
    this.animateCloud();
  }

  render() {
    return (
      <Animated.View
        style={{
          transform: [
            { translate: [0, -25, -150] },
            { rotateX: -90 },
            { rotateZ: this.props.wind.deg },
            { translateX: this.state.xValue }
          ]
        }}
        >
        <Model
          source={{
            obj: asset('multi_clouds.obj'),
            mtl: asset('cloudTexture.jpg')
          }}
          style={{transform: [
              {translate: [0, 5, -2]}
          ]}}

          wireframe={false}
        />
      </Animated.View>
    )
  }
}
