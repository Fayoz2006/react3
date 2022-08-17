import React from "react";
import "./Layout.css";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <form>
          <Input
            padding="5px 10px 10px 10px"
            color="#fff"
            fontSize="20px"
            placeholder="Search for something..."
          />
          <Button width="100px" backgroundColor="#FEFEFE">
            Search
          </Button>
        </form>
      </header>
      {children}
    </>
  );
};

export default Layout;
