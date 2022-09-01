import React from "react";
import { Container, Wrapper } from "./Map.styles";

const Map = () => {
  return (
    <Wrapper>
      <Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4530573.957425662!2d-93.32061037228476!3d18.01412862781708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecdbde0b26eb4f%3A0xacc309618f86a538!2sChiapas%20706%2C%20Plan%20de%20Ayala%2C%2029110%20Tuxtla%20Guti%C3%A9rrez%2C%20Chis.!5e0!3m2!1sen!2smx!4v1662060100303!5m2!1sen!2smx"
          width="100%"
          height="400"
        ></iframe>
      </Container>
    </Wrapper>
  );
};

export default Map;
