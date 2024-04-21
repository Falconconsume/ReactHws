import React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";

const RepositoriesAnimation = ({ loading, repos = [] }) => {
  return (
    <div>
      <Grid
        container
        wrap="wrap"
        sx={{ display: "flex", gap: 10, justifyContent: "center" }}
      >
        {(loading ? Array.from(new Array(4)) : repos).map((item, index) => (
          <Box
            key={index}
            sx={{
              width: 310,
              marginRight: 0.5,
              my: 5,
              boxShadow: 1,
              borderRadius: 1,
            }}
          >
            <Skeleton variant="rectangular" width={300} height={150} />
            <Box sx={{ p: 1 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Box>
        ))}
      </Grid>
    </div>
  );
};

export default RepositoriesAnimation;
