"use client";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { getLocalization, Lang } from "../../localization";
import { redirect, usePathname } from "next/navigation";

export function LangSelect({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    const locale = event.target.value as Lang;
    const updatedPathname = pathname.replace(/^\/(en|el)/, `/${locale}`);
    redirect(updatedPathname);
  };
  return (
    <FormControl
      size="small"
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        color: "inherit",
      }}
    >
      <InputLabel id="lang-select" style={{ color: "inherit" }}>
        {getLocalization("navigation.lang", lang)}
      </InputLabel>
      <Select
        style={{ color: "inherit" }}
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
