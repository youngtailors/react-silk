import * as React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'

export interface Props {
  images: string[]
  col?: number
  onPress?: (arg0: { url: string; height: number; width: number }) => void
}

const defaultProps = {
  col: 3,
  onPress: () => {},
}

interface State {
  width: number
  columns: {
    height: number
    images: { url: string; height: number; width: number }[]
  }[]
}

const COLUMN_WIDTH = 300

export class Masonry extends React.Component<Props, State> {
  static defaultProps = defaultProps

  constructor(props: Props) {
    super(props)
    this.state = {
      width: 0,
      columns: [],
    }
  }

  async componentDidMount() {
    const columns = []
    const { col } = this.props
    for (let i = 0; i < 3; i++) {
      columns.push({
        height: 0,
        images: [],
      })
    }
    await this.setState({ columns })
    await this.props.images.forEach(img => {
      Image.getSize(
        img,
        (width, height) => {
          const index = this.minColIndex()
          const cols = this.state.columns
          const imgHeight = (height * COLUMN_WIDTH) / width
          cols[index].height = cols[index].height + imgHeight
          cols[index].images.push({
            url: img,
            height: imgHeight,
            width: COLUMN_WIDTH,
          })
          this.setState({ columns: cols })
        },
        err => console.log(err),
      )
    })
  }

  minColIndex() {
    return this.state.columns.reduce(
      (minIndex, current, index, arr) =>
        current.height < arr[minIndex].height ? index : minIndex,
      0,
    )
  }

  onLayout = (event: any) => {
    const { width } = event.nativeEvent.layout
    this.setState({ width })
  }

  columnWidth() {
    return this.state.width / 3 - 10
  }

  render() {
    const onPress = this.props.onPress!
    console.log(onPress.length)
    return (
      <View onLayout={this.onLayout} style={{ flexDirection: 'row' }}>
        {this.state.columns.map((col, index) => (
          <View style={{ flex: 1 }} key={`column${index}`}>
            {col.images.map((img, id) => {
              const colWidth = this.columnWidth()
              const height = (img.height * colWidth) / COLUMN_WIDTH
              return onPress.length === 1 ? (
                <TouchableWithoutFeedback
                  onPress={() => onPress(img)}
                  key={`col${index}_img${id}`}
                >
                  <Image
                    source={{ uri: img.url }}
                    style={{ width: colWidth, height, margin: 5 }}
                  />
                </TouchableWithoutFeedback>
              ) : (
                <Image
                  source={{ uri: img.url }}
                  style={{ width: colWidth, height, margin: 5 }}
                  key={`col${index}_img${id}`}
                />
              )
            })}
          </View>
        ))}
        {this.props.children}
      </View>
    )
  }
}
