import * as React from 'react'
import MyMom from '.'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Masonry, Heading5, Modal } from 'react-silk-ui'

const images = [
  'https://images.unsplash.com/photo-1542838077-7fb322b21b80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1550483135-4a6b4cbc6469?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1550481585-67143479c9bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1550475966-70af27831597?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1550456915-749f38312cbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1550431703-109e2c9f3e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1550433728-99a10e2bd20d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1550434605-d1a3cb21158e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1550411335-cab6040bb5b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1550359542-5c8b880dabdf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
]

const styles = StyleSheet.create({
  heading: {
    paddingTop: 15,
  },
  textDemo: {
    paddingVertical: 12,
    backgroundColor: '#282c34',
    color: '#fff',
    marginVertical: 12,
    paddingLeft: 30,
    borderRadius: 6,
  },
})

export default class MasonryDemo extends React.Component {
  state = {
    toggle: false,
    url: '',
    width: 0,
    height: 0,
  }

  setModalImg = (img: { url: string; height: number; width: number }) => {
    this.setState({
      toggle: !this.state.toggle,
      ...img,
    })
  }

  render() {
    const { toggle, url, width, height } = this.state
    return (
      <MyMom>
        <View>
          <Heading5 style={styles.heading}>Masonry default</Heading5>
          <Text style={styles.textDemo}>{'<Masonry images={images} />'}</Text>
          <Masonry images={images} />
          <Heading5 style={styles.heading}>
            Masonry with number of columns is set to 4
          </Heading5>
          <Text style={styles.textDemo}>
            {'<Masonry images={images} col={4} />'}
          </Text>
          <Masonry images={images} col={4} />
          <Heading5 style={styles.heading}>
            Masonry with image gap is set to 30
          </Heading5>
          <Text style={styles.textDemo}>
            {'<Masonry images={images} gap={30} />'}
          </Text>
          <Masonry images={images} gap={30} />
          <Heading5 style={styles.heading}>Clickable Masonry</Heading5>
          <Masonry images={images} onPress={this.setModalImg}>
            <Modal
              toggle={() => this.setState({ toggle: !toggle })}
              isOpen={toggle}
              style={{}}
            >
              <Image source={{ uri: url }} style={{ width, height }} />
            </Modal>
          </Masonry>
        </View>
      </MyMom>
    )
  }
}
