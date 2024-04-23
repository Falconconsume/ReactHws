import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import RepositoriesAnimation from "./RepositoriesAnimation";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";
import thunks from "../../../store/thunks";

function Repositories() {
  const { activeLanguage } = useSelector((state) => state.languages);
  const { repositories, isLoading } = useSelector(
    (state) => state.repositories
  );

  const dispatch = useDispatch();

  useEffect(() => {
    activeLanguage && dispatch(thunks.fetchRepositories(activeLanguage));
  }, [activeLanguage]);

  return (
    <ul className="flex">
      {isLoading ? (
        <RepositoriesAnimation loading={isLoading} repos={repositories} />
      ) : repositories.length > 0 ? (
        repositories.map((repository, index) => {
          return (
            <Card key={index} sx={{ width: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={repository.owner.avatar_url}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {repository.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {repository.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={`/repository/${repository.id}`}>
                  <Button size="small" color="primary">
                    Learn more
                  </Button>
                </Link>
              </CardActions>
            </Card>
          );
        })
      ) : (
        <Alert severity="warning">
          Repositories for {activeLanguage} not found 😔
        </Alert>
      )}
    </ul>
  );
}

export default Repositories;
