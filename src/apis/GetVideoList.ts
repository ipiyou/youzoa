import axios from "axios";

export interface ReSponse {
  nextPageToken: string;
  items: (YouTube | undefined)[];
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
    "https://www.googleapis.com/youtube/v3/search"
  );
  return data;
};
