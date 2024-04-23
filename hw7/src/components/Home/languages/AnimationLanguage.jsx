import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function AnimationLanguage() {
  return (
    <Box
      sx={{
        display: "grid",
        gridAutoFlow: "row",
        gridTemplateColumns: "repeat(6, 0.5fr)",
        gridTemplateRows: "repeat(2, 10px)",
        gap: 2,
        height: 100,
        textAlign: "center",
        margin: 4,
        flexWrap: "wrap",
      }}
    >
      <Skeleton sx={{ width: 125, height: 70 }} />
      <Skeleton sx={{ width: 125, height: 70 }} />
      <Skeleton sx={{ width: 125, height: 70 }} />
      <Skeleton sx={{ width: 125, height: 70 }} />
      <Skeleton sx={{ width: 125, height: 70 }} />
      <Skeleton sx={{ width: 125, height: 70 }} />
    </Box>
  );
}

export default AnimationLanguage;
