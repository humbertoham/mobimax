import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--black);
  height: 130px;
`;

export const Content = styled.div`
  padding-top: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
  color: var(--white);
  text-align: center;
  p {
    font-size: 1rem;
    font-family: "Poppins";
  }
`;
export const Red = styled.a`
  p {
    margin-left:10px ;
    display: inline;
    font-size: 2rem;
    color: #fff;
    font-family: "Poppins";
    font-weight: 900;
  }
  font-size: 2rem;
  padding: 10px;
  color: var(--white);
  text-decoration: none;
`;
