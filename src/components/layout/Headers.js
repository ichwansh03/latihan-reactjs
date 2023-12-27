import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const Hero = styled.div`
    background: url("../../singapore.jpg") no-repeat center right;
    background-size: cover;
    color: #fff;
    font-size: 20px;
    text-align: center;
    display: grid;
    grid-template-columns: 10px 2fr 10px;
    grid-template-rows: .5fr 1fr 20px;
    grid-gap: 20px;
    img{
        margin: auto;
        padding-top: 1rem;
        height: 165px;
        grid-column: 2/3;
        grid-row: 1/2;
    }

    article{
        grid-column: 2/3;
        grid-row: 2/3;
    }

    article p{
        font-size: 18px;
        font-weight: 600;
        line-height: 22px;
        color: #fff;
    }

    h2{
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: 600;
    }

    button{
        background-color: #092635;
        border-radius: 4px;
        border: #fff;
        color: aliceblue;
        font-size: 1rem;
        padding: 5px 10px;
        margin: .75rem auto 0;
        cursor: pointer;
    }
`

export default function Headers() {
  return (
    <Hero>
        <img src='../../logo512.png' alt='onlineshop'/>
        <article>
            <h2>Welcome to Singapore</h2>
            <p>Enjoy your holiday, make a wonderful experiences in this country. Happy Visiting!</p>
            <button>Getting Started <FontAwesomeIcon icon={faAngleDoubleRight}/></button>
        </article>
    </Hero>
  )
}
