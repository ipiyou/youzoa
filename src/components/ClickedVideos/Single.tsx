import styled from "@emotion/styled";
import { SettingType } from "../../App";

interface PropsType {
  src: string | undefined;
  user: SettingType;
}

function SingleVideo({ src, user }: PropsType) {
  const { bright, video } = user;
  const [width, height] = video.split(" X ");
  return <_Video width={width} height={height} src={src} />;
}

const _Video = styled.iframe`
  background-color: gray;
`;

export default SingleVideo;
