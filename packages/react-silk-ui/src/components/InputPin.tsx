import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { Input } from './Input'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
})

export interface Props {
  length?: number
}

export interface State {
  refs: any
  data: any
}

export class InputPin extends React.Component<Props, State> {
  static defaultProps = {
    length: 6,
  }

  setRef: any
  onChange: any

  constructor(props: Props) {
    super(props)
    const refs: any = {}
    for (let i = 0; i < Number(props.length); i += 1) {
      refs[i] = null
    }
    this.state = {
      data: {},
      refs,
    }

    this.setRef = (index: string, ref: any) => {
      if (this.state.refs[index]) {
        return
      }
      this.setState(prevState => ({
        refs: { ...prevState.refs, [index]: ref },
      }))
    }

    this.onChange = (index: string, text: string) => {
      if (Number(index) === Number(props.length) - 1) {
        return
      }
      this.state.refs[Number(index) + 1].focus()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {Object.keys(this.state.refs).map(index => (
          <Input
            key={index}
            style={styles.input}
            setRef={ref => this.setRef(index, ref)}
            onChange={text => this.onChange(index, text)}
          />
        ))}
      </View>
    )
  }
}
