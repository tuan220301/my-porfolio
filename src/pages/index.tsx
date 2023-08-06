import * as React from "react";
import type { PageProps } from "gatsby";
import Layout from "../Components/Base/Layout";
import NavbarComponent from "../Components/Base/Navbar";
import { Box } from "@chakra-ui/react";
import HomePage from "./Home";
import Scrollbars from "react-custom-scrollbars-2";
import HomeComponent from "../Components/Home";


const IndexPage: React.FC<PageProps> = () => {
  return (
    // <Box>
    <Layout>
      < HomeComponent />
    </Layout>
    // </Box>
  );
};

export default IndexPage;

