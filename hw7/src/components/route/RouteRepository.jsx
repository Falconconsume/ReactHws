import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useParams } from "react-router-dom";
import RouteRepositoryAnimation from "./RouteRepositoryAnimation";
import RedirectButton from "./RedirectButton";
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";
import FaceIcon from "@mui/icons-material/Face";

function RouteRepository() {
  const [currentRepos, setCurrentRepos] = useState({});

  const { repositoryId } = useParams();

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://api.github.com/repositories/${repositoryId}`
      );
      const json = await res.json();
      setCurrentRepos(json);
      console.log(currentRepos);
    })();
  }, [repositoryId, currentRepos]);

  return (
    <>
      {currentRepos.id > 0 ? (
        <Card sx={{ width: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={currentRepos.owner.avatar_url}
              alt="green iguana"
            />
            <CardContent
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Typography gutterBottom variant="h5" component="div">
                {currentRepos.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {currentRepos.description}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <StarIcon /> {currentRepos.stargazers_count}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <PeopleIcon /> {currentRepos.subscribers_count}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <FaceIcon /> {currentRepos.watchers_count}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              href={currentRepos.html_url}
              target="_blank"
            >
              Go to github
            </Button>
          </CardActions>
        </Card>
      ) : (
        <RouteRepositoryAnimation />
      )}
      <RedirectButton />
    </>
  );
}

export default RouteRepository;
