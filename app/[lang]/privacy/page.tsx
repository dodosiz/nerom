import { Container } from "../../_components/container/container";
import { Hero } from "../../_components/hero/hero";
import { extractLang, getLocalization, Lang } from "../../localization";

export default async function Privacy({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const lang = await extractLang(params);
  return (
    <main>
      <Hero
        title={getLocalization("privacy.heading", lang)}
        description={getLocalization("privacy.subheading", lang)}
        image="/images/hero2.jpg"
      />
      <Container>
        <header>
          <h1>{getLocalization("privacy.title", lang)}</h1>
          <p>{getLocalization("privacy.lastUpdated", lang)}</p>
        </header>

        <section>
          <p>{getLocalization("privacy.intro", lang)}</p>
        </section>

        <section>
          <h2>{getLocalization("privacy.information.title", lang)}</h2>
          <p>{getLocalization("privacy.information.content", lang)}</p>
        </section>

        <section>
          <h2>{getLocalization("privacy.googleAnalytics.title", lang)}</h2>
          <p>{getLocalization("privacy.googleAnalytics.content", lang)}</p>
          <p>{getLocalization("privacy.googleAnalytics.second", lang)}</p>
        </section>

        <section>
          <h2>{getLocalization("privacy.cookies.title", lang)}</h2>
          <p>{getLocalization("privacy.cookies.content", lang)}</p>
        </section>

        <section>
          <h2>{getLocalization("privacy.dataRetention.title", lang)}</h2>
          <p>{getLocalization("privacy.dataRetention.content", lang)}</p>
        </section>

        <section>
          <h2>{getLocalization("privacy.rights.title", lang)}</h2>
          <p>
            {getLocalization("privacy.rights.content", lang)}
            <a href="mailto:neromebs@gmail.com">neromebs@gmail.com</a>.
          </p>
        </section>

        <section>
          <h2>
            {getLocalization("privacy.internationalDataTransfers.title", lang)}
          </h2>
          <p>
            {getLocalization(
              "privacy.internationalDataTransfers.content",
              lang
            )}
          </p>
        </section>

        <section>
          <h2>{getLocalization("privacy.thirdPartyServices.title", lang)}</h2>
          <p>{getLocalization("privacy.thirdPartyServices.content", lang)}</p>
        </section>

        <section>
          <h2>{getLocalization("privacy.changes.title", lang)}</h2>
          <p>{getLocalization("privacy.changes.content", lang)}</p>
        </section>

        <section>
          <h2>{getLocalization("privacy.contact.title", lang)}</h2>
          <p>{getLocalization("privacy.contact.content", lang)}</p>
          <p>
            <strong>NEROM Engineering Business & Services</strong>
            <br />
            <span>{getLocalization("contact.address", lang)}</span>
            <br />
            <a href="mailto:neromebs@gmail.com">neromebs@gmail.com</a>
            <br />
            <a href="tel:+306944322781">+30 694 432 2781</a>
          </p>
        </section>
      </Container>
    </main>
  );
}
