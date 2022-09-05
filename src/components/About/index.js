import React, { useEffect } from "react";
import { Content, Wrapper, Text, Box, Map, MapC } from "./About.styles";

import MapP from "../../images/about.svg";
import Mision from "../../images/about2.svg";
import Vision from "../../images/about3.svg";

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper id="acerca">
      <Content data-aos="fade-right">
        <Text>
          <h1>¿Quiénes somos?</h1>
          <p>
            {" "}
            Nuestro compromiso es ofrecer excelencia en todo lo que producimos y
            comercializamos, entregándoles productos de óptima eficacia,
            seguridad y de la más alta calidad. Les prometemos mejorar nuestros
            productos mediante una constante innovación, rigurosa investigación
            tecnológica y desarrollo con el firme propósito de ser el mejor.
          </p>
        </Text>
        <MapC className="right" data-aos="fade-up">
          <Map src={MapP} />
        </MapC>
      </Content>

      <Content data-aos="fade-right">
        <MapC className="dp" data-aos="fade-up">
          <Map src={Mision} />
        </MapC>
        <Text>
          <h1>Misión</h1>
          <p>
            Consolidarnos como los primeros en el mercado de muebles y
            accesorios para oficina, y alcanzar el mayor volumen en ventas,
            proveer de los mejores diseños de muebles, escritorios, luminarias y
            bibliotecas para oficinas siempre con las mejores ofertas.
          </p>
        </Text>
        <MapC className="db" data-aos="fade-up">
          <Map src={Mision} />
        </MapC>
      </Content>
      <Content data-aos="fade-right">
        <Text>
          <h1>Visión </h1>
          <p>
            Mantener el liderazgo del mercado nacional de muebles de oficina e
            institucional, mediante productos y servicios de alta calidad,
            personal competente y tecnología de vanguardia, para agregar valor a
            nuestros clientes, proveedores y empleados.
          </p>
        </Text>
        <MapC className="right" data-aos="fade-up">
          <Map src={Vision} />
        </MapC>
      </Content>
    </Wrapper>
  );
};

export default About;
