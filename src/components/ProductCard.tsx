import { Card } from "@/components/ui/card";
import React from "react";

export type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <li className="snap-start">
      <Card
        className="group w-[280px] md:w-[320px] rounded-2xl border bg-card text-card-foreground shadow-md transition-transform duration-300 hover:-translate-y-1"
        aria-label={product.name}
      >
        <div className="p-3 md:p-4">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="mt-4 space-y-2">
            <p className="text-sm md:text-base font-medium leading-snug h-[40px] md:h-[44px] overflow-hidden">
              {product.name}
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-lg md:text-xl font-bold">${product.price.toFixed(2)}</span>
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ProductCard;
