import React from "react";
import NftCardComponent from "./NftCard";
import MockUp from "./MockUp";

export default {
  title: "Components/nft",
  component: NftCardComponent,
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <div>
      <NftCardComponent nft={MockUp.nft} />{" "}
    </div>
  );
};
