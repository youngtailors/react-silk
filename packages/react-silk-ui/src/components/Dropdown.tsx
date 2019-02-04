import * as React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Hitbox } from './Hitbox'
import Colors from './Colors'

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: Colors.danger,
    position: 'absolute',
    height: 100,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

interface Props {
  toggle: () => void
}
interface State {
  open: boolean
  height: number
  pageX: number
  pageY: number
}

export class Dropdown extends React.Component<Props, State> {
  _view: any
  toggle: () => void

  constructor(props: any) {
    super(props)
    this.state = {
      open: false,
      height: 0,
      pageX: 0,
      pageY: 0,
    }
    this._view = React.createRef()
    this.toggle = () => {
      this.setState(prevState => ({
        open: !prevState.open,
      }))
    }
  }

  componentDidMount() {
    this._view.current.measure(
      (x: any, y: any, width: any, height: any, pageX: any, pageY: any) => {
        this.setState({
          height,
          pageX,
          pageY,
        })
      },
    )
  }
  render() {
    const dropdownStyles: [any] = [styles.dropdown]
    if (this.state.open) {
      dropdownStyles.push({
        top: this.state.height + this.state.pageY,
        left: this.state.pageX,
      })
    }
    return (
      <View ref={this._view}>
        <TouchableOpacity onPress={this.toggle}>
          <Text>Dropdown</Text>
        </TouchableOpacity>
        {this.state.open && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 2,
            }}
          >
            <Hitbox onPress={this.toggle} />
            <View style={dropdownStyles}>
              <Text style={{ color: Colors.white }}>Happy new year</Text>
            </View>
          </div>
        )}
      </View>
    )
  }
}
