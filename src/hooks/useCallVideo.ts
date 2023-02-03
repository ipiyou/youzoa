import { getVideoList, ReSponse, YouTube } from "../apis/GetVideoList";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export type YouTubeType = {
  items: (YouTube | undefined)[];
  LastElement: YouTube | undefined;
};

const useCallVideo = () => {
  const [YouTube, setYouTube] = useState<YouTubeType | null>(null);
  let { isLoading } = useQuery(["querykey"], () => getVideoList(), {
    onSuccess: (data) => concatYoutubes(data),
  });
  let NextPageToken: string;

  const CallNextYoutube = () => {
    const { isLoading: currentLoad } = useQuery(
      ["querykey"],
      () => getVideoList(NextPageToken),
      {
        onSuccess: (data) => concatYoutubes(data),
      }
    );
    isLoading = currentLoad;
  };

  const concatYoutubes = ({ items, nextPageToken }: ReSponse) => {
    if (!YouTube) return;
    setYouTube({
      LastElement: items.pop(),
      items: [...YouTube.items, YouTube.LastElement, ...items],
    });
    NextPageToken = nextPageToken;
  };

  return { YouTube, isLoading, CallNextYoutube };
};

export default useCallVideo;
