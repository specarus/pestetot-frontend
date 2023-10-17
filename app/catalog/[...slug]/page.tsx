import axios from "axios";

import Title from "@/app/components/layout/Title";

import CategoryPageFilters from "@/app/components/CategoryPageFilters";
import CategoryPageProducts from "@/app/components/CategoryPageProducts";
import { Brand } from "@/app/types/Brand";

const getProducts = async (categorySlug: string) => {
  const res = await axios.get(`/api/products/${categorySlug}`);
  const data = res.data;
  return data;
};

const getSubCategories = async (categorySlug: string) => {
  const res = await axios.get(`/api/subcategories/${categorySlug}`);
  const data = res.data;
  return data;
};

const getCategory = async (categorySlug: string) => {
  const res = await axios.get(`/api/categories/${categorySlug}`);
  const data = res.data;
  return data;
};

const getBrands = async () => {
  const res = await axios.get("/api/brands");
  const data = res.data;
  return data;
};

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const categorySlug = slug[0];

  const products = await getProducts(categorySlug);
  const subCategories = await getSubCategories(categorySlug);
  const category = await getCategory(categorySlug);
  const brands = await getBrands();

  const categoryBrands = brands.filter((brand: Brand) => {
    return brand.category.split(", ").includes(category.title);
  });

  return (
    <div className="w-full h-full">
      {/* All products */}
      <section className="desktop:px-20 laptop:px-16 desktop:mb-6 laptop:mb-4">
        <div className="flex items-center desktop:gap-3 laptop:gap-2 desktop:mb-6 laptop:mb-4 desktop:text-base laptop:text-sm">
          <p>Acasa</p>
          <p className="text-primary">/</p>
          <p>Catalog</p>
          <p className="text-primary">/</p>
          <p className="text-primary capitalize">{category.title}</p>
        </div>
        <div className="desktop:mb-14 laptop:mb-10">
          <Title title={category.title} />
        </div>

        <div className="relative">
          <CategoryPageFilters
            subCategories={subCategories}
            brands={categoryBrands}
          />
        </div>
      </section>
      {/* All products */}

      {products && (
        <section className="desktop:mb-48 laptop:mb-32">
          <CategoryPageProducts products={products} brands={brands} />
        </section>
      )}
    </div>
  );
};

export default CategoryPage;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const categorySlug = slug[0];
  const category = await getCategory(categorySlug);

  return {
    title: `PesteTot | ${category.title
      .charAt(0)
      .toUpperCase()}${category.title.slice(1, category.title.length)}`,
  };
}
