import { Box, Heading } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";
import IsLoadingSpinner from "./IsLoadingSpinner";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  const images: ReactImageGalleryItem[] | { original: string }[] = [];

  data?.results.map((file) => images.push({ original: file.image }));

  if (isLoading) return <IsLoadingSpinner />;

  if (error) throw error;

  return (
    <>
      <Box padding={2}>
        <Heading fontSize="md" color="gray.600" marginBottom={2}>
          Screenshots
        </Heading>
        <ImageGallery
          items={images}
          showBullets={true}
          showPlayButton={false}
        />
      </Box>
    </>
  );
};

export default GameScreenshots;
