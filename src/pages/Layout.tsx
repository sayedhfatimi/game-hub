import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";
import Breadcrumbs from "../components/Breadcrumbs";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box paddingX={5}>
        <Breadcrumbs />
      </Box>
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
