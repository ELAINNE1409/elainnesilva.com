import React from 'react';
import styled from "styled-components";
import Typed from "react-typed";
import aboutImg from '../assets/images/about.jpg';
import { inject } from '@vercel/analytics';

function About(){
    inject();
    return (  
        <MainAbout>
              <DivImageAbout>
                <DivImageAboutImg src={aboutImg} alt="About Image" />
              </DivImageAbout>
              <div>
              <section>
                <P>Olá, sou Elainne Silva, tenho 40 anos, sou de Manaus-AM, Brasil.</P> 
                  <P>Sou esposa, mãe, mãe de pet, enfermeira e atualmente me aventurando no mundo de testes e desenvolvimento de software.</P>
                    <P> Recentemente finalizei uma pós graduação em Software Quality Assurance no ISEP, e estou em busca de novos desafios e oportunidades. </P>
            </section>
            <section>
                <h3>Formação</h3>
                <P>"Formada em Enfermagem pela Faculdade Metropolitana de Manaus, acumulei 10 anos de experiência na área. No entanto, ao imigrar para Portugal, decidi iniciar uma nova jornada profissional em busca de satisfação pessoal e conhecimento do desconhecido. Em janeiro de 2024, concluí uma Pós-Graduação em QA (Software Quality Assurance) no Instituto Superior de Engenharia do Porto, Portugal.
    
                    Minha transição para a área de tecnologia foi motivada por uma experiência anterior durante meu trabalho como enfermeira. Enquanto lidava com protocolos de saúde que envolviam a utilização de bundles, reconheci a necessidade de levantar requisitos para desenvolver funcionalidades que otimizassem e agilizassem esses protocolos. Fui responsável pelo levantamento desses requisitos e acompanhei sua implementação pela equipe de TI, que na época utilizava o sistema MV.
                    
                    Essa experiência despertou meu interesse pelo universo da tecnologia e sua aplicação no campo da saúde, levando-me a investir em minha formação em QA. Atualmente me dedico a aprimorar meus estudos para tão logo possa ser uma desenvolvedora fullstack</P>
            </section>
                  <P>Very focused professional and very easy to work in a team.</P>
                  <P><Inovation><Typed
                            strings={[
                            "I always look for innovation.",
                            ]}
                            typeSpeed={50}
                        /></Inovation> On my journey I was part of MV Sistemas.</P>
                  <P>Learning the business rules of the Hospital area (mainly the Supplies area).</P>
                  <P>I was also part of the technology area at Accenture focused on financial services, today I am part of China Systems.</P>
              </div>
        </MainAbout>
    )
}

const Inovation = styled.div`
background-image: linear-gradient(135deg, var(--purple) 0%, var(--pink) 70%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-weight: bold;
`;

const MainAbout = styled.main`
  margin: 0em 1em 5em 1em;
  font-size: 1em;
  text-align: left;
  background: var(--current-line);
  border-radius: 70px;
  padding: 2em;

  @media screen and (min-width: 900px) {
    margin: 0em 10em 5em 10em;
    display: flex;
    text-align: left;
    align-items: center;
  }
`;

const P = styled.p`
  color: var(--color-primary);
`;

const DivImageAbout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const DivImageAboutImg = styled.img`
  width: 100%;
  border-radius: 20px;
  opacity:  1;
  transition: 250ms;
  &:hover{
    opacity: 1;
    transition: 250ms;
  }
  @media screen and (min-width: 700px) {
    width: 50%;
  }
`;

export default About;