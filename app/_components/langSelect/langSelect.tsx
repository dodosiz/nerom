"use client";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useLang, useLocalized } from "../../localization";

export function LangSelect() {
  const lang = useLang();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    const newLang = event.target.value as "en" | "el";
    window.localStorage.setItem("lang", newLang);
    window.location.reload();
  };
  return (
    <FormControl
      size="small"
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
      }}
    >
      <InputLabel id="lang-select">
        {useLocalized("navigation.lang", lang)}
      </InputLabel>
      <Select
        labelId="lang-select"
        id="demo-simple-select"
        value={lang}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={"en"}>English</MenuItem>
        <MenuItem value={"el"}>Ελληνικά</MenuItem>
      </Select>
    </FormControl>
  );
}
