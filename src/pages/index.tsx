import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import NavbarComponent from "../Components/Base/Navbar";



const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <NavbarComponent />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page hello</title>;
