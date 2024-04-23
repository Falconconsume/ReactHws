import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import thunks from "../../store/thunks";

function RouteRepository() {
  const { repository } = useSelector((state) => state.repository);
  const dispatch = useDispatch();

  const { repositoryId } = useParams();

  useEffect(() => {
    dispatch(thunks.fetchRepository(repositoryId));
  }, [repositoryId]);

  return (
    <>
      {repository.id > 0 ? (
        <Card sx={{ width: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={repository.owner.avatar_url}
              alt="green iguana"
            />
            <CardContent
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Typography gutterBottom variant="h5" component="div">
                {repository.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {repository.description}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <StarIcon /> {repository.stargazers_count}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <PeopleIcon /> {repository.subscribers_count}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <FaceIcon /> {repository.watchers_count}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              href={repository.html_url}
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
