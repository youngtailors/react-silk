import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Button } from '@react-silk/ui'
import { Image } from './Image'

const BannerWrapper = styled.section.attrs({
  className: 'row',
})`
  display: flex;
  align-items: center;
  height: 576px;
`

const ButtonLink = styled(Link)`
  margin-right: 10px;
  :hover {
    text-decoration: none;
  }
`

const ButtonLinkExt = styled.a`
  margin-right: 10px;
  :hover {
    text-decoration: none;
  }
`

const styles = StyleSheet.create({
  title: {
    fontSize: 68,
    fontWeight: '600',
    marginBottom: 28,
    marginTop: 8,
    color: '#111',
  },
  description: {
    color: '#757575',
    fontSize: 20,
    lineHeight: 40,
    fontWeight: '300',
  },
  buttonGroup: {
    flexDirection: 'row',
    marginTop: 24,
  },
  gstBtn: {
    marginRight: 10,
  },
  ghStar: {
    justifyContent: 'center',
  },
})

export const Banner: React.FunctionComponent = () => {
  return (
    <BannerWrapper>
      <div className="col-md-6">
        <View>
          <Text style={styles.title}>React Silk</Text>
        </View>
        <View>
          <Text style={styles.description}>
            Seamless components that work on both react web and native
          </Text>
        </View>
        <View style={styles.buttonGroup}>
          {/* 
            TODO: Redirect /components to /components/text
          */}
          <ButtonLink to="/components/text">
            <Button>Getting Started</Button>
          </ButtonLink>
          <ButtonLinkExt href="https://github.com/youngtailors/react-silk">
            <Button ghost>Github</Button>
          </ButtonLinkExt>
          <View style={styles.ghStar}>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=youngtailors&repo=react-silk&type=star&count=true&size=large"
              frameBorder="0"
              scrolling="0"
              width="160px"
              height="30px"
            />
          </View>
        </View>
      </div>
      <div className="col-md-6">
        <Image />
      </div>
    </BannerWrapper>
  )
}
