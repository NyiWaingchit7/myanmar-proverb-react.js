import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { theme } from "./theme";
import { ThemeProvider } from "@emotion/react";

test("renders learn react link", () => {
  render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
