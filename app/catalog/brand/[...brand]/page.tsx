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
    <div className="w-full h-full px-20 mb-24">
      <section className="flex items-center gap-3 mb-6">
        <p>Acasa</p>
        <p className="text-primary">/</p>
        <p>Catalog</p>
        <p className="text-primary">/</p>
        <p>Brand</p>
        <p className="text-primary">/</p>
        <p className="text-primary capitalize">{brand.title}</p>
      </section>

      <section className="w-28 h-auto mb-8 select-none pointer-events-none border px-2">
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
                  <div className="border-b flex justify-center uppercase text-xl pb-1 mb-10 select-none">
                    <p>{category.title}</p>
                  </div>
                  <div className="grid grid-cols-7 gap-x-4 gap-y-8 mb-24">
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
