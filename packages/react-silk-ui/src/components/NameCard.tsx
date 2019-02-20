import * as React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Heading6, Text } from './Text'
import Colors from './Colors'
import Spacing from './Spacing'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nameCardWrapper: {
    flex: 1,
    paddingVertical: 15,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    flex: 7,
    justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  orderReverse: {
    flexDirection: 'row-reverse',
  },
})

export interface Props {
  image?: string
  title: string
  subTitle?: string
  rtl?: boolean
}

export const NameCard = ({ image, title, subTitle, rtl }: Props) => {
  const orderStyles = []
  if (!rtl) {
    orderStyles.push(styles.orderReverse)
  }
  return (
    <View style={styles.container}>
      <View style={[styles.nameCardWrapper, ...orderStyles]}>
        <View
          style={[styles.contentWrapper, rtl ? Spacing.pr10 : Spacing.pl10]}
        >
          <Heading6>{title}</Heading6>
          <Text>{subTitle}</Text>
        </View>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: image }}
          />
        </View>
      </View>
    </View>
  )
}

NameCard.defaultProps = {
  rtl: false,
}
