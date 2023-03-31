import React from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

const Container = styled.div`
  width: 100%;
  background: url("/images/IMG_6812.jpg") no-repeat;
  background-size: auto;
  background-position: center; /* Center the image */
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  flex-direction: column;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background: url("/images/IMG_6812.jpg") no-repeat;
  background-size: auto;
  background-position: center; /* Center the image */
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0px;
  padding: 0px;
  height: 95vh;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Avatar = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  margin-bottom: 32px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Title = styled.h1`
  font-weight: 100;
  color: white;
  animation: ${fadeIn} 1s ease-in-out;
  font-size: 10vw;

  @media (min-width: 768px) {
    font-size: 8vw;
  }
`;

const Paragraph = styled.p`
  max-width: 50%;
  font-size: 16px;
  color: white;
  margin: 16px auto;
  animation: ${fadeIn} 1s ease-in-out;
`;

const WatermarkContainer = styled.div`
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.246);
  color: #fff;
  font-size: 14px;
  font-weight: 200;
  padding: 10px;
  text-align: center;
  height: 5vh;
`;

const NextImage = styled(Image)``;

type WatermarkProps = {
  text: string;
};

const Watermark = ({ text }: WatermarkProps) => {
  return <WatermarkContainer>{text}</WatermarkContainer>;
};

const LandingTop = () => (
  <>
    <Container>
      <Center>
        <Title>Explore | Evolve</Title>
      </Center>
    </Container>
  </>
);

export default LandingTop;

/*
  <NextImage
        src="/images/IMG_6812.jpg"
        alt={""}
        quality={100}
        fill
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
      />
*/
