import { Hero } from "../_components/hero/hero";
import { GridWithContent } from "../_components/content/gridWithContent";
import { ContentWithTitle } from "../_components/content/contentWithTitle";
import { extractLang, getLocalization, Lang } from "../localization";
import { BUSINESS, ENGINEERING } from "../constants";
import { Metadata } from "next";
import {
  OrganizationStructuredData,
  LocalBusinessStructuredData,
  ServiceStructuredData,
} from "../_components/structuredData/structuredData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}): Promise<Metadata> {
  const lang = await extractLang(params);
  const title = "NEROM Engineering & Business Services";
  const description = getLocalization("whoWeAre.first", lang);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ["/images/hero.jpg"],
    },
    twitter: {
      title,
      description,
      images: ["/images/hero.jpg"],
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const lang = await extractLang(params);
  return (
    <main>
      <OrganizationStructuredData lang={lang} />
      <LocalBusinessStructuredData />
      <ServiceStructuredData lang={lang} />
      <Hero
        title={getLocalization("hero.title", lang)}
        description={getLocalization("hero.description", lang)}
        image="/images/hero.jpg"
      />
      <ContentWithTitle
        lang={lang}
        title={getLocalization("whoWeAre.title", lang)}
        content={[
          getLocalization("whoWeAre.first", lang),
          getLocalization("whoWeAre.second", lang),
          getLocalization("whoWeAre.third", lang),
        ]}
      />
      <div style={{ background: "var(--gray-light)" }}>
        <GridWithContent
          title={getLocalization("expertise.title", lang)}
          size={{ xs: 12, md: 6 }}
          lang={lang}
          items={[
            {
              id: ENGINEERING,
              title: getLocalization("expertise.engineering.title", lang),
              description: getLocalization(
                "expertise.engineering.description",
                lang
              ),
            },
            {
              id: BUSINESS,
              title: getLocalization("expertise.business.title", lang),
              description: getLocalization(
                "expertise.business.description",
                lang
              ),
            },
          ]}
        />
      </div>
    </main>
  );
}
