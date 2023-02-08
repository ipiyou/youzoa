import styled from "@emotion/styled";
import { useState, useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import { ReSponse, YouTube } from "../apis/GetVideoList";
import { SettingType } from "../App";
import LoadingSvg from "../components/scrollElement/LoadingSvg";
import VideoElement from "../components/scrollElement/VideoElement";
import useCallVideo from "../hooks/useCallVideo";

interface PropsType {
  user: SettingType;
}

function ScrollPage({ user }: PropsType) {
  const [observeElement, setObserving] = useState<HTMLDivElement | null>(null);
  const { id } = useParams();
  const { YouTube, isLoading, CallNextYoutube } = useCallVideo(id);
  console.log(useParams());
  const observeCallBack = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) CallNextYoutube();
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observeCallBack, {
      threshold: 0.5,
    });
    if (observeElement) observer.observe(observeElement);
    return () => observer.disconnect();
  }, [observeElement]);

  return (
    <_Wrapper>
      {YouTube && YouTube.LastElement && (
        <>
          {YouTube.items.map((youtube, idx) => (
            <VideoElement key={idx} user={user} youtube={youtube} />
          ))}
          <_ObserveElement ref={setObserving}>
            <VideoElement user={user} youtube={YouTube.LastElement} />
          </_ObserveElement>
        </>
      )}
      {isLoading && <LoadingSvg />}
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.draw.scrollTrack};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.draw.scrollBar};
  }
  background-color: ${({ theme }) => theme.draw.background};
  height: 100%;
`;

const _ObserveElement = styled.div`
  display: inline-block;
`;

export default memo(ScrollPage);
