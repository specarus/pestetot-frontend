import axios from "axios";

import ProductCard from "@/app/components/ProductCard";

import { Category } from "@/app/types/Category";
import Image from "next/image";

const getBrand = async (brandSlug: string) => {
  const res = await axios.get(`/api/brands/single/${brandSlug}`);
  const data = res.data;
  return data;
};

const getProducts = async (brand: string) => {
  const res = await axios.get(`/api/products/brands/${brand}`);
  const data = res.data;
  return data;
};

const getCategories = async () => {
  const res = await axios.get("/api/categories");
  const data = res.data;
  return data;
};

const BrandProductsPage = async ({ params }: { params: { brand: string } }) => {
  const brand = await getBrand(params.brand);
  const products = await getProducts(brand.title);
  const categories = await getCategories();

  return (
    <div className="w-full h-full desktop:px-20 laptop:px-16 desktop:mb-24 laptop:mb-20">
      <section className="flex items-center desktop:gap-3 laptop:gap-2 desktop:mb-6 laptop:mb-4 desktop:text-base laptop:text-sm">
        <p>Acasa</p>
        <p className="text-primary">/</p>
        <p>Catalog</p>
        <p className="text-primary">/</p>
        <p>Brand</p>
        <p className="text-primary">/</p>
        <p className="text-primary capitalize">{brand.title}</p>
      </section>

      <section className="desktop:w-28 laptop:w-24 h-auto mb-8 select-none pointer-events-none border px-2">
        <Image
          src={brand.img}
          alt="Brand"
          width={700}
          height={700}
          className="w-full h-full object-cover"
        />
      </section>

      <section>
        {categories.map((category: Category) => {
          return (
            <div key={category._id}>
              {products.filter(
                (product: any) => product.category === category.title
              ).length > 0 && (
                <div>
                  <div className="border-b flex justify-center uppercase desktop:text-xl laptop:text-lg pb-1 desktop:mb-10 laptop:mb-8 select-none">
                    <p>{category.title}</p>
                  </div>
                  <div className="grid desktop:grid-cols-7 laptop:grid-cols-6 desktop:gap-x-4 laptop:gap-x-3 desktop:gap-y-8 laptop:gap-y-5">
                    {products
                      .filter(
                        (product: any) => product.category === category.title
                      )
                      .map((product: any) => {
                        return (
                          <div key={product._id}>
                            <ProductCard product={product} />
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default BrandProductsPage;

export async function generateMetadata({
  params,
}: {
  params: { brand: string };
}) {
  const brand = await getBrand(params.brand);

  return { title: `PesteTot | ${brand.title}` };
}
