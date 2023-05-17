/* eslint-disable camelcase */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CustomVideoPlayer from "./CustomVideoPlayer";
import {
  PINATA_PRIMARY_IMAGE_SIZE,
  PINATA_SECONDARY_IMAGE_SIZE,
  default_image,
} from "./utils/constants";

import Skeleton from "./Skeleton";
import { JsxElement } from "typescript";

const IMAGE_SIZE: any = {
  primary: PINATA_PRIMARY_IMAGE_SIZE,
  secondary: PINATA_SECONDARY_IMAGE_SIZE,
  full: "",
};

const VideoWrapper_Log = styled.div`
  position: relative;
  height: 100%;
`;

const VideoContainer_Log = styled.div<{ show: boolean }>`
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  height: ${({ show }) => (show ? "100%" : "0 !important")};
`;

let res: any;

const Log = ({
  className = "",
  src = "",
  defaultImage = default_image,
  variant = "primary",
}) => {
  const [imgSrc, setImgSrc] = useState(default_image);
  const [type, setType] = useState("image");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setImgSrc(src);
  }, [src, type]);
  useEffect(() => {
    (async () => {
      try {
        setType("MP4");
      } catch (err) {
        console.log("Error Cateched in Image!");
      }
    })();
  }, [src]);

  useEffect(() => {
    try {
      res = getWholeComponent();
    } catch (err) {
      console.log("Error Cateched in Image!");
    }
  }, [src]);

  const getWholeComponent = () => {
    switch (type) {
      case "video":
        return (
          <VideoWrapper_Log>
            {loading && <Skeleton className={className} />}
            <VideoContainer_Log show={!loading} className={className}>
              <CustomVideoPlayer
                src={`${imgSrc}?stream=true`}
                onCanPlayThrough={() => {
                  setLoading(false);
                }}
              />
            </VideoContainer_Log>
          </VideoWrapper_Log>
        );
      case "image":
        return (
          <img
            className={className}
            src={imgSrc + IMAGE_SIZE[variant]}
            onError={() => setImgSrc(defaultImage)}
            alt="img"
          />
        );
      case "gif":
        return (
          <img
            className={className}
            src={imgSrc}
            onError={() => setImgSrc(defaultImage)}
            alt="img"
          />
        );
      default:
        return null;
    }
  };

  return <>{res}</>;
};

export default Log;
