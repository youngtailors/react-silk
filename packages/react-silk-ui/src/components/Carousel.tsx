import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Transition, animated } from 'react-spring/renderprops.cjs'
import Colors from './Colors'
import { Icon } from './Icon'
import iconMap from './iconMap'

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    height: 400,
    backgroundColor: Colors.smokeWhite,
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
    height: '100%',
  },

  slideAnimations: {
    position: 'absolute',
    width: '100%',
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
  autoSlide: boolean
  interval: number
  duration?: number
  hideDelimiters?: boolean
  data: any
  hideArrows?: boolean
}

export class Carousel extends React.Component<Props> {
  static defaultProps = {
    autoSlide: false,
    interval: 8000,
    duration: 200,
    hideDelimiters: false,
    hideArrows: false,
  }

  state = {
    index: 0,
    isRight: false,
  }

  slideHandle: any
  autoHandle: any
  async componentDidMount() {
    const { interval, autoSlide } = this.props
    await this.autoSlide(autoSlide, interval)
    this.autoHandle = await setTimeout(() => this.componentDidMount(), interval)
  }

  componentWillUnmount() {
    if (this.autoSlide) {
      clearTimeout(this.autoHandle)
      this.autoHandle = 0
    }
    if (this.slideHandle) {
      clearTimeout(this.slideHandle)
      this.slideHandle = 0
    }
  }

  autoSlide = (isAuto: boolean, interval: number) => {
    const { index } = this.state
    const { data } = this.props
    if (isAuto) {
      let fIndex: number = index
      if (fIndex === data.length - 1) {
        fIndex = 0
        this.setState({ isRight: true })
      } else {
        fIndex++
        this.setState({ isRight: false })
      }
      this.slideHandle = setTimeout(() => {
        this.setState({ index: fIndex })
      }, interval)
    }
  }

  handleSlide = (isRightArrow: boolean) => {
    const { index } = this.state
    let currentIndex = index
    const { data } = this.props
    if (isRightArrow) {
      this.setState({ isRight: true })
      if (currentIndex < data.length - 1) {
        currentIndex++
      } else {
        currentIndex = 0
      }
    } else {
      this.setState({ isRight: false })
      if (currentIndex === 0) {
        currentIndex = data.length - 1
      } else {
        currentIndex--
      }
    }
    this.setState({ index: currentIndex })
  }

  handleDotClick = (id: number) => {
    const { index } = this.state
    if (id > index) {
      this.setState({ isRight: false })
    } else if (id < index) {
      this.setState({ isRight: true })
    }
    this.setState({ index: id })
  }

  // handleUrl = (url: string) => {
  //   if (url.startsWith('http')) {
  //     return { uri: url }
  //   }
  //   return require(url)
  // }

  render() {
    const { index, isRight } = this.state
    const { data, duration, hideDelimiters, hideArrows } = this.props
    const from: string = `translate3d(${isRight ? -100 : 100}% ,0 ,0)`
    const enter: string = 'translate3d(0% ,0 ,0)'
    const leave: string = `translate3d(${isRight ? 100 : -100}% ,0 ,0)`
    return (
      <View>
        {data && (
          <View style={styles.container}>
            <View style={styles.slideWrapper}>
              <Transition
                items={data[index]}
                native
                reset
                unique
                from={{ transform: from }}
                enter={{ transform: enter }}
                leave={{ transform: leave }}
                config={{ duration }}
              >
                {item => props => (
                  <animated.div
                    style={{ ...props, position: 'absolute', width: '100%' }}
                  >
                    <View>
                      <Image style={styles.slideStyle} source={{ uri: item }} />
                    </View>
                  </animated.div>
                )}
              </Transition>
              {!hideArrows && (
                <View style={styles.iconLeft}>
                  <TouchableOpacity
                    onPress={() => {
                      this.handleSlide(false)
                    }}
                  >
                    <Icon
                      style={styles.icon}
                      name={iconMap.ArrowLeft}
                      color={Colors.white}
                      size={46}
                    />
                  </TouchableOpacity>
                </View>
              )}
              {!hideArrows && (
                <View style={styles.iconRight}>
                  <TouchableOpacity
                    onPress={() => {
                      this.handleSlide(true)
                    }}
                  >
                    <Icon
                      style={styles.icon}
                      name={iconMap.ArrowRight}
                      color={Colors.white}
                      size={46}
                    />
                  </TouchableOpacity>
                </View>
              )}
              {!hideDelimiters && (
                <View style={styles.delimiters}>
                  {data.map((_: any, id: number) => (
                    <TouchableOpacity
                      key={`${id}_dot`}
                      onPress={() => {
                        this.handleDotClick(id)
                      }}
                    >
                      <Icon
                        style={styles.dots}
                        name={iconMap.CircleO}
                        color={Colors.white}
                        size={id === index ? 14 : 9}
                      />
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          </View>
        )}
      </View>
    )
  }
}
