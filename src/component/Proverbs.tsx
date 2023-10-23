import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ProverbsText } from "../proverb/proverb";
import Explaination from "./Explaination";

const Proverbs = () => {
  const id = useParams().id;
  const proverbsDetail = ProverbsText.filter((p) => p.TitleId === Number(id));
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState({ name: "", description: "" });
  return (
    <Box sx={{ bgcolor: "primary.main", minHeight: "100vh", p: 3 }}>
      {proverbsDetail.length ? (
        proverbsDetail.map((x, index) => (
          <Box sx={{ cursor: "pointer" }} key={x.TitleId}>
            <Button
              onClick={() => {
                setOpen(true);
                setDescription({
                  name: x.ProverbName,
                  description: x.ProverbDesp,
                });
              }}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemText
                    primary={`${index + 1}. ${x.ProverbName} ။`}
                    sx={{ color: "info.main" }}
                  />
                </ListItem>
              </List>
            </Button>
          </Box>
        ))
      ) : (
        <Typography variant="h5" sx={{ textAlign: "center", mt: 10 }}>
          {" "}
          ဤအက္ခရာနဲ့သက်ဆိုင်သောစကားပုံမရှိပါ ။
        </Typography>
      )}
      <Explaination
        open={open}
        setOpen={setOpen}
        title={description.name}
        description={description.description}
      />
    </Box>
  );
};

export default Proverbs;
