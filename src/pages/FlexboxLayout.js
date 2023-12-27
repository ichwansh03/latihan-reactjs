import React from 'react'
import styled from 'styled-components'

const Flex1 = styled.div`
    display : flex;
    gap : 10px;
    flex-direction : column-reverse;
`;

const FlexLayout = styled.div`
    display : flex;
    min-height : 100vh;
    flex-direction : column;

    header{
      background-color : #ccc;
      font-size : 3rem;
    }

    main{
      display : flex;
      flex-direction : column;
      flex : 1;
    }

    main article{
      background-color : #00c9f2;
      flex : 1;
    }

    main aside{
      background-color : #f9cf93;
    }

    footer{
      background-color : #ccc;
    }

    @media(min-width : 768px){
      main{
        display : 80%;
        margin : 0 auto;
        flex-direction : row;
      }
      
      main aside{
        flex: 0 0 20%
      }

      .leftSidebar{
        order : -1
      }
    }
`;

export default function FlexboxLayout() {
  return (
    <FlexLayout>
      <header>Header</header>
      <main>
        <article>main article</article>
        <aside>Right Sidebar 1</aside>
        <aside className='leftSidebar'>Left Sidebar 2</aside>
      </main>
      <footer>Footer</footer>
        {/* <div style={{background:"red"}}>A</div>
        <div style={{background:"green"}}>B</div>
        <div style={{background:"blue"}}>C</div>
        <div style={{background:"yellow"}}>D</div>
        <div style={{background:"gray"}}>E</div> */}
    </FlexLayout>
  )
}
