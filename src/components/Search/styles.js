import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SearchContainer = styled.div`
  width: 182px;
  height: 25px;
  background: #FFFFFF;
  border: 0.5px solid #CCCCCC;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const SearchInput = styled.input`
  width: 88px;
  height: 12px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 11px;
  display: flex;
  align-items: center;
  color: #CCCCCC;
  -webkit-box-shadow: none;
  border:none;
  -moz-box-shadow: none;
  box-shadow: none;
  background-origin: border-box;
  background-image:none;
  background-color:transparent;
  margin-right: 71px;
  &:focus{
    outline:none;
    color:#000000;
  }
`
export const Icon = styled(FontAwesomeIcon)`
  margin-left: 7px;
`
