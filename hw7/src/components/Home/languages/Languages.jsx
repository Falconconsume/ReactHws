import React, { useCallback, useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AnimationLanguage from "./AnimationLanguage.jsx";
import { useDispatch, useSelector } from "react-redux";
import thunks from "../../../store/thunks.js";
import { setActiveLanguage } from "../../../store/languagesSlice.js";

const Languages = () => {
  let { languages, isLoading } = useSelector((state) => state.languages);
  const dispatch = useDispatch();
  const [scrollValue, setScrollValue] = useState(0);

  const handleChange = (event, newValue) => {
    setScrollValue(newValue);
  };

  useEffect(() => {
    dispatch(thunks.fetchLanguages());
  }, [dispatch]);

  const handleChoosingLanguage = (language) => {
    dispatch(setActiveLanguage(language));
  };

  return (
    <div>
      {isLoading ? (
        <AnimationLanguage loading={isLoading} languages={languages} />
      ) : (
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
      )}
    </div>
  );
};

export default Languages;
