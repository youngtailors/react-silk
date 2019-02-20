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
          image="https://vnn-imgs-f.vgcloud.vn/2018/04/12/17/bill-gates-la-nguoi-dan-ong-duoc-nguong-mo-nhat-the-gioi.jpg"
          title="Bill Gate"
          subTitle="goblin@gmail.com"
        />
        <NameCard
          image="https://media.laodong.vn/storage/newsportal/2018/9/28/633320/CEO-Facebook.jpg"
          title="Mark Zuckerberg"
          subTitle="markzuckerbergaaaaasdass@gmail.com"
          rtl={true}
        />
      </div>
    </NameCardWrapper>
  </div>
)
