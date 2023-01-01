import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { SettingType } from "../App";
import SingleVideo from "../components/ClickedVideos/Single";

interface PropsType {
  user: SettingType;
}

function WatchSingle(props: PropsType) {
  const { parma } = useParams();
  return (
    <_Wrapper>
      <SingleVideo src={parma} {...props} />
    </_Wrapper>
  );
}

const _Wrapper = styled.div``;

export default WatchSingle;
