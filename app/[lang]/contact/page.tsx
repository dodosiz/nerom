import { Container } from "../../_components/container/container";
import { ContentWithTitle } from "../../_components/content/contentWithTitle";
import { Hero } from "../../_components/hero/hero";
import { extractLang, getLocalization, Lang } from "../../localization";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BusinessIcon from "@mui/icons-material/Business";
import { ContactForm } from "../../_components/contactForm/contactForm";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}): Promise<Metadata> {
  const lang = await extractLang(params);
  const title = `${getLocalization("contact.hero.title", lang)} - NEROM`;
  const description = getLocalization("contact.content", lang);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ["/images/hero2.jpg"],
    },
    twitter: {
      title,
      description,
      images: ["/images/hero2.jpg"],
    },
  };
}

export default async function Contact({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const lang = await extractLang(params);
  return (
    <main>
      <Hero
        title={getLocalization("contact.hero.title", lang)}
        description={getLocalization("contact.hero.description", lang)}
        image="/images/hero2.jpg"
      />
      <ContentWithTitle
        lang={lang}
        title={getLocalization("contact.title", lang)}
        content={[getLocalization("contact.content", lang)]}
      />
      <Container>
        <h2>{getLocalization("contact.contactForm", lang)}</h2>
        <ContactForm lang={lang} />
        <h2>{getLocalization("contact.contactDetails", lang)}</h2>
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
          <span>{getLocalization("contact.address", lang)}</span>
        </p>
      </Container>
    </main>
  );
}
