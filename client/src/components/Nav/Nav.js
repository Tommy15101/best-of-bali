import React from 'react'
import { Link } from 'react-router-dom';
import { NavContainer, NavRightSide, NavLogo, NavSignUp, NavLogin } from "./NavStyled.js";
import { Container } from "react-bootstrap"
import search from '../../assets/svg/loupe.svg'
import cart from '../../assets/svg/shopping-cart.svg'

export default function Nav() {

    return (
        <NavContainer>

            <NavLogo>
                <h1>Best of Bali</h1>
            </NavLogo>

            <NavRightSide>
                <NavSignUp>
                    <h3>Want to join the party?</h3><button>Sign Up</button>
                </NavSignUp>

                <NavLogin>
                    <h6>Login</h6>
                </NavLogin>
            </NavRightSide>
        </NavContainer>
    )
}
