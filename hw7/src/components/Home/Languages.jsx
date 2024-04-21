import React, { useCallback, useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AnimationLanguage from "./AnimationLanguage.jsx";
import { useDispatch } from "react-redux";
import { setClickedLanguage } from "../../store/slice";

const Languages = () => {
  const dispatch = useDispatch();
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);

  const handleChange = (event, newValue) => {
    setScrollValue(newValue);
  };

  useEffect(() => {
    (async function fetchData() {
      const res = await fetch(
        "https://api.github.com/repos/microsoft/vscode/languages"
      );
      const json = await res.json();
      console.log(json);
      setLanguages(Object.keys(json));
    })();
  }, []);

  useEffect(() => {
    if (languages.length > 0) {
      setLoading(true);
    }
  }, [languages]);

  const handleChoosingLanguage = useCallback(
    (language) => {
      dispatch(setClickedLanguage(language));
    },
    [dispatch]
  );

  return (
    <div>
      {loading ? (
        <Box
          sx={{ maxWidth: { xs: 2000, sm: 1800 }, bgcolor: "background.paper" }}
        >
          <Tabs
            value={scrollValue}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {languages.map((language, index) => (
              <Tab
                onClick={() => handleChoosingLanguage(language)}
                key={index}
                label={language}
              />
            ))}
          </Tabs>
        </Box>
      ) : (
        <AnimationLanguage loading={loading} languages={languages} />
      )}
    </div>
  );
};

export default Languages;
