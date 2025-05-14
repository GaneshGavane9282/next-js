const productDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const productId = (await params).productId;
  return <h1>Each Product Details {productId}</h1>;
};

export default productDetails;
