import styled from 'styled-components'
import vector from '../../assets/icons/vector.svg'

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
  padding-top:17px;
  padding-left:12px;
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
  line-height: 7px;
  margin-right:19px;
  display: flex;
  align-self:flex-start;
  justify-content:space-between;
`

export const ReadButton = styled.div`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 8px;
  line-height: 11px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  align-self:flex-end;
  margin-right:8px;
  margin-bottom:5px;
  width: 27.12px;
  height: 14px;
  color: #0277BD;
  cursor:pointer;
`
export const Container = styled.div`

`
export const VectorIcon = styled.div`
    background-image:url(${vector});
    background-position: center;
    background-size: cover;
    width: 3.13px;
    height: 5px;
`