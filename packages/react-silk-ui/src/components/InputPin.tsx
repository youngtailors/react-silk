import React from 'react'
import {
  View,
  StyleSheet,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native'
import { Input, styles as inputStyles } from './Input'
import { Text } from './Text'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    width: 40,
    height: 40,
    marginRight: 5,
    marginBottom: 0,
  },
  inputStyle: {
    textAlign: 'center',
  },
})

export interface InputPinProps {
  length?: number
  onChanged?: (arg: string) => void
  label?: string
  errorMessage?: string
}

export interface State {
  value: string
}

export class InputPin extends React.Component<InputPinProps, State> {
  static defaultProps = {
    length: 6,
  }

  onChanged: any
  onChange: any
  localRefs: Array<React.RefObject<TextInputProps>>

  constructor(props: InputPinProps) {
    super(props)
    const refs = []
    let value = ''
    for (let i = 0; i < Number(props.length); i += 1) {
      refs.push(React.createRef())
      value += ' '
    }
    this.localRefs = refs
    this.state = {
      value,
    }

    this.onChange = (
      e: NativeSyntheticEvent<TextInputChangeEventData>,
      index: number,
    ) => {
      const text = e.nativeEvent.text || ' '

      this.setState(
        prevState => {
          const newValue = `${prevState.value.substr(0, index)}${
            text[text.length - 1]
          }${prevState.value.substr(index + 1)}`
          return {
            value: newValue,
          }
        },
        () => {
          if (this.props.onChanged) {
            this.props.onChanged(this.state.value)
          }
        },
      )
      if ((e.nativeEvent as any).inputType === 'deleteContentBackward') {
        if (this.localRefs[index - 1]) {
          const node = this.localRefs[index - 1].current as any
          if (node && node.focus) {
            node.focus()
          }
        }
      } else if (!!text.trim() && this.localRefs[index + 1]) {
        const node = this.localRefs[index + 1].current as any
        if (node && node.focus) {
          node.focus()
        }
      }
    }
  }

  render() {
    return (
      <View style={inputStyles.container}>
        {this.props.label && <Text style={inputStyles.label}>{this.props.label}</Text>}
        <View style={styles.container}>
          {this.localRefs.map((ref, index) => (
            <Input
              ref={ref}
              key={index}
              selectTextOnFocus
              style={styles.input}
              inputStyle={styles.inputStyle}
              onChange={e => this.onChange(e, index)}
              value={this.state.value[index] || ''}
            />
          ))}
        </View>
        {this.props.errorMessage && (
          <Text style={inputStyles.errorMessage}>{this.props.errorMessage}</Text>
        )}
      </View>
    )
  }
}
