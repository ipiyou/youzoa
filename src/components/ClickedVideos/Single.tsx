import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { SettingType } from "../../App";

interface PropsType {
  src?: string | undefined;
  user: SettingType;
}

function SingleVideo({ src, user }: PropsType) {
  const { bright } = user;
  return <_Video src={src} />;
}

const _Video = styled.iframe`
  border: 0;
  outline: 0;
  width: 100%;
  height: 100%;
`;

export default SingleVideo;
