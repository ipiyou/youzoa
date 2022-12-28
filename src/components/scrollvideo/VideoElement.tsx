import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { SettingType } from "../../App";

interface PropsType {
  user: SettingType;
}

interface RatioWidth {
  ratio: number;
}

type ImgRatio = RatioWidth & { src: string };

function VideoElement({ user }: PropsType) {
  const { bright, list } = user;
  const [width, height] = list.split(" X ");
  const ComponentWidth = Number(width);
  return (
    <_Wrapper ratio={ComponentWidth}>
      <MainImg src="" ratio={ComponentWidth} />
      <VideoIntro>
        <ProfileImg src="" ratio={ComponentWidth} />
        <Intro ratio={ComponentWidth}>
          <_IntroContent>
            {"Hello Worldasgagagagasgasgsagasgasasfafasfafasfcadas"}
          </_IntroContent>
          {`100만 조회수 3년전`}
        </Intro>
      </VideoIntro>
    </_Wrapper>
  );
}

const _Wrapper = styled.div<RatioWidth>`
  display: inline-block;
  ${({ ratio }) =>
    css`
      width: ${ratio}px;
      margin: ${ratio / 20}px ${ratio / 10}px;
    `}
`;

const MainImg = styled.div<ImgRatio>`
  width: 100%;
  height: ${({ ratio }) => ratio / 2}px;
  background: ${({ src, theme }) =>
    src ? css`url(${src})` : theme.draw.loadcolor};
`;

const VideoIntro = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
`;

const ProfileImg = styled.div<ImgRatio>`
  ${({ ratio }) =>
    css`
      width: ${ratio / 10}px;
      height: ${ratio / 10}px;
    `}
  background: ${({ src, theme }) =>
    src ? css`url(${src})` : theme.draw.loadcolor};
  border-radius: 120px;
  margin: 5% 5% 0 0;
`;

const Intro = styled.div<RatioWidth>`
  width: 85%;
  font-size: ${({ ratio }) => ratio / 20}px;
  color: ${({ theme }) => theme.font.fontcolor};
`;

const _IntroContent = styled.div`
  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export default VideoElement;
