import { useQuery } from "@tanstack/react-query";
import { Store } from "../entities/Store";
import APIClient from "../services/api-client";

const useStores = (slug: string) => {
  const apiClient = new APIClient<Store>(`/games/${slug}/stores`);

  return useQuery({
    queryKey: ["stores", slug],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useStores;
