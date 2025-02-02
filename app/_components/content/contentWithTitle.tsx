import { Container } from "../container/container";

interface ContentWithTitleProps {
  title: string;
  content: string[];
}

export function ContentWithTitle(props: ContentWithTitleProps) {
  return (
    <Container>
      <h2>{props.title}</h2>
      {props.content.map((content, index) => (
        <p key={index}>{content}</p>
      ))}
    </Container>
  );
}
