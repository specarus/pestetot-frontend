"use client";

import { useState, useEffect } from "react";

import Swal from "sweetalert2";

import axios from "axios";
import { useRouter } from "next/navigation";
import { IoSaveOutline } from "react-icons/io5";

interface SubCategoryFormProps {
  _id?: string;
  title?: string;
  slug?: string;
  category?: string;
}

const SubCategoryForm: React.FC<SubCategoryFormProps> = ({
  _id,
  title,
  slug,
  category,
}) => {
  const router = useRouter();

  const [subCategory, setSubCategory] = useState({
    title: title || "",
    slug: slug || "",
    category: category || "",
  });

  async function saveSubCategory(ev: any) {
    ev.preventDefault();
    if (_id) {
      const subCategoryData = { ...subCategory, _id };
      const res = await axios.put("/api/subcategories", subCategoryData);
      const data = res.data;
      if (data.status === "ok") {
        router.push("/admin/subcategorii");
        Swal.fire({
          position: "top",
          showConfirmButton: false,
          title: "Salvat!",
          backdrop: "transparent",
          timer: 1200,
          timerProgressBar: true,
          customClass: {
            title: "text-sm font-normal",
            popup: "w-auto h-auto px-4 pb-2",
            timerProgressBar: "bg-green-500",
          },
        });
      }
    } else {
      const res = await axios.post("/api/subcategories", subCategory);
      const data = res.data;
      if (data.status === "ok") {
        router.push("/admin/subcategorii");
        Swal.fire({
          position: "top",
          showConfirmButton: false,
          title: "Salvat!",
          backdrop: "transparent",
          timer: 1200,
          timerProgressBar: true,
          customClass: {
            title: "text-sm font-normal",
            popup: "w-auto h-auto px-4 pb-2",
            timerProgressBar: "bg-green-500",
          },
        });
      }
    }
  }

  const [titleFocus, setTitleFocus] = useState(false);
  const [slugFocus, setSlugFocus] = useState(false);
  const [categoryFocus, setCategoryFocus] = useState(false);

  useEffect(() => {
    if (subCategory.title) {
      setTitleFocus(true);
    }
    if (subCategory.slug) {
      setSlugFocus(true);
    }
    if (subCategory.category) {
      setCategoryFocus(true);
    }
  }, [subCategory.category, subCategory.slug, subCategory.title]);

  return (
    <form
      onSubmit={(ev) => saveSubCategory(ev)}
      className="w-[50%] h-full flex flex-col gap-6"
    >
      <div className="relative">
        <label
          htmlFor="title"
          className={`${
            titleFocus ? "-translate-y-9" : "-translate-y-[50%]"
          } absolute left-4 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
        >
          Titlu
        </label>
        <input
          id="title"
          onFocus={() => setTitleFocus(true)}
          onBlur={() => {
            if (!subCategory.title) {
              setTitleFocus(false);
            }
          }}
          type="text"
          value={subCategory.title}
          onChange={(ev) =>
            setSubCategory((prev) => {
              return { ...prev, title: ev.target.value };
            })
          }
          placeholder=""
          className="w-full h-10 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
        />
      </div>
      <div className="relative">
        <label
          htmlFor="slug"
          className={`${
            slugFocus ? "-translate-y-9" : "-translate-y-[50%]"
          } absolute left-4 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
        >
          Slug
        </label>
        <input
          id="slug"
          onFocus={() => setSlugFocus(true)}
          onBlur={() => {
            if (!subCategory.slug) {
              setSlugFocus(false);
            }
          }}
          type="text"
          value={subCategory.slug}
          onChange={(ev) =>
            setSubCategory((prev) => {
              return { ...prev, slug: ev.target.value };
            })
          }
          placeholder=""
          className="w-full h-10 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
        />
      </div>
      <div className="relative">
        <label
          htmlFor="category"
          className={`${
            categoryFocus ? "-translate-y-9" : "-translate-y-[50%]"
          } absolute left-4 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
        >
          Categorie
        </label>
        <input
          id="category"
          onFocus={() => setCategoryFocus(true)}
          onBlur={() => {
            if (!subCategory.category) {
              setCategoryFocus(false);
            }
          }}
          type="text"
          value={subCategory.category}
          onChange={(ev) =>
            setSubCategory((prev) => {
              return { ...prev, category: ev.target.value };
            })
          }
          placeholder=""
          className="w-full h-10 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
        />
      </div>
      <button
        type="submit"
        className="relative rounded-full group flex items-center justify-center w-40 py-2 bg-primary text-white overflow-hidden"
      >
        <p className="group-hover:-translate-y-10 transition-all duration-200">
          Salveaza
        </p>
        <p className="text-2xl absolute translate-y-8 left-[50%] -translate-x-[50%] group-hover:translate-y-0 transition-all duration-200">
          <IoSaveOutline />
        </p>
      </button>
    </form>
  );
};

export default SubCategoryForm;
