import { Product } from '@prisma/client';
import { ChevronLeftIcon, ScrollTextIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { Button } from '@/components/ui/button';

interface ProductsProps {
  products: Product[];
}

const Products = ({ products }: ProductsProps) => {
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className="space-y-3 px-1.5">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/${slug}/menu/${product.id}`}
          className="flex items-center justify-between gap-10 py-3 border-b"
        >
          <div>
            <h4 className="text-sm font medium">{product.name}</h4>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {product.description}
            </p>
            <p className="pt-e text-sm font-semibold">
              {Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }).format(product.price)}
            </p>
          </div>
          <div className="relative min-h-[82px] min-w-[120px]">
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-4 left-4 rounded-full z-50"
            >
              <ChevronLeftIcon />
            </Button>

            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-contain rounded-lg"
            />
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-4 right-4 rounded-full z-50"
            >
              <ScrollTextIcon />
            </Button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
