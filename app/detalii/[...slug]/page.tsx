import axios from "axios";

import ProductDetails from "@/app/components/ProductDetails";
import DetailsPageProducts from "@/app/components/DetailsPageProducts";

const getProduct = async (
  category: string,
  subCategory: string,
  productSlug: string
) => {
  const res = await axios.get(
    `/api/products/${category}/${subCategory}/${productSlug}`
  );
  const data = res.data;
  return data;
};

const getProducts = async (categorySlug: string, subCategorySlug: string) => {
  const res = await axios.get(
    `/api/products/${categorySlug}/${subCategorySlug}`
  );
  const data = res.data;
  return data;
};

const ProductPage = async ({ params }: { params: { slug: string[] } }) => {
  const { slug } = params;
  const category = slug[0];
  const subCategory = slug[1];
  const productSlug = slug[2];

  const product = await getProduct(category, subCategory, productSlug);
  const products = await getProducts(category, subCategory);

  return (
    <div className="w-full h-full">
      <section className="desktop:mb-24 laptop:mb-20">
        <ProductDetails
          product={product}
          category={category}
          subCategory={subCategory}
        />
      </section>
      <section className="desktop:mb-24 laptop:mb-20">
        <DetailsPageProducts productId={product._id} products={products} />
      </section>
    </div>
  );
};

export default ProductPage;

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}) {
  const { slug } = params;
  const category = slug[0];
  const subCategory = slug[1];
  const productSlug = slug[2];

  const product = await getProduct(category, subCategory, productSlug);

  return { title: `PesteTot | ${product.title}` };
}
