import styled from "styled-components"
import { withTheme } from "styled-components"

export const NavContainer = styled.div`
  background-color: rgb(19, 25, 33);
  height: 7.5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`
export const NavLogo = styled.div`
  h1 {
    color: white;
  }
`
export const NavRightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const NavSignUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  h3 {
    color: white;
    padding: 0 10px;
  }
  button {
    padding: 10px;
    font-size: 20px;
    color: black;
    background-color: aliceblue;
  }
`
export const NavLogin = styled.div`
  h6 {
    color: white;
    padding: 0 10px 0 30px;
  }
`
