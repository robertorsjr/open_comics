import styled from 'styled-components'

export const Container = styled.div`
  width: 173px;
  height: 258px;
  border-radius: 4px;
  cursor:pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const Wrapper = styled.div`
  padding: 13px 20px;
  position:absolute;
  z-index:999 ;
  display:flex;
  width: 133px;
  height: 233px;
  justify-content:space-between;
  flex-direction:column; 
  border-radius: 4px; 
`
export const BackImage = styled.div`
  position: absolute;
  width: 173px;
  height: 258px;
  max-height: 258px;
  background:${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index:2;
  border-radius: 4px;
`
export const Opacity = styled.div`
  position:absolute;
  width: 173px;
  height: 258px;
  max-height: 258px;
  background: rgba(3, 1, 3,.8);
  z-index:5;
  border-radius: 4px;
`
export const Relesed = styled.span`
  font-family: 'Nunito Sans';
  font-size: 7px;
  line-height: 10px;
  color: #CCCCCC;
`
export const Title = styled.span`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 16px;
  color:#FFFFFF;
`
export const Description = styled.span`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 6px;
  line-height: 8px;
  color: #FFFFFF;
`
export const About = styled.div`
  display:flex;
  justify-content:space-between;
  flex-direction:column;
`