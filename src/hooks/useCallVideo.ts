import { getVideoList, ReSponse, YouTube } from "../apis/GetVideoList";
import { useInfiniteQuery } from "@tanstack/react-query";
import useResultMap from "./useResultMap";

const useCallVideo = (searchingWord = "default") => {
  const { Map, MapPush, currentMap } = useResultMap();
  let { isFetchingNextPage, fetchNextPage } = useInfiniteQuery(
    ["querykey"],
    ({ pageParam }) => getVideoList(searchingWord, pageParam),
    {
      onSuccess: (data) => {
        const LastIndex = data.pages.length - 1;
        MapPush(searchingWord, data.pages[LastIndex].items);
      },
      getNextPageParam: (lastPage) => lastPage.nextPageToken,
      staleTime: Infinity,
      cacheTime: 5000,
    }
  );

  const divideYoutube = () => {
    const items: YouTube[] = [...currentMap(searchingWord)];
    const LastElement = items.pop();

    return { items, LastElement };
  };
  console.log(Map);

  return {
    YouTube: divideYoutube(),
    isLoading: isFetchingNextPage,
    CallNextYoutube: fetchNextPage,
  };
};

export default useCallVideo;
