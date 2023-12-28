import React from 'react'
import Headers from './layout/Headers'
import Navbar from './layout/Navbar'
import Footers from './layout/Footers'
import Sidebar from './layout/Sidebar'
import Main from './layout/Main'
import styled from 'styled-components'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Counter03 from './Counter03'
import ProductList from './ParentChild/ProductList'
import Todo from '../pages/Todo'

const MainSidebar = styled.div`
    
        display: grid;
        margin: 1rem auto;
        grid-template-columns: 180px 2fr;
        grid-template-areas: "aside main main";

    aside{
        grid-area: 'aside';
    }

    main{
        grid-area: 'main';
    }
`

export default function MainLayout() {
    return (
        <BrowserRouter>
            <Headers />
            <Navbar />
            <MainSidebar>
                <Sidebar />
                <Main>
                    <Routes>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/counter" element={<Counter03/>}/>
                        <Route path="/product" element={<ProductList/>}/>
                        <Route path="/todo" element={<Todo/>}/>
                    </Routes>
                </Main>
            </MainSidebar>
            <Footers />
        </BrowserRouter>
    )
}