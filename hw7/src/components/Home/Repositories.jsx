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

function Repositories() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const clickedLanguage = useSelector(
    (state) => state.gitDashboard.clickedLanguage
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (repos.length > 0) {
      setLoading(true);
    }
  }, [repos]);

  useEffect(() => {
    (async () => {
      setLoading(false);
      const res = await fetch(
        `https://api.github.com/search/repositories?q=stars:>1000+language:${clickedLanguage}&sort=stars&order=desc&type=Repositories`
      );
      const json = await res.json();
      setRepos(json.items);
      setLoading(true);
      console.log(json.items);
    })();
  }, [clickedLanguage]);

  const handleClickedRepository = useCallback(
    (id) => {
      dispatch(setClickedRepository(id));
    },
    [dispatch]
  );

  return (
    <ul className="flex">
      {!loading ? (
        <RepositoriesAnimation loading={loading} repos={repos} />
      ) : repos.length > 0 ? (
        repos.map((repository, index) => {
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
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleClickedRepository(repository.id)}
                  >
                    Learn more
                  </Button>
                </Link>
              </CardActions>
            </Card>
          );
        })
      ) : (
        <Alert severity="warning">
          Repositories for {clickedLanguage} not found 😔
        </Alert>
      )}
    </ul>
  );
}

export default Repositories;
