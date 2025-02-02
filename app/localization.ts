const LOREM_EN =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const LOREM_EL =
  "Είμαστε αυτοί που ονειρεύονται, με φως και με σκοτάδι, Στα μονοπάτια της ζωής, με θάρρος και με χάδι. Με γνώση και με πάθος, τον κόσμο εξερευνούμε, Και με καρδιά ανοιχτή, το μέλλον μας υφαίνουμε.";

const content = {
  en: {
    navigation: {
      lang: "Language",
      home: "Home",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      title: "NEROM",
      description: "Engineering & Business Services",
    },
    whoWeAre: {
      title: "Who we are",
      content: LOREM_EN,
    },
    expertise: {
      title: "Our expertise",
      engineering: {
        title: "Engineering",
        description: LOREM_EN,
      },
      business: {
        title: "Business",
        description: LOREM_EN,
      },
    },
    services: {
      hero: {
        title: "Services",
        description: "We offer a wide range of services",
      },
      engineering: {
        title: "Engineering",
        description: LOREM_EN,
      },
      business: {
        title: "Business",
        description: LOREM_EN,
      },
      other: {
        title: "Other services",
        description: LOREM_EN,
      },
    },
    contact: {
      hero: {
        title: "Contact us",
        description: "Happy customers are our first priority",
      },
      title: "Where to find us",
      content: LOREM_EN,
    },
  },
  el: {
    navigation: {
      lang: "Γλώσσα",
      home: "Αρχική",
      services: "Υπηρεσίες",
      contact: "Επικοινωνία",
    },
    hero: {
      title: "NEROM",
      description: "Σύμβουλοι επιχειρήσεων και μηχανικοί",
    },
    whoWeAre: {
      title: "Ποιοι είμαστε",
      content: LOREM_EL,
    },
    expertise: {
      title: "Η εμπειρία μας",
      engineering: {
        title: "Μηχανικοί",
        description: LOREM_EL,
      },
      business: {
        title: "Σύμβουλοι επιχειρήσεων",
        description: LOREM_EL,
      },
    },
    services: {
      hero: {
        title: "Υπηρεσίες",
        description: "Προσφέρουμε μια μεγάλη ποικιλία υπηρεσιών",
      },
      engineering: {
        title: "Υπηρεσίες μηχανικού",
        description: LOREM_EL,
      },
      business: {
        title: "Συμβουλευτική επιχειρήσεων",
        description: LOREM_EL,
      },
      other: {
        title: "Άλλες υπηρεσίες",
        description: LOREM_EL,
      },
    },
    contact: {
      hero: {
        title: "Επικοινωνία",
        description:
          "Οι ευχαριστημένοι πελάτες είναι η πρώτη μας προτεραιότητα",
      },
      title: "Που θα μας βρείτε",
      content: LOREM_EL,
    },
  },
};

export function useLocalized(key: string, lang: "en" | "el") {
  const keys = key.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let result = content[lang] as any;

  for (const k of keys) {
    if (result[k] === undefined) {
      return null;
    }
    result = result[k];
  }

  return result;
}

export function useLang(): "en" | "el" {
  const userLanguage = navigator.language || "en";
  const storedLang = window.localStorage.getItem("lang");

  if (storedLang) {
    return storedLang as "en" | "el";
  }

  if (userLanguage.includes("el")) {
    return "el";
  }

  return "en";
}
