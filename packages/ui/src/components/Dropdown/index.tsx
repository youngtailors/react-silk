import React from 'react'
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { Hitbox } from '../Hitbox'

const styles = StyleSheet.create({
  dropdown: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#f4f4f4',
    backgroundColor: '#FFFFFF',
  },
  upZ: {
    zIndex: 5,
  },
})

interface RenderButtonProps {
  isOpen: boolean
  toggle: () => void
}

interface Props {
  renderButton: (props: RenderButtonProps) => React.ReactNode
}
interface State {
  open: boolean
  height: number
  pageX: number
  pageY: number
}

export class Dropdown extends React.Component<Props, State> {
  _view: React.Ref<HTMLDivElement>
  toggle: () => void

  constructor(props: Props) {
    super(props)
    this.state = {
      open: false,
      height: 0,
      pageX: 0,
      pageY: 0,
    }
    this._view = React.createRef()
    this.toggle = (): void => {
      this.setState(prevState => ({
        open: !prevState.open,
      }))
    }
  }

  componentDidMount(): void {
    this._view.current.measure(
      (
        x: number,
        y: number,
        width: number,
        height: number,
        pageX: number,
        pageY: number,
      ) => {
        this.setState({
          height,
          pageX,
          pageY,
        })
      },
    )
  }

  render(): React.ReactNode {
    const dropdownStyles: [StyleProp<ViewStyle>] = [styles.dropdown]
    const containerStyles = []
    if (this.state.open) {
      dropdownStyles.push({
        top: this.state.height + this.state.pageY,
        left: this.state.pageX,
      })
      containerStyles.push(styles.upZ)
    }
    // TODO: Update legacy ref, and support mobile
    return (
      <View ref={this._view} style={containerStyles}>
        {this.props.renderButton({
          isOpen: this.state.open,
          toggle: this.toggle,
        })}
        {this.state.open && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 10,
            }}
          >
            <Hitbox onPress={this.toggle} />
            <View style={dropdownStyles}>{this.props.children}</View>
          </div>
        )}
      </View>
    )
  }
}
