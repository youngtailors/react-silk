import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'
import { Transition, animated } from 'react-spring/renderprops'
import Colors from './Colors'
import { Icon } from './Icon'

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    flexDirection: 'row',
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
    width: '100%',
  },

  slide: {
    position: 'relative',
  },

  slideStyle: {
    width: '100%',
    height: 400,
  },

  delimiters: {
    position: 'absolute',
    width: '100%',
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  dots: {
    paddingHorizontal: 4,
  },
})

export interface Props {
  autoSlide?: boolean
  interval?: number
  duration?: number
  dots?: boolean
  data: any
  arrow?: boolean
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
        {data.map((item: any, i: number) => {
          const from: string = `translate3d(100% ,0 ,0)`
          const enter: string = 'translate3d(0% ,0 ,0)'
          const leave: string = `translate3d(-100% ,0 ,0)`
          return (
            i === index && (
              <View key={`${i}_slide`} style={styles.slideWrapper}>
                <Transition
                  items={item}
                  from={{ transform: from }}
                  enter={{ transform: enter }}
                  leave={{ transform: leave }}
                >
                  {item => (props: any) => (
                    <animated.div style={props}>
                      <View>
                        <View style={styles.slide}>
                          <Image
                            style={styles.slideStyle}
                            source={{ uri: item }}
                          />
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
                          <View style={styles.delimiters}>
                            {data.map((_: any, id: number) => (
                              <Icon
                                key={`${id}_dot`}
                                style={styles.dots}
                                name="circle-o"
                                color={Colors.white}
                                size={id === index ? 14 : 9}
                              />
                            ))}
                          </View>
                        </View>
                      </View>
                    </animated.div>
                  )}
                </Transition>
              </View>
            )
          )
        })}
      </View>
    )
  }
}
