import { useEffect, useMemo } from "react";
import DealsSection from "@/components/DealsSection";

import hedgeTrimmer from "@/assets/products/hedge-trimmer.jpg";
import earbuds from "@/assets/products/wireless-earbuds.jpg";
import smartwatch from "@/assets/products/smartwatch.jpg";
import speaker from "@/assets/products/bluetooth-speaker.jpg";
import smartphones from "@/assets/products/smartphones.jpg";

const Index = () => {
  useEffect(() => {
    document.title = "Today’s Deals – Free Shipping | Deals Showcase";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Browse Today’s Deals with free shipping. Save big on gadgets and gear in a smooth horizontal scroll gallery.");
  }, []);

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Today’s Deals",
      itemListElement: [
        {
          "@type": "Product",
          name: "Cordless Hedge Trimmer – Refurbished Kit",
          image: hedgeTrimmer,
          offers: { "@type": "Offer", priceCurrency: "USD", price: 139.0 },
        },
        {
          "@type": "Product",
          name: "Wireless Earbuds Pro – Excellent Condition",
          image: earbuds,
          offers: { "@type": "Offer", priceCurrency: "USD", price: 55.99 },
        },
        {
          "@type": "Product",
          name: "Smartwatch SE (2nd Gen) GPS + Cellular 40mm",
          image: smartwatch,
          offers: { "@type": "Offer", priceCurrency: "USD", price: 129.99 },
        },
        {
          "@type": "Product",
          name: "Portable Bluetooth Speaker – USB‑C",
          image: speaker,
          offers: { "@type": "Offer", priceCurrency: "USD", price: 79.99 },
        },
        {
          "@type": "Product",
          name: "Modern Smartphones – Assorted Colors",
          image: smartphones,
          offers: { "@type": "Offer", priceCurrency: "USD", price: 680.96 },
        },
      ],
    }),
    []
  );

  return (
    <main>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DealsSection />
    </main>
  );
};

export default Index;

