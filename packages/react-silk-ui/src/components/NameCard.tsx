import * as React from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import { Text } from './Text'
import Colors from './Colors'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    width,
    backgroundColor: Colors.light,
    flexDirection: 'row',
    elevation: 4,
    shadowOpacity: 0.5,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: Colors.light,
  },
  imageWrapper: {
    flex: 3,
    padding: 3,
  },
  contentWrapper: {
    flex: 7,
    padding: 3,
  },
  image: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 20,
    color: Colors.primary,
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 16,
    color: Colors.gray,
  },
})

export interface Props {
  image?: string
  title: string
  subTitle?: string
  rtl?: boolean
}

export const NameCard = ({ image, title, subTitle, rtl }: Props) => {
  return (
    <View style={{ flex: 1 }}>
      {rtl ? (
        <View style={styles.container}>
          <View style={styles.contentWrapper}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={{ uri: image }}
            />
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={{ uri: image }}
            />
          </View>
          <View style={[styles.contentWrapper, { paddingLeft: 10 }]}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
        </View>
      )}
    </View>
  )
}

NameCard.defaultProps = {
  rtl: false,
}
