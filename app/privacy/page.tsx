"use client";
import { Container } from "../_components/container/container";
import { Hero } from "../_components/hero/hero";
import { useLang, useLocalized } from "../localization";

export default function Privacy() {
  const lang = useLang();
  return (
    <main>
      <Hero
        title={useLocalized("privacy.heading", lang)}
        description={useLocalized("privacy.subheading", lang)}
        image="/images/hero2.jpg"
      />
      <Container>
        <header>
          <h1>{useLocalized("privacy.title", lang)}</h1>
          <p>{useLocalized("privacy.lastUpdated", lang)}</p>
        </header>

        <section>
          <p>{useLocalized("privacy.intro", lang)}</p>
        </section>

        <section>
          <h2>{useLocalized("privacy.information.title", lang)}</h2>
          <p>{useLocalized("privacy.information.content", lang)}</p>
        </section>

        <section>
          <h2>{useLocalized("privacy.googleAnalytics.title", lang)}</h2>
          <p>{useLocalized("privacy.googleAnalytics.content", lang)}</p>
          <p>{useLocalized("privacy.googleAnalytics.second", lang)}</p>
        </section>

        <section>
          <h2>{useLocalized("privacy.cookies.title", lang)}</h2>
          <p>{useLocalized("privacy.cookies.content", lang)}</p>
        </section>

        <section>
          <h2>{useLocalized("privacy.dataRetention.title", lang)}</h2>
          <p>{useLocalized("privacy.dataRetention.content", lang)}</p>
        </section>

        <section>
          <h2>{useLocalized("privacy.rights.title", lang)}</h2>
          <p>
            {useLocalized("privacy.rights.content", lang)}
            <a href="mailto:neromebs@gmail.com">neromebs@gmail.com</a>.
          </p>
        </section>

        <section>
          <h2>
            {useLocalized("privacy.internationalDataTransfers.title", lang)}
          </h2>
          <p>
            {useLocalized("privacy.internationalDataTransfers.content", lang)}
          </p>
        </section>

        <section>
          <h2>{useLocalized("privacy.thirdPartyServices.title", lang)}</h2>
          <p>{useLocalized("privacy.thirdPartyServices.content", lang)}</p>
        </section>

        <section>
          <h2>{useLocalized("privacy.changes.title", lang)}</h2>
          <p>{useLocalized("privacy.changes.content", lang)}</p>
        </section>

        <section>
          <h2>{useLocalized("privacy.contact.title", lang)}</h2>
          <p>{useLocalized("privacy.contact.content", lang)}</p>
          <p>
            <strong>NEROM Engineering Business & Services</strong>
            <br />
            <span>{useLocalized("contact.address", lang)}</span>
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
