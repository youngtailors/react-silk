import * as React from 'react'
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native'

export interface Props {
  images: string[]
  col?: number
  padding?: number
  onPress?: (arg0: { url: string; height: number; width: number }) => void
}

const defaultProps = {
  col: 3,
  padding: 10,
  onPress: null,
}

interface State {
  width: number
  columns: {
    height: number
    images: { url: string; height: number; width: number }[]
  }[]
}

const style = StyleSheet.create({
  masonryWrapper: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
  },
})

const COLUMN_WIDTH = 300 // on component didmount, layout wontbe loaded so it's width = 0, cannot get column width => define a value to calculate standard image height

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
    const col = this.props.col!
    for (let i = 0; i < col; i++) {
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
    const col = this.props.col!
    const padding = this.props.padding!
    return this.state.width / col - padding
  }

  render() {
    const onPress = this.props.onPress!
    const padding = this.props.padding!
    const colWidth = this.columnWidth()
    return (
      <View onLayout={this.onLayout} style={style.masonryWrapper}>
        {this.state.columns.map((col, index) => (
          <View style={style.column} key={`column${index}`}>
            {col.images.map((img, id) => {
              const height = (img.height * colWidth) / COLUMN_WIDTH
              return onPress !== null ? (
                <TouchableWithoutFeedback
                  onPress={() => onPress(img)}
                  key={`col${index}_img${id}`}
                >
                  <Image
                    source={{ uri: img.url }}
                    style={{ width: colWidth, height, margin: padding / 2 }}
                  />
                </TouchableWithoutFeedback>
              ) : (
                <Image
                  source={{ uri: img.url }}
                  style={{ width: colWidth, height, margin: padding / 2 }}
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
