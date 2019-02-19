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
          image="https://vnn-imgs-f.vgcloud.vn/2018/04/12/17/bill-gates-la-nguoi-dan-ong-duoc-nguong-mo-nhat-the-gioi.jpg"
          title="Bill Gate"
          subTitle="goblin@gmail.com"
          rtl={true}
        />
        <NameCard
          image="https://vnn-imgs-f.vgcloud.vn/2018/07/20/13/nhieu-loi-nguyen-chet-choc-bao-quanh-ly-tieu-long-luc-con-song-1.jpg"
          title="Lý Tiểu Long"
          subTitle="lytieulong123456@gmail.com"
        />
        <NameCard
          image="http://sohanews.sohacdn.com/thumb_w/660/2017/photo-4-1509012560460-0-0-409-660-crop-1509012656515.jpg"
          title="High Thị Snow Page"
          subTitle="highthisnowpage999@gmail.com"
          rtl={true}
        />
        <NameCard
          image="https://media.laodong.vn/storage/newsportal/2018/9/28/633320/CEO-Facebook.jpg"
          title="Mark Zuckerberg Facebook"
          subTitle="aaaa@gmail.com"
        />
        <NameCard
          image="https://media.laodong.vn/storage/newsportal/2018/9/28/633320/CEO-Facebook.jpg"
          title="Mark Zuckerberg"
          subTitle="aaaaaaaaaaaaaaaaaaaaaaaaa@gmail.com"
          rtl={true}
        />
      </div>
    </NameCardWrapper>
  </div>
)
