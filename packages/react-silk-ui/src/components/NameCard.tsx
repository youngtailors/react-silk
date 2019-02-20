import * as React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Heading5, Heading6, Text } from './Text'
import Colors from './Colors'
import Spacing from './Spacing'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nameCardWrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.gray,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
  orderReverse: {
    flexDirection: 'row-reverse',
  },
  title: {
    marginBottom: 0,
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
          <Heading6 style={styles.title}>{title}</Heading6>
          <Text>{subTitle}</Text>
        </View>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
    </View>
  )
}

NameCard.defaultProps = {
  rtl: false,
}
