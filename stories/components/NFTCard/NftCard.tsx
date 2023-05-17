/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "../Img";
import MockUp from "./MockUp";
// import DateCountdown from "../util/DateCountdownMin";
import { ProfileType, NFTCardType } from "../utils/types";
import { JsxElement } from "typescript";
import ARModal from "./ARModal";
import { theme } from "@chakra-ui/react";

const saleType: any = {
  NotSale: "Not for sale",
  Auction: "Current bid",
  "Direct Sell": "Buy now",
};

interface NFTComponentPropsType {
  nft: NFTCardType;
  variant?: string;
}

const NftCardDiv = styled.div<{ variant: string }>`
  background: ${MockUp.theme.color.primaryBackground};
  border: 1px solid ${MockUp.theme.color.primaryBorderColor};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  gap: 16px;
  p {
    font-size: 16px;
    font-family: eina;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;
// const NftCardDiv = styled.div<{ variant: string }>`
//   background: ${({ theme }) => theme.colors.primaryBackground};
//   border: 1px solid ${({ theme }) => theme.colors.primaryBorderColor};
//   border-radius: 8px;
//   cursor: pointer;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   padding: 16px;
//   gap: 16px;
//   p {
//     font-size: 16px;
//     font-family: eina;
//   }
//   @media (max-width: 480px) {
//     width: 100%;
//   }
// `;

const Title = styled.div`
  font-size: 12px;
  color: #737373;
`;

// const Timetrack = styled.div`
//   .dcd-info {
//     font-size: 14px;
//     width: 100%;
//     @media (max-width: 1550px) {
//       font-size: 12px;
//     }
//   }
//   .dcd-val {
//     font-size: 14px;
//   }
//   span {
//     display: flex;
//   }
// `;

const StyledImage = styled(Image)<{ imgType: string }>`
  width: ${({ imgType }) => (imgType === "secondary" ? "334px" : "254px")};
  height: 300px;
  object-fit: cover;
  border-radius: 8px;

  video {
    width: ${({ imgType }) => (imgType === "secondary" ? "334px" : "254px")};
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    video {
      width: 100%;
      height: 100%;
    }
  }
`;
const ImgDiv = styled.div`
  width: 100%;
  /* padding-bottom: 100%; */
  display: block;
  position: relative;
  border-radius: 8px;
  height: 300px;
`;
const Logo = styled(Image)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
`;

const CollectionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  p {
    color: ${MockUp.theme.color.primary};
  }
`;
// const CollectionWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   p {
//     color: ${({ theme }) => theme.colors.primary};
//   }
// `;
// const ArViewWrapper = styled.div`
//   position: absolute;
//   right: 8px;
//   top: 8px;
//   z-index: 11;
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const SaleInfo = styled.div`
  p {
    font-size: 12px;
    color: #737373;
  }
  h1 {
    font-size: 20px;
    font-weight: 500;
    font-family: ${MockUp.theme.fonts.secondary};
    color: ${MockUp.theme.color.primary};
  }
`;
// const SaleInfo = styled.div`
//   p {
//     font-size: 12px;
//     color: #737373;
//   }
//   h1 {
//     font-size: 20px;
//     font-weight: 500;
//     font-family: ${({ theme }) => theme.fonts.secondary};
//     color: ${({ theme }) => theme.colors.primary};
//   }
// `;

function NftCard({
  nft,
  variant = "primary",
}: NFTComponentPropsType): JSX.Element {
  const tokenInfo = MockUp.tokeInfo;
  const [profile, setProfile] = useState<ProfileType>(MockUp.profile);
  useEffect(() => {
    (async () => {
      setProfile(MockUp.profile);
    })();
  }, [nft]);
  console.log("===========");
  console.log(nft.image);
  return (
    <NftCardDiv variant={variant}>
      <ImgDiv>
        <StyledImage src={nft.image} variant="primary" imgType={variant} />
      </ImgDiv>
      <ContentWrapper>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <SaleInfo>
            <p>{saleType[nft.saleType]}</p>
            <h1>
              {nft.saleType === "NotSale"
                ? nft.name
                : `${nft.price} ${tokenInfo?.symbol}`}
            </h1>
          </SaleInfo>
          {nft.saleType === "Auction" && (
            <div style={{ width: "fit-content" }}>
              <Title>Ends in</Title>
            </div>
          )}
        </div>
        <CollectionWrapper>
          <Logo src={profile.avatar} size="24px" variant="secondary" />
          <p>
            Profile Name: {profile.name}
            {"   "}Nft Owner : {nft.owner}
          </p>
        </CollectionWrapper>
      </ContentWrapper>
    </NftCardDiv>
  );
}

export default NftCard;
