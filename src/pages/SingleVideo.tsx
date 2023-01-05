import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { SettingType } from "../App";
import SingleVideo from "../components/ClickedVideos/Single";
import FloatActiiveComponent from "../components/FloatActiveComponent";
import { VideoSize } from "../components/header";

interface PropsType {
  user: SettingType;
}

export type SinglePropsType = {
  src: string | undefined;
};

function WatchSingle(props: PropsType) {
  const { src } = useParams();
  const [width, height] = VideoSize(props.user.video);
  return (
    <_Wrapper>
      <FloatActiiveComponent
        width={width}
        height={height}
        initXY={[0, 0]}
        minXY={[250, 0]}
        maxXY={[1660, 780]}
        childrenElement={[SingleVideo, { ...props, src }]}
      />
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.draw.background};
`;

export default WatchSingle;
