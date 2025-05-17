import { notFound } from "next/navigation";

const ProductReviewDetails = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) notFound();

  return (
    <h1>
      Product Id: {productId} Reviews ID: {reviewId}
    </h1>
  );
};

export default ProductReviewDetails;
