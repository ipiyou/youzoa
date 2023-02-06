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
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
      standard: {
        url: string;
        width: number;
        height: number;
      };
      maxres: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
};

export const getVideoList = async (id?: string) => {
  const { data } = await axios.get<ReSponse>(
    "https://www.googleapis.com/youtube/v3/search",
    {
      params: {
        part: "snippet",
        maxResult: 20,
        pageToken: id,
        chart: "mostPopular",
        key: "AIzaSyBd66kUj6GD5J7EVnH12mbn4shwYBlBqEU",
      },
    }
  );
  return data;
};
