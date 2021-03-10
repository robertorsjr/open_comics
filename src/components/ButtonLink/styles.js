import styled from 'styled-components'
import vector from '../../assets/icons/vector.svg'

export const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  align-self:flex-end;
  flex-direction:${({direction}) => direction};
  width: ${({y}) => y || 10}px;
  height: ${({x}) => x || 10}px;
  cursor:pointer;
`
export const Text = styled.div`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: ${({size}) => size}px;
  line-height: 11px;
  color:${({color}) => color};
`
export const VectorIcon = styled.div`
  background-image:url(${vector});
  background-position: center;
  background-size: cover;
  width: ${({x}) => x-3}px;
  height:${({y}) => y-2}px;
  margin:4px;
  transform: rotate(${({rotate}) => rotate || 0}deg);
`