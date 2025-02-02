import { Container } from "../_components/container/container";
import { Hero } from "../_components/hero/hero";

export default function Contact() {
  return (
    <main>
      <Hero
        title="Contact us"
        description="Happy customers are our first priority"
        image="/images/hero2.jpg"
      />
      <Container>
        <h2>Where to find us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Container>
    </main>
  );
}
