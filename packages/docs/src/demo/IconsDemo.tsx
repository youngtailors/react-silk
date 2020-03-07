import * as React from 'react'
import { Icon } from '@react-silk/ui'
import styled from 'styled-components'
import FAIcons from './FontAwesome.json'

const IconWrapper = styled.div`
  float: left;
  width: 12.5%;
  height: 85px;
  padding: 10px;
  line-height: 1.4;
  text-align: center;
  background-color: #f9f9f9;
  border: 1px solid #fff;
  display: flex;
  flex-direction: column;
`

const IconName = styled.span`
  font-size: 12px;
`

export default () => (
  <div>
    {Object.keys(FAIcons).map(name => (
      <IconWrapper key={name}>
        <Icon name={name} color="#555" />
        <IconName>{name}</IconName>
      </IconWrapper>
    ))}
  </div>
)
