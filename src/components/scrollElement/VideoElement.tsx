import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { YouTube } from "../../apis/GetVideoList";
import { SettingType } from "../../App";

interface PropsType {
  user: SettingType;
  youtube: YouTube;
}

interface RatioWidth {
  ratio: number;
}

type ImgRatio = RatioWidth & { src: string };

function VideoElement({ user, youtube }: PropsType) {
  const { id, snippet } = youtube as YouTube;
  const [width] = user.list.split(" X ");
  const ComponentWidth = Number(width);
  return (
    <Link to={"/watch/" + id.videoId}>
      <_Wrapper ratio={ComponentWidth}>
        <MainImg src={snippet.thumbnails.medium.url} ratio={ComponentWidth} />
        <_VideoIntro>
          <_Intro ratio={ComponentWidth}>{youtube?.snippet.title}</_Intro>
        </_VideoIntro>
      </_Wrapper>
    </Link>
  );
}

const _Wrapper = styled.div<RatioWidth>`
  display: inline-block;
  cursor: pointer;
  ${({ ratio }) =>
    css`
      width: ${ratio}px;
      margin: ${ratio / 20}px ${ratio / 10}px;
    `}
`;

const MainImg = styled.img<ImgRatio>`
  width: 100%;
  height: ${({ ratio }) => ratio / 2}px;
`;

const _VideoIntro = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
`;

const _Intro = styled.div<RatioWidth>`
  font-size: ${({ ratio }) => ratio / 20}px;
  color: ${({ theme }) => theme.font.fontcolor};
  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export default VideoElement;
