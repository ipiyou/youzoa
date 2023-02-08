import { YouTube } from "../apis/GetVideoList";
import { useState } from "react";

interface MapType {
  Map: {
    name: string;
    result: YouTube[];
  }[];
  nameMap: string[];
}

const useResultMap = () => {
  const [Maps, setMap] = useState<MapType>({
    Map: [],
    nameMap: [],
  });
  const { Map, nameMap } = Maps;
  const keywordSearch = (keyword: string) => nameMap.includes(keyword);
  const mapIndex = (keyword: string) => nameMap.indexOf(keyword);

  const mapPush = (keyword: string, arg: YouTube[]) => {
    const currentItem = Map[mapIndex(keyword)];
    if (keywordSearch(keyword)) currentItem.result.push(...arg);
    else
      setMap({
        Map: [...Map, { name: keyword, result: [...arg] }],
        nameMap: [...nameMap, keyword],
      });
  };

  const currentMap = (keyword: string) =>
    keywordSearch(keyword) ? Map[mapIndex(keyword)].result : [];
  return { Map, mapPush, currentMap };
};

export default useResultMap;
