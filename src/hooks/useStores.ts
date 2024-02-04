import useData from "./useData";

interface Stores {
  id: number;
  store_id: number;
  game_id: number;
  url: string;
}

const useStores = (slug: string) =>
  useData<Stores>("/games/" + slug + "/stores");

export default useStores;
