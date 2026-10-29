export interface ServiceOption {
  duration: string;
  price: string;
}

export interface SpaService {
  id: string;
  name: string;
  category: "Massage Therapies" | "Body Treatments";
  options: ServiceOption[];
  description: string;
  image?: string | null;
  alt?: string;
  tag?: string;
}

export interface SpaCategory {
  title: "Massage Therapies" | "Body Treatments";
  subtitle: string;
  services: SpaService[];
}

export interface SanctuaryHighlight {
  src: string;
  title: string;
  desc: string;
}

export const SANCTUARY_HIGHLIGHTS: SanctuaryHighlight[] = [
  {
    src: "/enterance.jpg",
    title: "Authentic Thai Entrance",
    desc: "Phoenix United Mall, Lower Ground Floor",
  },
  {
    src: "/reception.jpg",
    title: "Warm Serene Reception",
    desc: "Personal consultation with our care team",
  },
  {
    src: "/lobby.jpg",
    title: "Spa Lobby & Sanctuary",
    desc: "Illuminated geometric ceilings and calming aromas",
  },
  {
    src: "/general spa experience.jpeg",
    title: "Private Treatment Suites",
    desc: "Peaceful floral ambiance and sanitized beds",
  },
];

export const SPA_BUSINESS = {
  name: "Myla Thai Spa",
  brandName: "Myla Thai Spa",
  tagline: "Natural Divinity",
  logo: "/myla thai spa logo.jpeg",
  owner: "Mr. B K Dubey",
  experience: "10+ Years in Business in Lucknow",
  phoneDisplay: "757 199 0678",
  phoneRaw: "7571990678",
  phoneTel: "tel:+917571990678",
  whatsappUrl:
    "https://wa.me/917571990678?text=Hello%20Myla%20Thai%20Spa%2C%20I%20would%20like%20to%20inquire%20about%20a%20booking",
  alternatePhones: [
    { display: "0522 298 0678", tel: "tel:05222980678", label: "Landline" },
  ],
  address: {
    unit: "Unit-09, Lower Ground Floor",
    building: "Phoenix United Mall",
    city: "Lucknow",
    pincode: "226012",
    full: "Unit-09, Lower Ground Floor, Phoenix United Mall, Lucknow 226012",
  },
  hours: "Open Daily: 10:00 AM – 9:00 PM (Last booking at 8:00 PM)",
  googleReviewUrl: "https://www.google.com/maps?cid=1948119791826895197",
  reviewsCount: "86+",
  rating: "5.0",
};

