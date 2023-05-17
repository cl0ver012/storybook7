import styled from 'styled-components'

export const GradientBackground = styled.div`
  background: transparent;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border: 1px solid;
    border-image: linear-gradient(
      90.65deg,
      #ffffff 0.82%,
      rgba(0, 0, 0, 0) 98.47%
    );
    background: linear-gradient(0deg, #050616, #050616) padding-box,
      linear-gradient(90.65deg, #ffffff 0.82%, rgba(0, 0, 0, 0) 98.47%)
        border-box;
    backdrop-filter: blur(20px);
    box-shadow: 0px 4px 40px 0px #2a2f3217, 0px 7px 24px 0px #6d6d78 inset;
    z-index: -1;
  }
`
export const SecondGradientBackground = styled.div`
  background: transparent;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border: 1px solid;

    border-image-source: linear-gradient(
      106.01deg,
      rgba(255, 255, 255, 0.2) 1.02%,
      rgba(255, 255, 255, 0) 100%
    );

    background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.06) 0%,
          rgba(255, 255, 255, 0.06) 100%
        )
        padding-box,
      linear-gradient(
          106.01deg,
          rgba(255, 255, 255, 0.2) 1.02%,
          rgba(255, 255, 255, 0) 100%
        )
        border-box;

    backdrop-filter: blur(15px);
    box-shadow: 0px 7px 14px 0px #0000001a, 0px 14px 24px 0px #11141dcf inset;
    z-index: -1;
  }
`
export const Button = styled.div`
  height: 60px;
  width: 100%;
  cursor: pointer;
  border-radius: 16px;
  background: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  box-shadow: 0px 4px 40px rgba(42, 47, 50, 0.09),
    inset 0px 7px 8px rgba(0, 0, 0, 0.2);
  &:hover {
    opacity: 0.7;
  }
`
