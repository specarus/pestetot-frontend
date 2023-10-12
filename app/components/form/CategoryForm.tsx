"use client";

import { useState, useEffect } from "react";

import { IoSaveOutline } from "react-icons/io5";

import Swal from "sweetalert2";

import axios from "axios";

import { useRouter } from "next/navigation";

interface CategoryFormProps {
  _id?: string;
  title?: string;
  slug?: string;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ _id, title, slug }) => {
  const router = useRouter();

  const [category, setCategory] = useState({
    title: title || "",
    slug: slug || "",
  });

  async function saveCategory(ev: any) {
    ev.preventDefault();
    if (_id) {
      const categoryData = { ...category, _id };
      const res = await axios.put("/api/categories", categoryData);
      const data = res.data;
      if (data.status === "ok") {
        router.push("/admin/categorii");
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
      const res = await axios.post("/api/categories", category);
      const data = res.data;
      if (data.status === "ok") {
        router.push("/admin/categorii");
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

  useEffect(() => {
    if (category.title) {
      setTitleFocus(true);
    }
    if (category.slug) {
      setSlugFocus(true);
    }
  }, []);

  return (
    <form
      onSubmit={(ev) => saveCategory(ev)}
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
            if (!category.title) {
              setTitleFocus(false);
            }
          }}
          type="text"
          value={category.title}
          onChange={(ev) =>
            setCategory((prev) => {
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
            if (!category.slug) {
              setSlugFocus(false);
            }
          }}
          type="text"
          value={category.slug}
          onChange={(ev) =>
            setCategory((prev) => {
              return { ...prev, slug: ev.target.value };
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

export default CategoryForm;
