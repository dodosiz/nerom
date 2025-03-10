import { Button } from "@mui/material";
import { Container } from "../container/container";

interface ContentWithTitleProps {
  title: string;
  content: string[];
  actionButtonLabel?: string;
  actionButtonLink?: string;
}

export function ContentWithTitle(props: ContentWithTitleProps) {
  const goToLink = (link: string) => {
    window.location.href = `/${link}`;
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
