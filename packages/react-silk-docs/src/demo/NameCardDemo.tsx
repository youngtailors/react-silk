import * as React from 'react'
import { NameCard } from 'react-silk-ui'
import styled from 'styled-components'

const NameCardWrapper = styled.div`
  display: flex;
  > div > div {
    margin-bottom: 0.5rem;
  }
`

export default () => (
  <div>
    <NameCardWrapper>
      <div>
        <NameCard
          image="https://avatars1.githubusercontent.com/u/5728560?s=460&v=4"
          title="Bill Gate"
          subTitle="goblin@gmail.com"
        />
        <NameCard
          image="https://avatars3.githubusercontent.com/u/24296018?s=460&v=4"
          title="Mark Zuckerberg"
          subTitle="jetaimefrc@gmail.com"
          rtl={true}
        />
      </div>
    </NameCardWrapper>
  </div>
)
