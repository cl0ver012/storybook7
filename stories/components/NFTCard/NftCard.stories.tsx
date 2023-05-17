import React from "react";
import NftCardComponent from "./NftCard";
import MockUp from "./MockUp";
import { light } from "../../styles";

import { ThemeProvider } from "styled-components";
export default {
  title: "Components/nft",
  component: NftCardComponent,
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <NftCardComponent nft={MockUp.nft} />{" "}
    </ThemeProvider>
  );
};
