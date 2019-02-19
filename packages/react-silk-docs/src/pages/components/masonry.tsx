import * as React from 'react'
import MyMom from '.'
import { Image, Dimensions } from 'react-native'
import { Masonry, Heading1, Modal } from 'react-silk-ui'

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

const { width, height } = Dimensions.get('window')

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

  imageSize(w: number, h: number) {
    const newW = width - 30 // 30 is padding  15 x 2 for show image in modal
    const newH = height - 30
    if (w / newW < h / newH) {
      return {
        w: (w * newH) / h,
        h: newH,
      }
    }
    return {
      w: newW,
      h: (h * newW) / w,
    }
  }

  render() {
    const { toggle, url } = this.state
    const imgSize = this.imageSize(this.state.width, this.state.height)
    return (
      <MyMom>
        <Masonry images={images} />
        <Heading1>Clickable Masonry</Heading1>
        <Masonry images={images} onPress={this.setModalImg}>
          <Modal
            toggle={() => this.setState({ toggle: !toggle })}
            isOpen={toggle}
            style={{}}
          >
            <Image
              source={{ uri: url }}
              style={{ width: imgSize.w, height: imgSize.h }}
            />
          </Modal>
        </Masonry>
      </MyMom>
    )
  }
}
