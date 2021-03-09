import styled from 'styled-components'

export const Btn = styled.div`
  width: 117px;
  height: 36px;
  background: ${({bkcolor}) => bkcolor}; 
  color: ${({color}) => color};
  border-radius: 6px;
  display: flex;
  align-items: center;
  text-align: center;
  cursor:pointer;
  &:hover{
    background: ${({hoverBkColor}) => hoverBkColor};
    color:${({hoverFtColor}) => hoverFtColor};
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
`
export const TextButton = styled.span`
  width: 102px;
  height: 20px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-align:center;
  margin: 8px;
  cursor:pointer;
`