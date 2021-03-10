import styled from 'styled-components'

export const Container = styled.div` 
  height: 300px;
  width: 800px;
`
export const Row = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:30px;
`
export const Line = styled.div`
  width: 558px;
  height: 2px;
  display:flex;
  align-items:center;
  justify-content:${({justifyContent}) => justifyContent || 'flex-start'};
  background: rgba(196, 196, 196, 0.5);
  border-radius: 1px;
  margin-right:32px;
`
export const LineContent = styled.div`
  width: 116.49px;
  height: 2px;
  background:#2D3333;
  border-radius:1px;
`
export const Title = styled.div`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  display: flex;
  align-items: center;
  margin-left:27px;
  width: 183px;
  height: 48px;
`
export const ComicContent = styled.div`
  height:auto;
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-top: 12px;
  margin-left: 27px;
  overflow:overlay;
  scroll-behavior:smooth;
  &::-webkit-scrollbar{  
    display:none;
  }
  -ms-overflow-style:none;  
  scrollbar-width:none;
`