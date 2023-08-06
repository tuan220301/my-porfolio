import * as React from "react";
import type { PageProps } from "gatsby";
import Layout from "../Components/Base/Layout";
import NavbarComponent from "../Components/Base/Navbar";
import { Box } from "@chakra-ui/react";
import HomePage from "./Home";


const IndexPage: React.FC<PageProps> = () => {
  return (
    // <Layout>
    < HomePage />
    // </Layout>
  );
};

export default IndexPage;

