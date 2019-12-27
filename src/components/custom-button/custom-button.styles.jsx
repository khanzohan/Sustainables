import styled, { css } from 'styled-components';

const buttonStyles = css`
    background-color: black;
    color: white;
    border: 1px solid black;

    &:hover {
      background-color: white;
      color: black;
      transition: all 0.3s;
    }
`

const googleSignInStyles = css`
    background-color: #4285f4; 
    color: white;
    border-color: #4285f4;

    &:hover {
        background-color: white;
        color: #4285f4;
    }
`

const invertedStyles = css`
    background-color: black; 
    color: white;
    border-color: black;

    &:hover {
        background-color: white;
        color: black;
    }
`

const getButtonStyles = (props) => {
    if (props.isGooglSignIn) {
        return googleSignInStyles
    }

    return props.inverted ? invertedStyles : buttonStyles
}

export const CustomButtonContainer = styled.button`
    transition: all 0.3s;
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: bolder;
    cursor: pointer;
    outline: none;
  
    ${getButtonStyles};
`
