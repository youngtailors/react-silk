import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'
import { Transition } from 'react-spring/renderprops'
import Colors from './Colors'
import { Icon } from './Icon'

const styles = StyleSheet.create({
  container: {},

  hide: {
    display: 'none',
  },

  show: {
    display: 'flex',
  },

  iconLeft: {
    position: 'absolute',
    width: '4%',
    justifyContent: 'center',
    alignContent: 'center',
    top: 0,
    bottom: 0,
    left: 10,
  },

  iconRight: {
    position: 'absolute',
    justifyContent: 'center',
    alignContent: 'center',
    width: '4%',
    top: 0,
    bottom: 0,
    right: 10,
  },

  icon: {
    display: 'flex',
    justifyContent: 'center',
  },

  slideWrapper: {
    position: 'relative',
  },

  slideStyle: {
    width: '100%',
    height: 400,
  },
})

export interface Props {
  autoSlide: boolean
  interval: number
  dots: boolean
  data: any
  arrow: boolean
}

export class Carousel extends React.Component<Props> {
  state = {
    index: 0,
  }
  constructor(props: Props) {
    super(props)
  }

  handleSlide = (isRight: boolean) => {
    const { index } = this.state
    let currentIndex = index
    const { data } = this.props
    if (isRight) {
      if (currentIndex < data.length - 1) {
        currentIndex++
      } else {
        currentIndex = 0
      }
    } else {
      if (currentIndex === 0) {
        currentIndex = data.length - 1
      } else {
        currentIndex--
      }
    }
    this.setState({ index: currentIndex })
  }

  render() {
    const { index } = this.state
    const { data } = this.props
    return (
      <View style={styles.container}>
        <Transition
          items={data[index]}
          from={{ transform: 'translate3d(100%,0,0)' }}
          enter={{ transform: 'translate3d(0%,0,0)' }}
          leave={{ transform: 'translate3d(-100%,0,0)' }}
        >
          {item => (props: any) => (
            <View style={props}>
              <View>
                <View style={styles.slideWrapper}>
                  <Image style={styles.slideStyle} source={{ uri: item }} />
                  <View style={styles.iconLeft}>
                    <TouchableOpacity
                      onPress={() => {
                        this.handleSlide(false)
                      }}
                    >
                      <Icon
                        style={styles.icon}
                        name="angle-left"
                        color={Colors.white}
                        size={46}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.iconRight}>
                    <TouchableOpacity
                      onPress={() => {
                        this.handleSlide(true)
                      }}
                    >
                      <Icon
                        style={styles.icon}
                        name="angle-right"
                        color={Colors.white}
                        size={46}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
        </Transition>
      </View>
    )
  }
}
