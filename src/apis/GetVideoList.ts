import axios from "axios";

export interface ReSponse {
  nextPageToken: string;
  items: YouTube[];
}

export type YouTube = {
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
};

export const getVideoList = async (searchingWord?: string, id?: string) => {
  const { data } = await axios.get<ReSponse>(
    "https://www.googleapis.com/youtube/v3/search",
    {
      params: {
        part: "snippet",
        maxResults: 20,
        pageToken: id,
        q: searchingWord,
        chart: "mostPopular",
        key: "add your api key",
      },
    }
  );
  return data;
};
