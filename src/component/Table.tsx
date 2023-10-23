import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
interface prop {
  title: string;
  id: number;
}
const Table = ({ title, id }: prop) => {
  return (
    <Link to={`/alphabets/${id}`} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button sx={{ m: 1 }} variant="contained">
          <Typography color={"#0F0F0F"}> {title} </Typography>
        </Button>
      </Box>
    </Link>
  );
};

export default Table;
