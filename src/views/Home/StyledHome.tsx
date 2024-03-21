import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 20px 100px;
  gap: 50px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 20px 50px;
  }
`;

export const HomeImage = styled.img`
  width: 100%;
  border-radius: 2%;
  margin-top: 30px;
`;

export const ServicesWrapper = styled.div`
  padding: 0 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 30px;

  @media (max-width: 1500px) {
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 50px;
    padding: 0 50px;
  }
`;

export const HomeHeader = styled.h1`
  font-size: 25px;
  margin: 30px 0;
  font-weight: bold;
`;

export const TextWrapper = styled.p`
  font-size: 20px;
  margin-bottom: 40px;
  line-height: 28px;
`;

export const HomeOfferItem = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;

  @media (max-width: 800px) {
    justify-content: flex-start;
  }
`;

export const HomeOfferItemImage = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 50%;
`;

export const HomeOfferItemTitle = styled.h3``;
