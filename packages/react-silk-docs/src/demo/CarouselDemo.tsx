import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Carousel } from 'react-silk-ui'

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
      <div>
        <Carousel data={this.state.data} />
      </div>
    )
  }
}
