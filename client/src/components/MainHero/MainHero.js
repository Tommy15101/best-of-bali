import React from 'react'
import "./MainHero.css"
import images from "../../assets/images"
import {Container} from "reactstrap"
import { useQuery, gql } from "@apollo/client"

const FETCH_MAIN_CARDS = gql`
{
    mainCards {
        image
        title
    }
}
`

function MainHero() {

    const { loading, error, data } = useQuery(FETCH_MAIN_CARDS)

    if(loading) return <div>loading. . .</div>
    if(error) return <div>Some Error Happened. . .</div>

    return (
        <div className="MainHero">
            <Container>
                    <div className="header-container">
                        <h2>The Best of Bali<br/>at your fingertips</h2>
                        <img src={images.bali} />
                    </div>
                    {/* <div className="cards-container">
                        {data.mainCards.map(card => {
                            return (
                                <div className="card">
                                    <h3>{card.title}</h3>
                                    <img src={images[card.image]} style={{width: "100%"}}/>
                                </div>
                            )
                        })}
                    </div> */}
            </Container>
        </div>
    )
}

export default MainHero
