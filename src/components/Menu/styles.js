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
  margin-top:12px;
  margin-bottom:10px;
  align-items: center;
  &:hover{
    opacity:100%;
  }
`
export const SelectedLine = styled.div`
  width:${({x}) => x}px;
  margin-left:${({margin}) => margin}px;
  border: 2px solid #418BCA;
  align-self:center;
  opacity:${({opacity}) => opacity || 0}%;
`
