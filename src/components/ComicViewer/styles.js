import styled from 'styled-components'
export const ContainerViewer = styled.div`
  display:flex;
  width: 252px;
  height: 166px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-right: 62px;
  margin-bottom: 48px;
`
export const ImgViewer = styled.div`
  background-image: ${({image})=> `url(${image})`};
  background-size:cover;
  height:166px;
  width:127px;
`
export const ContentWraper = styled.div`
  padding:17px 3px 5px 12px;
  display:flex;
  max-height: 166px;
  width: 125px;
  flex-direction:column;
  justify-content:space-between;// temporario.
`
export const AboutText = styled.span`
  font-family: 'Nunito Sans';
  font-size: ${({size}) => size}px;
  font-weight: ${({weight})=> weight};
  color:${({collor})=>collor};
  min-height:14px;
  padding:3px;
  line-height: 12px;
  margin-right:19px;
  display: flex;
  align-self:flex-start;
  justify-content:space-between;
`
export const Container = styled.div`

`