export const SPA_CATEGORIES: SpaCategory[] = [
  {
    title: "Massage Therapies",
    subtitle: "Rooted in authentic Thai & global techniques to restore energy and relieve tension.",
    services: [
      {
        id: "deep-tissue-therapy",
        name: "Deep Tissue Therapy",
        category: "Massage Therapies",
        options: [
          { duration: "60 min", price: "₹2,800/-" },
          { duration: "90 min", price: "₹3,800/-" },
        ],
        description:
          "Targets the deeper layers of muscle and the surrounding tissues. Often chosen to help with sports injuries or chronic pain.",
        image: "/Deep Tissue Therapy.jpeg",
        alt: "Deep Tissue Therapy session",
      },
      {
        id: "hot-stone-therapy",
        name: "Hot Stone Therapy",
        category: "Massage Therapies",
        options: [{ duration: "90 min", price: "₹3,800/-" }],
        description:
          "Long, relaxing strokes and circular movements on the long skeletal muscles, using heated stones along with tapping and kneading.",
        image: "/Hot Stone Therapy.jpeg",
        alt: "Smooth heated volcanic stones therapy",
        tag: "Signature",
      },
      {
        id: "swedish-massage",
        name: "Swedish Massage",
        category: "Massage Therapies",
        options: [
          { duration: "60 min", price: "₹2,400/-" },
          { duration: "90 min", price: "₹3,400/-" },
        ],
        description:
          "One of the most common massage techniques. Gentler than deep tissue. Aims to relax the body and release muscle tension. Well suited to first-time guests and anyone seeking relaxation.",
        image: "/Swedish Massage.jpeg",
        alt: "Swedish massage session",
      },
      {
        id: "traditional-thai-massage",
        name: "Traditional Thai Massage",
        category: "Massage Therapies",
        options: [
          { duration: "60 min", price: "₹2,200/-" },
          { duration: "90 min", price: "₹3,000/-" },
        ],
        description:
          "Performed with the client fully clothed, lying on a mat. Uses stretching, pulling, and rocking techniques to relieve tension, promote relaxation, and improve flexibility and circulation. Sometimes called assisted yoga. Focuses on improving the flow of energy through the body.",
        image: "/thai massage.jpg",
        alt: "Authentic Traditional Thai Massage therapist",
        tag: "Authentic Thai",
      },
      {
        id: "aroma-therapy",
        name: "Aroma Therapy",
        category: "Massage Therapies",
        options: [
          { duration: "60 min", price: "₹2,500/-" },
          { duration: "90 min", price: "₹3,400/-" },
        ],
        description:
          "A massage using essential oils for therapeutic benefit. Relaxing and calming.",
        image: "/Aroma Therapy.jpeg",
        alt: "Aromatherapy massage with pure essential oils",
      },
      {
        id: "balinese-therapy",
        name: "Balinese Therapy",
        category: "Massage Therapies",
        options: [
          { duration: "60 min", price: "₹2,600/-" },
          { duration: "90 min", price: "₹3,500/-" },
        ],
        description:
          "Aromatic oil massage with an exfoliating body scrub using sea salts, leaving skin soft, smooth, and supple. Includes hand and foot treatments that leave hands and feet looking fresh and refreshed, and a facial treatment (cleansing, exfoliation, toning, massage, and moisturizing).",
        image: "/Balinese-Massage.webp",
        alt: "Balinese holistic therapy",
        tag: "Holistic Ritual",
      },
      {
        id: "foot-massage",
        name: "Foot Massage",
        category: "Massage Therapies",
        options: [
          { duration: "30 min", price: "₹800/-" },
          { duration: "60 min", price: "₹1,200/-" },
        ],
        description: "A relaxing foot massage, ideal after a long day.",
        image: "/foot massage.jpeg",
        alt: "Relaxing foot massage",
      },
    ],
  },
  {
    title: "Body Treatments",
    subtitle: "Natural scrubs, warm herbal wraps, and compresses to purify and nourish your skin.",
    services: [
      {
        id: "body-pack-full-body",
        name: "Body Pack (Full Body)",
        category: "Body Treatments",
        options: [{ duration: "Full body", price: "₹3,000/-" }],
        description:
          "A full-body scrub designed to calm, soothe, heal, and cleanse, followed by a nourishing moisturizing treatment. Enriched with vitamins, antioxidants, lotus and apricot seed granules (to remove dead cells), coconut oil, and shea butter for smooth, hydrated skin. Finishes with a warm herbal wrap using Poo Loey to soothe irritation and deep-cleanse the skin.",
        image: "/full body pack.png",
        alt: "Full body herbal scrub and nourishing pack",
        tag: "Signature Scrub",
      },
      {
        id: "hot-compress-therapy",
        name: "Hot Compress Therapy",
        category: "Body Treatments",
        options: [{ duration: "60 min", price: "₹3,000/-" }],
        description:
          "A warm herbal compress applied to areas of the body that feel sore or tense, to relax muscles and increase blood flow. Uses warm compresses (herbal bundles or towels soaked in warm water).",
        image: "/hot compress therapy.jpg",
        alt: "Warm traditional Thai herbal compress therapy",
      },
    ],
  },
];

export const ALL_SERVICES: SpaService[] = SPA_CATEGORIES.flatMap((c) => c.services);
