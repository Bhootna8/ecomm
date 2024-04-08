import React, { useContext, useState } from "react";
import { ContextProvider } from "../../Context/Store";
import Card from "../Card";

const Content = () => {
  const { products } = useContext(ContextProvider);
  return (
    <section className=" flex gap-8 flex-wrap mx-auto justify-evenly py-10">
      {products?.map((product, index) => (
        <Card key={index} product={product}/>
      ))}
    </section>
  );
};

export default Content;
