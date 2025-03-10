"use client";
import { Container } from "../_components/container/container";
import { ContentWithTitle } from "../_components/content/contentWithTitle";
import { Hero } from "../_components/hero/hero";
import { useLang, useLocalized } from "../localization";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BusinessIcon from "@mui/icons-material/Business";
import { ContactForm } from "../_components/contactForm/contactForm";

export default function Contact() {
  const lang = useLang();

  return (
    <main>
      <Hero
        title={useLocalized("contact.hero.title", lang)}
        description={useLocalized("contact.hero.description", lang)}
        image="/images/hero2.jpg"
      />
      <ContentWithTitle
        title={useLocalized("contact.title", lang)}
        content={[useLocalized("contact.content", lang)]}
      />
      <Container>
        <h2>{useLocalized("contact.contactForm", lang)}</h2>
        <ContactForm />
        <h2>{useLocalized("contact.contactDetails", lang)}</h2>
        <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <EmailIcon fontSize="small" />
          <a href="mailto:neromebs@gmail.com">neromebs@gmail.com</a>
        </p>
        <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <LocalPhoneIcon fontSize="small" />
          <a href="tel:+306944322781">+30 694 432 2781</a>
        </p>
        <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <LocalPhoneIcon fontSize="small" />
          <a href="tel:+306955172427">+30 695 517 2427</a>
        </p>
        <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <LocalPhoneIcon fontSize="small" />
          <a href="tel:+306972239662">+30 697 223 9662</a>
        </p>
        <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <BusinessIcon fontSize="small" />
          <span>{useLocalized("contact.address", lang)}</span>
        </p>
      </Container>
    </main>
  );
}
