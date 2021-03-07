import styled from 'styled-components'

export const Container = styled.div`
  background: linear-gradient(0deg, rgba(14 62 57 / 80%), rgba(41, 51, 50, 0.8)), ${({ image }) => `url(${image})`};
  width: 800px;
  height: 300px;
  max-height: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
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