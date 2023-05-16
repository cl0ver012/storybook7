/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
/* legacy and is a subject for refactor */
export const colorTokens = {
  black: "#161616",
  gray: "#858585",
  lightGray: "#FAF9F9",
  lightBlue: "#2F80ED",
  white: "#ffffff",
  primary: "#0066DB",
  secondaryText: "rgba(25, 29, 32, 0.75)",
  bodyText: "rgba(25, 29, 32, 0.95)",
  tertiaryText: "rgba(25, 29, 32, 0.6)",
  tertiaryIcon: "rgba(25, 29, 32, 0.5)",
  disabled: "#858585",
};

/* legacy and is a subject for refactor */
export const spaces = {
  0: "0",
  2: "2px",
  10: "10px",
  12: "12px",
  14: "14px",
  18: "18px",
  24: "24px",
};
export const default_image =
  "https://miro.medium.com/v2/resize:fit:679/1*1T5O1_-zrHWlrucA07txZw.png";
export const default_featured_image = "/default-featured.png";

export const DEFAULT_TOKEN_BALANCE_REFETCH_INTERVAL = 10000;
export const SLIPPAGE_OPTIONS = [0.01, 0.02, 0.03, 0.05];
export const NETWORK_FEE = 0.003;

export const INCENTIVE_AMOUNT = 40000000;
export const DEPLOY_TIMESTAMP = 1650959066;

/* feature flags */
export const __POOL_REWARDS_ENABLED__ = true; // is under development and cannot be enabled
export const PINATA_PRIMARY_IMAGE_SIZE = "?img-width=350&img-height=350";
export const PINATA_SECONDARY_IMAGE_SIZE = "?img-width=100&img-height=100";
