import styled from "@emotion/styled";
import { SettingType } from "../../App";
import { VideoSize } from "../header";

interface PropsType {
  src?: string | undefined;
  user: SettingType;
  onMouseDown: (fix: React.MouseEvent<HTMLIFrameElement, MouseEvent>) => void;
}

function SingleVideo({ src, user, onMouseDown }: PropsType) {
  const { bright, video } = user;
  const [width, height] = VideoSize(video);
  return <_Video width={width} height={height} src={src} />;
}

const _Video = styled.iframe`
  background-color: gray;
`;

export default SingleVideo;
