import useScreenshots from "../hooks/useScreenshots";
import { Image, SimpleGrid } from "@chakra-ui/react";
import IsLoadingSpinner from "./IsLoadingSpinner";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return <IsLoadingSpinner />;

  if (error) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {data?.results.map((file) => (
          <Image key={file.id} src={file.image} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
