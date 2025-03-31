import { Button } from "@mui/material";
import { Container } from "../container/container";
import { Lang } from "../../localization";
import Link from "next/link";

interface ContentWithTitleProps {
  title: string;
  content: string[];
  actionButtonLabel?: string;
  actionButtonLink?: string;
  lang: Lang;
}

export function ContentWithTitle(props: ContentWithTitleProps) {
  const link = props.actionButtonLink;
  return (
    <Container>
      <h2>{props.title}</h2>
      {props.content.map((content, index) => (
        <p key={index}>{content}</p>
      ))}
      {link && (
        <Link href={`/${props.lang}/${link}`} passHref>
          <Button
            style={{ marginTop: "10px" }}
            color="inherit"
            variant="outlined"
          >
            {props.actionButtonLabel}
          </Button>
        </Link>
      )}
    </Container>
  );
}
