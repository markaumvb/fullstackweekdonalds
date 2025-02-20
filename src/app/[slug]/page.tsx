import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getRestaurantBySlug } from '@/data/get-restaurant-by-slug';

import ConsumptionMethodOption from './components/consumption-method-option';

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}
const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await getRestaurantBySlug(slug);
  if (!restaurant) {
    return notFound();
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center px-6 pt-24">
      {/* Logo e titulo */}
      <div className=" flex flex-col items-center gap2">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
        <h2 className="font-semibold">{restaurant.name}</h2>
      </div>
      {/* Bem Vindo */}
      <div className="pt-24 text-center space-y-12">
        <h3 className="text-2xl font-semibold">Seja Bem-Vindo!!!</h3>
        <p className="opacity-50">
          Escolha como prefere aproveitar sua refeição. Estamos oferecendo
          praticidade e sabor em cada detalhe.
        </p>
      </div>
      <div className="pt-14 grid grid-cols-2 gap-4">
        <ConsumptionMethodOption
          buttonText="Para comer aqui"
          slug={restaurant.slug}
          imageUrl="/dine_in.png"
          imageAlt="Para comer aqui"
          option="DINE_IN"
        ></ConsumptionMethodOption>
        <ConsumptionMethodOption
          buttonText="Para levar"
          slug={restaurant.slug}
          imageUrl="/takeaway.png"
          imageAlt="Para levar"
          option="TAKEAWAY"
        ></ConsumptionMethodOption>
      </div>
    </div>
  );
};

export default RestaurantPage;
