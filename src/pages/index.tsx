import * as React from "react";
import type { PageProps } from "gatsby";
import Layout from "../Components/Base/Layout";
import NavbarComponent from "../Components/Base/Navbar";
import { Box } from "@chakra-ui/react";
import HomePage from "./Home";
import Scrollbars from "react-custom-scrollbars-2";


const IndexPage: React.FC<PageProps> = () => {
  return (
    // <Layout>
    <Scrollbars style={{ width: '100%', height: '100vh' }}>
      < HomePage />
    </Scrollbars>
    // </Layout>
  );
};

export default IndexPage;

