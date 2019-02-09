import * as React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
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
})

export interface Props {
  autoSlide: boolean
  interval: number
  dots: boolean
  data: any
  arrow: boolean
}

interface State {
  index: number
}
export class Carousel extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      index: 0,
    }
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
    const { data } = this.props
    const { index } = this.state
    return (
      <View style={styles.container}>
        {data.map((item: any, i: number) => (
          <View key={i} style={i !== index ? styles.hide : styles.show}>
            <View style={styles.slideWrapper}>
              <Image
                style={{ width: '100%', height: 400 }}
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
            </View>
          </View>
        ))}
      </View>
    )
  }
}
