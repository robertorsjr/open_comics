import styled from 'styled-components'

export const Navigator = styled.nav`
  width: 200px;
  height: 33px;
  display:flex;
  justify-content:space-between;
  align-items:center;
`
export const Wrapper = styled.div`

`
export const About = styled.span`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 600;
  color:#FFFFFF;
  opacity:${({opacity}) => opacity || 50}%;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
`
