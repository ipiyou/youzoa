import { getVideoList, ReSponse, YouTube } from "../apis/GetVideoList";
import { useInfiniteQuery } from "@tanstack/react-query";

const useCallVideo = () => {
  let { data, isLoading, fetchNextPage } = useInfiniteQuery(
    ["querykey"],
    ({ pageParam }) => getVideoList(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.nextPageToken,
    }
  );

  const divideYoutube = (data: ReSponse[] | undefined) => {
    if (!data) return;
    const items: YouTube[] = [];
    data.forEach((e) => items.push(...e.items));

    const LastElement = items.pop();

    return { items, LastElement };
  };

  return {
    YouTube: divideYoutube(data?.pages),
    isLoading,
    CallNextYoutube: fetchNextPage,
  };
};

export default useCallVideo;
