import styled from 'styled-components'

export const Container = styled.div`
  width: 800px;
  height: 300px;
  max-height: 300px;
`
export const Wrapper = styled.div`
  position:absolute;
  z-index:999 ;
`
export const BackImage = styled.div`
  position: absolute;
  width: 800px;
  height: 300px;
  max-height: 300px;
  background:${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index:2;
`
export const Opacity = styled.div`
  position:absolute;
  width: 800px;
  height: 300px;
  max-height: 300px;
  background: rgba(52, 69, 76,.97);
  z-index:5;
`
export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:20px;
  margin-right:29px;
` 
export const Title = styled.span`
  font-family: 'Krona One';
  font-size: 18px;
  color: #FFFFFF;
`
export const TitleBox = styled.div`
  width: 292px;
  height: 49px;
  display: flex;
  align-items: center;
  margin-left:37px;
` 