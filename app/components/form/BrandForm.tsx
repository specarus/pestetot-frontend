"use client";

import { useState, useEffect } from "react";

import Swal from "sweetalert2";

import axios from "axios";
import { useRouter } from "next/navigation";

import { IoMdClose } from "react-icons/io";
import { IoSaveOutline } from "react-icons/io5";

interface BrandFormProps {
  _id?: string;
  title?: string;
  slug?: string;
  img?: string;
  category?: string;
}

const BrandForm: React.FC<BrandFormProps> = ({
  _id,
  title,
  slug,
  img,
  category,
}) => {
  const router = useRouter();

  const [brand, setBrand] = useState({
    title: title || "",
    slug: slug || "",
    category: category || "",
    img: img || "",
  });

  async function createBrand(ev: any) {
    ev.preventDefault();
    if (_id) {
      const brandData = { ...brand, _id };
      const res = await axios.put("/api/brands", brandData);
      const data = res.data;
      if (data.status === "ok") {
        router.push("/admin/branduri");
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
      const res = await axios.post("/api/brands", brand);
      const data = res.data;
      if (data.status === "ok") {
        router.push("/admin/branduri");
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

  async function uploadImage(file: any) {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "jpi7vh5i");

    axios
      .post("https://api.cloudinary.com/v1_1/dzgermdhe/image/upload", form)
      .then((res) =>
        setBrand((prev) => {
          return { ...prev, img: res.data.url };
        })
      );
  }

  const [titleFocus, setTitleFocus] = useState(false);
  const [slugFocus, setSlugFocus] = useState(false);
  const [categoryFocus, setCategoryFocus] = useState(false);

  useEffect(() => {
    if (brand.title) {
      setTitleFocus(true);
    }
    if (brand.slug) {
      setSlugFocus(true);
    }
    if (brand.category) {
      setCategoryFocus(true);
    }
  }, []);

  return (
    <form
      onSubmit={(ev) => createBrand(ev)}
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
            if (!brand.title) {
              setTitleFocus(false);
            }
          }}
          type="text"
          value={brand.title}
          onChange={(ev) =>
            setBrand((prev) => {
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
            if (!brand.slug) {
              setSlugFocus(false);
            }
          }}
          type="text"
          value={brand.slug}
          onChange={(ev) =>
            setBrand((prev) => {
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
            if (!brand.category) {
              setCategoryFocus(false);
            }
          }}
          type="text"
          value={brand.category}
          onChange={(ev) =>
            setBrand((prev) => {
              return { ...prev, category: ev.target.value };
            })
          }
          placeholder=""
          className="w-full h-10 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
        />
      </div>
      <div className="w-[47.5%] h-auto flex flex-col gap-4 relative px-4 py-2 border border-gray-300">
        <label htmlFor="image">Imagine</label>
        {brand.img && (
          <img src={brand.img} className="h-40 w-40 object-contain" />
        )}
        <input
          id="image"
          type="file"
          onChange={(ev: any) => {
            uploadImage(ev.target.files[0]);
          }}
        />
        <button
          onClick={() =>
            setBrand((prev) => {
              return { ...prev, img: "" };
            })
          }
          type="button"
          className="absolute top-2 right-2 hover:text-primary transition-all duration-200"
        >
          <IoMdClose className="text-xl" />
        </button>
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

export default BrandForm;
