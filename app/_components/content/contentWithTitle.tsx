import { Container } from "../container/container";

interface ContentWithTitleProps {
  title: string;
  content: string;
}

export function ContentWithTitle(props: ContentWithTitleProps) {
  return (
    <Container>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </Container>
  );
}
