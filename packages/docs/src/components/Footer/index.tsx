import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer.attrs({
  className: 'container-fluid',
})`
  padding: 2rem 0;
  border-top: 1px solid #dfdfdf;
  margin-top: 2rem;
  text-align: center;
`

export default () => <Wrapper>&copy; 2019 Young Tailors</Wrapper>
