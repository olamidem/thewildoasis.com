/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    `
    font-size: 3rem;
    font-weight: 600;
`}
  ${(props) =>
    props.as === "h2" &&
    `
    font-size: 2rem;
    font-weight: 600;

`} 
${(props) =>
    props.as === "h3" &&
    `
    font-size: 1rem;
    font-weight: 500;

`}
  line-height:1.4rem
`;

export default Heading;
