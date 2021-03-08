import styled from 'styled-components'

export const Content = styled.div`
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  max-width: 799px;
  max-height: 1000px;
  height: 1000px;
  padding:50px 50px 0 50px; 
  background-color:#f4f4f4; 
`
export const Wrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between; 
  padding:${({padding})=> padding}px;
  
`
export const Container = styled.div `
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  max-width: 799px;
  max-height: 1000px;
  height: 1000px;
  background-color:#f4f4f4; 
`
export const ShowAll = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between; 
  padding:${({padding})=> padding}px;
  overflow:overlay;
  scroll-behavior:smooth;
  &::-webkit-scrollbar{ 
    display:none;
  }
  -ms-overflow-style:none;  
  scrollbar-width:none;
`