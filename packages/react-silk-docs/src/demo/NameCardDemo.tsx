import * as React from 'react'
import { NameCard } from 'react-silk-ui'
import styled from 'styled-components'

const NameCardWrapper = styled.div`
  > div > div {
    margin-bottom: 0.5rem;
  }
`

export default () => (
  <div>
    <NameCardWrapper>
      <div>
        <NameCard
          image="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/242ce817-97a3-48fe-9acd-b1bf97930b01/09-posterization-opt.jpg"
          title="Just Do It"
          subTitle="goblin@gmail.com"
        />
        <NameCard
          image="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/242ce817-97a3-48fe-9acd-b1bf97930b01/09-posterization-opt.jpg"
          title="Just Do It"
          subTitle="goblin@gmail.com"
          rtl={true}
        />
        <NameCard
          image="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/242ce817-97a3-48fe-9acd-b1bf97930b01/09-posterization-opt.jpg"
          title="Phạm Văn Phong"
          subTitle="phamvanphong915@gmail.com"
        />
        <NameCard
          image="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/242ce817-97a3-48fe-9acd-b1bf97930b01/09-posterization-opt.jpg"
          title="Nguyễn Phong Hồng Duy"
          subTitle="phamvanphong915@gmail.com"
          rtl={true}
        />
      </div>
    </NameCardWrapper>
  </div>
)
