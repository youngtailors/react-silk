import * as React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {},

  show: {
    display: 'none',
  },
})

export interface Props {
  autoSlide: boolean
  interval: number
  dots: boolean
  data?: any
  arrow: boolean
  color: string
  style: any
}

interface State {
  data: any
}

export const Carousel = ({
  autoSlide,
  interval,
  dots,
  data,
  arrow,
  color,
  style,
}: Props) => {
  console.log(data)
  if (data.length < 0) {
    console.log('cac')
    return null
  }
  return (
    <View style={styles.container}>
      {data.map((item: any, index: any) => (
        <View key={index}>
          <Image
            style={{ width: '100%', height: 400 }}
            source={{ uri: `${item}` }}
          />
        </View>
      ))}
    </View>
  )
}

Carousel.defaultProps = {
  autoSlide: false,
  interval: 500,
  dots: true,
  arrow: true,
  color: '#cecece',
}
