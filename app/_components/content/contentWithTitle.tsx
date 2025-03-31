"use client";
import { Button } from "@mui/material";
import { Container } from "../container/container";
import { Lang } from "../../localization";
import { useRouter } from "next/navigation";

interface ContentWithTitleProps {
  title: string;
  content: string[];
  actionButtonLabel?: string;
  actionButtonLink?: string;
  lang: Lang;
}

export function ContentWithTitle(props: ContentWithTitleProps) {
  const router = useRouter();
  const goToLink = (link: string) => {
    router.push(`/${props.lang}/${link}`);
  };
  const link = props.actionButtonLink;
  return (
    <Container>
      <h2>{props.title}</h2>
      {props.content.map((content, index) => (
        <p key={index}>{content}</p>
      ))}
      {link && (
        <Button
          style={{ marginTop: "10px" }}
          color="inherit"
          variant="outlined"
          onClick={() => goToLink(link)}
        >
          {props.actionButtonLabel}
        </Button>
      )}
    </Container>
  );
}
