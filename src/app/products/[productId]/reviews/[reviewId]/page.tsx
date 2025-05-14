const ProductReviewDetails = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;
  return (
    <h1>
      Product Id: {productId} Reviews ID: {reviewId}
    </h1>
  );
};

export default ProductReviewDetails;
