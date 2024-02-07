import { AbsoluteCenter, Box, Spinner } from "@chakra-ui/react";

const IsLoadingSpinner = () => {
  return (
    <Box position="relative">
      <AbsoluteCenter axis="both">
        <Spinner />
      </AbsoluteCenter>
    </Box>
  );
};

export default IsLoadingSpinner;
