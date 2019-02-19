import * as React from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import { Text } from './Text'
import Colors from './Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: Colors.smokeWhite,
    borderBottomWidth: 0,
    shadowColor: Colors.gray,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
  },
  imageWrapper: {
    flex: 3,
  },
  contentWrapper: {
    flex: 7,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 20,
    color: Colors.dark,
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
          <View style={[styles.contentWrapper, { paddingRight: 10 }]}>
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
