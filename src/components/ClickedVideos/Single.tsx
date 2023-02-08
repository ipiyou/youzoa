import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { SettingType } from "../../App";

interface PropsType {
  src: string;
  user: SettingType;
}

function SingleVideo({ src, user }: PropsType) {
  const {} = user;
  return (
    <_Video
      id="ytplayer"
      width="720"
      height="405"
      src={"https://www.youtube.com/embed/" + src}
    />
  );
}

const _Video = styled.iframe`
  border: 0;
  outline: 0;
  width: 100%;
  height: 100%;
`;

export default SingleVideo;
