import Script from "next/script";
import { Lang } from "../../localization";

interface StructuredDataProps {
  lang: Lang;
}

export function OrganizationStructuredData({ lang }: StructuredDataProps) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NEROM Engineering & Business Services",
    alternateName: "NEROM",
    url: "https://www.nerom-ebs.gr",
    logo: "https://www.nerom-ebs.gr/images/hero.jpg",
    description:
      lang === "en"
        ? "With expertise in engineering, business strategy, and executive training, we offer comprehensive solutions tailored to meet the modern market's demands."
        : "Με εμπειρία στους τομείς του μηχανικού, της επιχειρηματικής στρατηγικής και της εκπαίδευσης στελεχών, προσφέρουμε ολοκληρωμένες λύσεις που ανταποκρίνονται στις σύγχρονες απαιτήσεις της αγοράς.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "188 Ipokratous Str.",
      addressLocality: "Athens",
      postalCode: "11471",
      addressCountry: "GR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+30-694-432-2781",
      contactType: "customer service",
      email: "neromebs@gmail.com",
      availableLanguage: ["English", "Greek"],
    },
    sameAs: [],
  };

  return (
    <Script
      id="organization-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
}

export function LocalBusinessStructuredData() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "NEROM Engineering & Business Services",
    image: "https://www.nerom-ebs.gr/images/hero.jpg",
    "@id": "https://www.nerom-ebs.gr",
    url: "https://www.nerom-ebs.gr",
    telephone: "+30-694-432-2781",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "188 Ipokratous Str.",
      addressLocality: "Athens",
      postalCode: "11471",
      addressCountry: "GR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.9908,
      longitude: 23.7383,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    sameAs: [],
  };

  return (
    <Script
      id="local-business-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
    />
  );
}

export function ServiceStructuredData({ lang }: StructuredDataProps) {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType:
      lang === "en"
        ? "Engineering & Business Consulting Services"
        : "Υπηρεσίες Μηχανικού & Επιχειρηματικής Συμβουλευτικής",
    provider: {
      "@type": "Organization",
      name: "NEROM Engineering & Business Services",
      telephone: "+30-694-432-2781",
      email: "neromebs@gmail.com",
    },
    areaServed: {
      "@type": "Country",
      name: "Greece",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: lang === "en" ? "Engineering Services" : "Υπηρεσίες Μηχανικού",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              lang === "en"
                ? "Architectural Design"
                : "Αρχιτεκτονικός Σχεδιασμός",
            description:
              lang === "en"
                ? "Space and small space design and construction"
                : "Σχεδιασμός και κατασκευή χώρων μικρής και μεγάλης κλίμακας",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              lang === "en"
                ? "Business Consulting"
                : "Επιχειρηματική Συμβουλευτική",
            description:
              lang === "en"
                ? "Strategic consulting services for business development"
                : "Στρατηγικές συμβουλευτικές υπηρεσίες για ανάπτυξη επιχειρήσεων",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: lang === "en" ? "Executive Training" : "Εκπαίδευση Στελεχών",
            description:
              lang === "en"
                ? "Training and development of executives through specialized seminars"
                : "Εκπαίδευση και ανάπτυξη στελεχών μέσω εξειδικευμένων σεμιναρίων",
          },
        },
      ],
    },
  };

  return (
    <Script
      id="service-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
    />
  );
}

export function BreadcrumbStructuredData({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
}
