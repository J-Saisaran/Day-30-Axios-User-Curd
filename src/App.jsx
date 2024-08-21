import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import ListPages from "./Components/ListPage";
import { UserContextProvider } from "./Components/context/usercontext";
import { Box, Container } from "@mui/material";

function App() {
  return (
    <Box className="App">
      <Header />
      <UserContextProvider>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ListPages" element={<ListPages />} />
          </Routes>
        </Container>
      </UserContextProvider>
    </Box>
  );
}

export default App;
