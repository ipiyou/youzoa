import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import SingleVideo from "../components/ClickedVideos/Single";

function WatchSingle() {
  const { id } = useParams();
  return <_Wrapper>{id && <SingleVideo src={id} />}</_Wrapper>;
}

const _Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.draw.background};
`;

export default WatchSingle;
