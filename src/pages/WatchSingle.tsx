import styled from "@emotion/styled";
import { useLocation, useParams } from "react-router-dom";
import { SettingType } from "../App";
import SingleVideo from "../components/ClickedVideos/Single";

interface PropsType {
  user: SettingType;
}

function WatchSingle({ user }: PropsType) {
  const { id } = useParams();
  return <_Wrapper>{id && <SingleVideo src={id} user={user} />}</_Wrapper>;
}

const _Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.draw.background};
`;

export default WatchSingle;
