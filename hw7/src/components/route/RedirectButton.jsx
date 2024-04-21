import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function RedirectButton() {
  return (
    <Link to="/">
      <Button variant="contained" disableElevation>
        Back to home
      </Button>
    </Link>
  );
}
