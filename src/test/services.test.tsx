import { describe, expect, it } from "vitest";
import { ALL_SERVICES, SANCTUARY_HIGHLIGHTS, SPA_BUSINESS, SPA_CATEGORIES } from "@/data/spa-data";
import { HERO_SLIDES } from "@/components/hero-slideshow";
import { GOOGLE_REVIEWS, REVIEWS_ROW_1, REVIEWS_ROW_2 } from "@/data/reviews-data";

describe("Services & Pricing specifications", () => {
  it("keeps only two sections: Massage Therapies and Body Treatments (9 services total)", () => {
    expect(ALL_SERVICES).toHaveLength(9);
    expect(SPA_CATEGORIES.map((c) => c.title)).toEqual([
      "Massage Therapies",
      "Body Treatments",
    ]);

    const massageTherapies = SPA_CATEGORIES.find((c) => c.title === "Massage Therapies");
    expect(massageTherapies?.services).toHaveLength(7);

    const bodyTreatments = SPA_CATEGORIES.find((c) => c.title === "Body Treatments");
    expect(bodyTreatments?.services).toHaveLength(2);
  });

  it("defines Inside The Sanctuary gallery highlights in place of Spa Experience", () => {
    expect(SANCTUARY_HIGHLIGHTS).toHaveLength(4);
    expect(SANCTUARY_HIGHLIGHTS.map((s) => s.src)).toEqual([
      "/enterance.jpg",
      "/reception.jpg",
      "/lobby.jpg",
      "/general spa experience.jpeg",
    ]);
  });

  it("has exact prices with /- suffix for all priced options", () => {
    const deepTissue = ALL_SERVICES.find((s) => s.name === "Deep Tissue Therapy");
    expect(deepTissue?.options).toEqual([
      { duration: "60 min", price: "₹2,800/-" },
      { duration: "90 min", price: "₹3,800/-" },
    ]);

    const hotStone = ALL_SERVICES.find((s) => s.name === "Hot Stone Therapy");
    expect(hotStone?.options).toEqual([{ duration: "90 min", price: "₹3,800/-" }]);

    const swedish = ALL_SERVICES.find((s) => s.name === "Swedish Massage");
    expect(swedish?.options).toEqual([
      { duration: "60 min", price: "₹2,400/-" },
      { duration: "90 min", price: "₹3,400/-" },
    ]);

    const thai = ALL_SERVICES.find((s) => s.name === "Traditional Thai Massage");
    expect(thai?.options).toEqual([
      { duration: "60 min", price: "₹2,200/-" },
      { duration: "90 min", price: "₹3,000/-" },
    ]);

    const aroma = ALL_SERVICES.find((s) => s.name === "Aroma Therapy");
    expect(aroma?.options).toEqual([
      { duration: "60 min", price: "₹2,500/-" },
      { duration: "90 min", price: "₹3,400/-" },
    ]);

    const balinese = ALL_SERVICES.find((s) => s.name === "Balinese Therapy");
    expect(balinese?.options).toEqual([
      { duration: "60 min", price: "₹2,600/-" },
      { duration: "90 min", price: "₹3,500/-" },
    ]);

    const foot = ALL_SERVICES.find((s) => s.name === "Foot Massage");
    expect(foot?.options).toEqual([
      { duration: "30 min", price: "₹800/-" },
      { duration: "60 min", price: "₹1,200/-" },
    ]);

    const bodyPack = ALL_SERVICES.find((s) => s.name === "Body Pack (Full Body)");
    expect(bodyPack?.options).toEqual([{ duration: "Full body", price: "₹3,000/-" }]);

    const hotCompress = ALL_SERVICES.find((s) => s.name === "Hot Compress Therapy");
    expect(hotCompress?.options).toEqual([{ duration: "60 min", price: "₹3,000/-" }]);
  });

  it("maps matching images correctly for all services including full body pack", () => {
    ALL_SERVICES.forEach((s) => {
      expect(s.image).toBeTruthy();
      expect(s.image).not.toContain("catalog");
      expect(s.image?.startsWith("/")).toBe(true);
    });

    const bodyPack = ALL_SERVICES.find((s) => s.name === "Body Pack (Full Body)");
    expect(bodyPack?.image).toBe("/full body pack.png");
  });

  it("contains correct business details, address, and phone number", () => {
    expect(SPA_BUSINESS.name).toBe("Myla Thai Spa");
    expect(SPA_BUSINESS.tagline).toBe("Natural Divinity");
    expect(SPA_BUSINESS.phoneDisplay).toBe("757 199 0678");
    expect(SPA_BUSINESS.phoneTel).toContain("7571990678");
    expect(SPA_BUSINESS.whatsappUrl).toContain("7571990678");
    expect(SPA_BUSINESS.alternatePhones[0].display).toBe("0522 298 0678");
    expect(SPA_BUSINESS.address.full).toBe(
      "Unit-09, Lower Ground Floor, Phoenix United Mall, Lucknow 226012"
    );
    expect(SPA_BUSINESS.owner).toBe("Mr. B K Dubey");
  });

  it("includes correct slideshow images for hero background", () => {
    expect(HERO_SLIDES).toHaveLength(4);
    expect(HERO_SLIDES.map((s) => s.src)).toEqual([
      "/enterance.jpg",
      "/Hot Stone Therapy.jpeg",
      "/foot massage.jpeg",
      "/Aroma Therapy.jpeg",
    ]);
  });

  it("includes all 34 real Google Maps reviews split into dual cross marquee rows", () => {
    expect(GOOGLE_REVIEWS).toHaveLength(34);
    expect(REVIEWS_ROW_1).toHaveLength(17);
    expect(REVIEWS_ROW_2).toHaveLength(17);
    expect(GOOGLE_REVIEWS.every((r) => r.rating === 5)).toBe(true);
    expect(GOOGLE_REVIEWS[0].name).toBe("Rajeev Kumar");
    expect(GOOGLE_REVIEWS[33].name).toBe("Radhe 4adhe");
  });

  it("organizes contact page layout so booking form follows primary line on mobile", async () => {
    const fs = await import("node:fs");
    const contactContent = fs.readFileSync("src/routes/contact.tsx", "utf-8");

    // Check that contents on mobile and flex-col on desktop are configured
    expect(contactContent).toContain("contents md:flex md:flex-col md:gap-6");
    // Primary phone card is order-1 on mobile
    expect(contactContent).toContain("order-1 md:order-none");
    // Booking request form is order-2 on mobile (under primary phone card)
    expect(contactContent).toContain("order-2 md:order-none");
    // Other business cards are order-3, order-4, order-5 on mobile
    expect(contactContent).toContain("order-3 md:order-none");
    expect(contactContent).toContain("order-4 md:order-none");
    expect(contactContent).toContain("order-5 md:order-none");
  });

  it("provides separate date and time input fields with 10 AM to 8 PM slot dropdown", async () => {
    const fs = await import("node:fs");
    const contactContent = fs.readFileSync("src/routes/contact.tsx", "utf-8");

    expect(contactContent).toContain('name="date" type="date"');
    expect(contactContent).toContain('name="time"');
    expect(contactContent).toContain("Preferred Date");
    expect(contactContent).toContain("Preferred Time Slot (10 AM – 8 PM)");

    const { BOOKING_TIME_SLOTS } = await import("@/routes/contact");
    expect(BOOKING_TIME_SLOTS[0]).toBe("10:00 AM");
    expect(BOOKING_TIME_SLOTS[1]).toBe("10:30 AM");
    expect(BOOKING_TIME_SLOTS[BOOKING_TIME_SLOTS.length - 1]).toContain("8:00 PM");
    expect(BOOKING_TIME_SLOTS.length).toBe(21);
  });

  it("submits the appointment form directly to WhatsApp with all form elements", async () => {
    const fs = await import("node:fs");
    const contactContent = fs.readFileSync("src/routes/contact.tsx", "utf-8");

    expect(contactContent).toContain("https://wa.me/917571990678?text=");
    expect(contactContent).toContain("Request Appointment via WhatsApp");
    expect(contactContent).toContain("• Name:");
    expect(contactContent).toContain("• Phone:");
    expect(contactContent).toContain("• Service:");
    expect(contactContent).toContain("• Preferred Date:");
    expect(contactContent).toContain("• Preferred Time:");
  });

  it("displays Our Services & Prices header over the category filter bar", async () => {
    const fs = await import("node:fs");
    const componentContent = fs.readFileSync("src/components/services-pricing.tsx", "utf-8");

    expect(componentContent).toContain("Our Services &amp; Prices");
  });

  it("includes Prometrion and Rajnikant Gaurav attribution with hyperlinks in the footer", async () => {
    const fs = await import("node:fs");
    const chromeContent = fs.readFileSync("src/components/site-chrome.tsx", "utf-8");

    expect(chromeContent).toContain("https://www.prometrion.com");
    expect(chromeContent).toContain("https://www.rajnikantg.in");
    expect(chromeContent).toContain("Prometrion");
    expect(chromeContent).toContain("Rajnikant Gaurav");
    expect(chromeContent).toContain("Built with 💻 &amp; ☕.");
  });

  it("configures myla thai spa logo for favicon and navbar logo icon", async () => {
    const fs = await import("node:fs");
    const rootContent = fs.readFileSync("src/routes/__root.tsx", "utf-8");
    const chromeContent = fs.readFileSync("src/components/site-chrome.tsx", "utf-8");

    expect(rootContent).toContain('href: "/myla thai spa logo.jpeg"');
    expect(chromeContent).toContain("SPA_BUSINESS.logo");
    expect(SPA_BUSINESS.logo).toBe("/myla thai spa logo.jpeg");
  });

  it("ensures all Lovable dependencies, configs, and files are removed", async () => {
    const fs = await import("node:fs");
    const pkg = JSON.parse(fs.readFileSync("package.json", "utf-8"));
    const viteConfig = fs.readFileSync("vite.config.ts", "utf-8");
    const rootRoute = fs.readFileSync("src/routes/__root.tsx", "utf-8");

    expect(pkg.devDependencies?.["@lovable.dev/vite-tanstack-config"]).toBeUndefined();
    expect(pkg.dependencies?.["@lovable.dev/vite-tanstack-config"]).toBeUndefined();
    expect(viteConfig).not.toContain("@lovable.dev");
    expect(rootRoute).not.toContain("lovable");
    expect(fs.existsSync(".lovable")).toBe(false);
    expect(fs.existsSync("src/lib/lovable-error-reporting.ts")).toBe(false);
  });

  it("renders contact booking section under the testimonials marquee on the home page", async () => {
    const fs = await import("node:fs");
    const indexContent = fs.readFileSync("src/routes/index.tsx", "utf-8");

    expect(indexContent).toContain("ReviewsMarquee");
    expect(indexContent).toContain("ContactBookingSection");

    const reviewsIndex = indexContent.indexOf("<ReviewsMarquee />");
    const contactIndex = indexContent.indexOf("<ContactBookingSection");

    expect(reviewsIndex).toBeGreaterThan(-1);
    expect(contactIndex).toBeGreaterThan(reviewsIndex);
  });
});
