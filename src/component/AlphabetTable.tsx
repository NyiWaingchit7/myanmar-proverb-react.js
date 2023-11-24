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
        my: {xs :'auto', md :'auto'},
       height : '100vh',
       backgroundColor : {xs : 'secondary.main'}
      }}
    >
      <Box sx={{ backgroundColor: "secondary.main", p : 2 }}>
        <Typography variant="h6" sx={{ textAlign: "center", mt: 4, backgroundColor : 'primary.main', p:2, borderRadius : 3 }}>
          အက္ခရာအားနှိပ်၍ စကားပုံများအားဖတ်ရှုပါ။
        </Typography>
        <Box
          sx={{
            maxWidth: {xs : '100%',md :"400px"},
            display: "flex",
            justifyContent: " center",
            flexWrap: "wrap",
            p: 2,
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
