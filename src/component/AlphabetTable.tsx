import { Box, Typography } from "@mui/material";
import React from "react";
import { alphabets } from "../proverb/proverb";
import Table from "./Table";

const AlphabetTable = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 20,
        height: "70vh",
      }}
    >
      <Box sx={{ backgroundColor: "secondary.main" }}>
        <Typography variant="h6" sx={{ textAlign: "center", mt: 4 }}>
          အက္ခရာအားနှိပ်၍ စကားပုံများအားဖတ်ရှုပါ။
        </Typography>
        <Box
          sx={{
            maxWidth: "400px",
            display: "flex",
            justifyContent: " center",
            flexWrap: "wrap",

            p: 5,
          }}
        >
          {alphabets.map((m) => (
            <Table key={m.TitleId} title={m.TitleName} id={m.TitleId} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AlphabetTable;
