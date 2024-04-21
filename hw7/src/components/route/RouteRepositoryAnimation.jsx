import React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function RouteRepositoryAnimation() {
  return (
    <Box
      sx={{
        width: 310,
        marginRight: 0.5,
        my: 5,
        boxShadow: 1,
        borderRadius: 1,
        marginTop: 1,
      }}
    >
      <Skeleton variant="rectangular" width={300} height={150} />
      <Box sx={{ p: 1 }}>
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
    </Box>
  );
}
