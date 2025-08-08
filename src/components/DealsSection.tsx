import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ProductCard, { Product } from "@/components/ProductCard";

// Product images
import hedgeTrimmer from "@/assets/products/hedge-trimmer.jpg";
import earbuds from "@/assets/products/wireless-earbuds.jpg";
import smartwatch from "@/assets/products/smartwatch.jpg";
import speaker from "@/assets/products/bluetooth-speaker.jpg";
import smartphones from "@/assets/products/smartphones.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
 
const products: Product[] = [
  {
    id: "1",
    name: "Cordless Hedge Trimmer – Refurbished Kit",
    image: hedgeTrimmer,
    price: 139.0,
    originalPrice: 179.0,
  },
  {
    id: "2",
    name: "Wireless Earbuds Pro – Excellent Condition",
    image: earbuds,
    price: 55.99,
    originalPrice: 230.0,
  },
  {
    id: "3",
    name: "Smartwatch SE (2nd Gen) GPS + Cellular 40mm",
    image: smartwatch,
    price: 129.99,
    originalPrice: 279.0,
  },
  {
    id: "4",
    name: "Portable Bluetooth Speaker – USB‑C",
    image: speaker,
    price: 79.99,
    originalPrice: 187.0,
  },
  {
    id: "5",
    name: "Modern Smartphones – Assorted Colors",
    image: smartphones,
    price: 680.96,
    originalPrice: 1349.0,
  },
];

const DealsSection: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const handlePrev = () => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = Math.max(260, Math.floor(el.clientWidth * 0.8));
    el.scrollBy({ left: -amount, behavior: "smooth" });
  };
  const handleNext = () => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = Math.max(260, Math.floor(el.clientWidth * 0.8));
    el.scrollBy({ left: amount, behavior: "smooth" });
  };
  return (
    <section aria-labelledby="deals-heading" className="w-full">
      {/* Single H1 for SEO (visually hidden to match design) */}
      <h1 id="deals-heading" className="sr-only">
        Today’s Deals – All With Free Shipping
      </h1>

      <div className="relative">
        <div
          id="deals-scroll"
          ref={scrollRef}
          className="overflow-x-auto"
          role="region"
          aria-label="Today's deals products"
        >
          <ul className="flex gap-4 md:gap-6 px-4 py-6 md:py-8 snap-x snap-mandatory">
            {/* Left promo card */}
            <li className="snap-start">
              <Card className="w-[260px] md:w-[320px] rounded-2xl bg-foreground text-background shadow-md">
                <div className="flex h-full flex-col justify-between p-5 md:p-6">
                  <div className="space-y-2">
                    <p className="text-2xl md:text-3xl font-extrabold tracking-tight">
                      Today’s Deals
                    </p>
                    <p className="text-sm md:text-base opacity-90">
                      All With Free Shipping
                    </p>
                  </div>
                  <div className="pt-6">
                    <Button variant="hero" size="lg" aria-label="Shop today's deals">
                      Shop now
                    </Button>
                  </div>
                </div>
              </Card>
            </li>

            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        </div>

        {/* Arrow controls */}
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
          <Button
            type="button"
            variant="secondary"
            size="icon"
            aria-label="Scroll left"
            onClick={handlePrev}
            className="pointer-events-auto rounded-full"
          >
            <ChevronLeft />
          </Button>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <Button
            type="button"
            variant="secondary"
            size="icon"
            aria-label="Scroll right"
            onClick={handleNext}
            className="pointer-events-auto rounded-full"
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
