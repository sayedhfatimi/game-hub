import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";

interface Stores {
  id: number;
  store_id: number;
  game_id: number;
  url: string;
}

const useStores = (slug: string) =>
  useQuery({
    queryKey: ["stores"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Stores>>("/games/" + slug + "/stores")
        .then((res) => res.data),
  });

export default useStores;
