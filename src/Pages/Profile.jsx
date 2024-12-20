import React from "react";
import { Container } from "./Components/styles/Container.style";
import { ThemeProvider } from "styled-components";
import "../Pages/Components/ProfileCSS.scss";
const theme = {
  colors: {
    profile: {
      container: "yellow",
      color: "black",
    },
  },
};

export const Profile = () => {
  return (
    <div className="Main--t">
      <ThemeProvider theme={theme}>
        <Container bg="red">
          <h1>Hey</h1>
          <button>Test</button>
        </Container>
      </ThemeProvider>
    </div>
  );
};
