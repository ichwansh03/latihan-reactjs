import React from 'react'
import styled from 'styled-components'

const Grid1 = styled.div`
    display : grid;
    grid-template-columns : repeat(3,250px,1fr);
    grid-template-rows : 100px 150px;
    grid-gap : 10px;
`

const Grid2 = styled.div`
    display : grid;
    grid-template-areas: 
        "header header header"
        "aside main main"
        "footer footer footer"
        "custom custom custom";
`

export default function GridLayout() {
  return (
    <Grid2>
        <div style={{gridArea : "header", background:"red"}}>Header</div>
        <div style={{gridArea : "aside", background:"green"}}>Sidebar</div>
        <div style={{gridArea : "main", background:"blue"}}>Main</div>
        <div style={{gridArea : "footer", background:"yellow"}}>Footer</div>
        <div style={{gridRowStart : 4, gridColumnStart : 1, gridColumnEnd : 3, background:"grey"}}>Custom</div>
    </Grid2>
  )
}
