import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { SettingType } from "../../App";

interface PropsType {
  src?: string | undefined;
  user: SettingType;
  onMouseDown: (fix: React.MouseEvent<HTMLIFrameElement, MouseEvent>) => void;
}

function SingleVideo({ src, user, onMouseDown }: PropsType) {
  const { bright } = user;
  return <_Video src={src} onMouseDown={onMouseDown} />;
}

const _Video = styled.iframe`
  background-color: gray;
  width: 120px;
  height: 120px;
`;

export default SingleVideo;
