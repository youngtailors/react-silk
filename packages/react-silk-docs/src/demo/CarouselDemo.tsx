import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Carousel, Heading6 } from 'react-silk-ui'

const styles = StyleSheet.create({
  textDemo: {
    paddingVertical: 12,
    backgroundColor: '#282c34',
    color: '#fff',
    marginVertical: 12,
    paddingLeft: 30,
    borderRadius: 6,
  },
})

interface State {
  data: any
}

export default class extends React.Component<_, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      data: [
        'https://images.unsplash.com/photo-1502261159926-e31d770eb6e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=881&q=80',
        'https://images.unsplash.com/photo-1453785675141-67637e2d4b5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=818&q=80',
        'https://images.unsplash.com/photo-1540202404-d0c7fe46a087?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80',
      ],
    }
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Heading6>Default carousel</Heading6>
        <Text
          style={styles.textDemo}
        >{`<Carousel data={this.state.data}/>`}</Text>
        <Carousel data={this.state.data} />
        <View style={{ height: 30 }} />
        <Heading6>Auto slide with autoSlide prop</Heading6>
        <Text
          style={styles.textDemo}
        >{`<Carousel data={this.state.data} autoSlide/>`}</Text>
        <Carousel data={this.state.data} autoSlide />
        <View style={{ height: 30 }} />
        <Heading6>
          Set duration for animation, and set interval time for auto slide
        </Heading6>
        <Text
          style={styles.textDemo}
        >{`<Carousel data={this.state.data} duration={300} interval={5000} />`}</Text>
        <Carousel data={this.state.data} duration={300} interval={5000} />
        <View style={{ height: 30 }} />
        <Heading6>Hide dots and arrows</Heading6>
        <Text
          style={styles.textDemo}
        >{`<Carousel data={this.state.data} hideArrows hideDots />`}</Text>
        <Carousel data={this.state.data} autoSlide hideArrows hideDots />
        <View style={{ height: 30 }} />
      </div>
    )
  }
}
