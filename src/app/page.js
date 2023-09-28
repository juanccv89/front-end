"use client";
import { CardsFilterTemplate } from "../../components/template/cardsFilter-template/cardsFilterTemplate";
import { hotelData } from "../../services/getHotelsServices";

export default async function Home() {
  const getDataHotels = await hotelData();

  return (
    <>
      <CardsFilterTemplate getDataHotels={getDataHotels} />
    </>
  );
}
