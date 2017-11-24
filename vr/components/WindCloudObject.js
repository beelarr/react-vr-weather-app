import React, { Component } from 'react';

import { Model,  asset, Animated } from 'react-vr';

export default class WindCloudObject extends Component {
  constructor() {
    super();



    this.state = {
      xValue: new Animated.Value(100)
    }

    setInterval(() => this.animateCloud(), 40000);
  }

  componentDidMount() {
    this.animateCloud();
  }

  animateCloud() {

    if (this.state.xValue._value < 0) {
      this.setState({xValue: new Animated.Value(100)})
    } else {
      Animated.timing(this.state.xValue, {
        toValue: -100,
        duration: 40000/this.props.wind.speed
      }).start();
    }
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
          // scale={0.01}
          source={{
            obj: asset('multi_clouds.obj')
          }}
          style={{transform: [
              {translate: [0, 0, -2]}
          ]}}
          texture={"https://78.media.tumblr.com/0666b11493f438e6cdf980f7d66925ac/tumblr_oy8jogSfcf1uxolajo1_500.jpg"}
          wireframe={false}
        />
      </Animated.View>
    )
  }
}
