/* eslint-disable camelcase */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CustomVideoPlayer from "./CustomVideoPlayer";
import { PINATA_PRIMARY_IMAGE_SIZE, PINATA_SECONDARY_IMAGE_SIZE, default_image } from "./util/constants";

import Skeleton from "./Skeleton";

const IMAGE_SIZE: any = {
  primary: PINATA_PRIMARY_IMAGE_SIZE,
  secondary: PINATA_SECONDARY_IMAGE_SIZE,
  full: "",
};

const VideoWrapper = styled.div`
  position: relative;
  height: 100%;
`;

const VideoContainer = styled.div<{ show: boolean }>`
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  height: ${({ show }) => (show ? "100%" : "0 !important")};
`;

const Image = ({ className = "", src = "", defaultImage = default_image, variant = "primary" }) => {
  console.log("sdfsdfsdfds");
  const [imgSrc, setImgSrc] = useState(default_image);
  console.log("==========");
  const [type, setType] = useState("");
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
  const getWholeComponent = () => {
    switch (type) {
      case "video":
        return (
          <VideoWrapper>
            {loading && <Skeleton className={className} />}
            <VideoContainer show={!loading} className={className}>
              <CustomVideoPlayer
                src={`${imgSrc}?stream=true`}
                onCanPlayThrough={() => {
                  setLoading(false);
                }}
              />
            </VideoContainer>
          </VideoWrapper>
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
        return <img className={className} src={imgSrc} onError={() => setImgSrc(defaultImage)} alt="img" />;
      default:
        return null;
    }
  };
  return <>{getWholeComponent()}</>;
};

export default Image;
