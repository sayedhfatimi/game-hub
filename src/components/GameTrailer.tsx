import { Heading, Box } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";
import IsLoadingSpinner from "./IsLoadingSpinner";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return <IsLoadingSpinner />;

  if (error) throw error;

  const first = data?.results[0];
  return first ? (
    <Box padding={2}>
      <Heading fontSize="md" color="gray.600" marginBottom={2}>
        Trailers
      </Heading>
      <video src={first.data[480]} poster={first.preview} controls />
    </Box>
  ) : null;
};

export default GameTrailer;
