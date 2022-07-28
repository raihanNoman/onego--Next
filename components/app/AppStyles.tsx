import styled from "styled-components";

const Button = styled.button`
  display: flex;
  font-size: 1rem;
  padding-inline: 1rem;
  padding-block: 0.6rem;
  align-self: center;
  outline: none;
  border-radius: 1.2rem;
  color: white;
  border: none;
  background: #242424;
  width: 10rem;
  justify-content: center;
  margin: 1.3rem;

  &:not(:hover) {
    transition: all 1s ease;
  }

  &:hover {
    transition: all 0.5s ease;
    font-size: 1.1rem;
    box-shadow: 0px 5px 13px #7c7c7c;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { Button, ImageWrapper };
