import React from "react";

export default function product( {params,} :{ params : { productId :string} }) {
  return <div>this is the product {params.productId} </div>;
}
