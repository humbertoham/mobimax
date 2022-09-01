import React, { useEffect } from "react";
import { Container, Wrapper, Text, Message, LogoN } from "./Exa.styles";
import image from "../../images/banner.jpeg";

import Aos from "aos";
import "aos/dist/aos.css";
const Exa = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Container imgUrl={image}>
        <Text>
          <h1>Nuestro trabajo</h1>
          <p>Ejemplos de nuestro trabajo.</p>
          <div className="dividerw"></div>
        </Text>
      </Container>
    </Wrapper>
  );
};

export default Exa;
