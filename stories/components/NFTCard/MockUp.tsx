const MockUp = {
  validated: true,
  profile: {
    name: "Clover",
    avatar:
      "https://miro.medium.com/v2/resize:fill:144:144/1*cwYWYCjbeXNc_pAtTeq_Zg.jpeg",
  },
  tokeInfo: {
    symbol: "Temp Symbol",
  },
  nft: {
    saleType: "NotSale",
    name: "temp-image",
    price: "100$",
    image: "https://miro.medium.com/v2/resize:fit:700/0*rTt7E4Dlb_MLvKVn",
    endedAt: "Tomorrow",
    owner: "Clover",
    tokenId: "TempTokenID",
    ftId: "TempFTID",
    collectionId: "TempCollectionID",
    ar: "Temp AR",
    vr: "Temp VR",
  },
  theme: {
    fonts: {
      primary: '"Roboto", sans-serif', // default font for all text in the app.  Can be changed for individual components.  Example:
      secondary: '"Roboto", sans-serif', // different font for second line of text.  Example: 			const text = `Lorem
    },
    color: {
      primaryBackground: "#e1ffff", // light blue #1a237e = #e1ffff, blue #1a237e = #00e676,
      primaryBorderColor: "#1a237e", // light blue #1a237e = #e1ffff, blue #1a237e = #00e676
      primary: "red",
    },
  },
};
export default MockUp;
