"use client";

import Swal from "sweetalert2";

import axios from "axios";

import { useState, useEffect } from "react";

import { IoSaveOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";

import { useRouter } from "next/navigation";

import { CarligOption } from "@/app/types/CarligOption";

interface CarligFormProps {
  _id?: string;
  title?: string;
  slug?: string;
  options?: [
    {
      code: string;
      price: string;
      size: string;
      packingWay: string;
      color: string;
    }
  ];
  subCategory?: string;
  coverImg?: string;
  availability?: string;
  brand?: string;
  description?: string;
  extraImgs?: string[];
  detailsImg?: string;
}

const CarligForm: React.FC<CarligFormProps> = ({
  _id,
  slug,
  options,
  subCategory,
  coverImg,
  title,
  brand,
  availability,
  description,
  extraImgs,
  detailsImg,
}) => {
  const router = useRouter();

  const [option, setOption] = useState({
    code: "",
    price: "",
    color: "",
    size: "",
    packingWay: "",
  });

  const [carlig, setCarlig] = useState({
    title: title || "",
    slug: slug || "",
    category: "carlige",
    subCategory: subCategory || "",
    options: options || [],
    coverImg: coverImg || "",
    description: description || "",
    availability: availability || "",
    brand: brand || "",
    extraImgs: extraImgs || [],
    detailsImg: detailsImg || "",
  });

  async function saveCarlig(ev: any) {
    ev.preventDefault();
    if (_id) {
      const carligData = { ...carlig, _id };
      const res = await axios.put(`/api/products/carlige`, carligData);
      const data = res.data;
      if (data.status === "ok") {
        router.push("/admin/produse");
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
      const res = await axios.post(`/api/products/carlige`, carlig);
      const data = res.data;
      if (data.status === "ok") {
        router.push("/admin/produse");
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

  async function uploadCoverImage(file: any) {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "jpi7vh5i");

    axios
      .post("https://api.cloudinary.com/v1_1/dzgermdhe/image/upload", form)
      .then((res) =>
        setCarlig((prev) => {
          return { ...prev, coverImg: res.data.url };
        })
      );
  }

  async function uploadDetailsImage(file: any) {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "jpi7vh5i");

    axios
      .post("https://api.cloudinary.com/v1_1/dzgermdhe/image/upload", form)
      .then((res) =>
        setCarlig((prev) => {
          return { ...prev, detailsImg: res.data.url };
        })
      );
  }

  async function uploadExtraImages(files: any) {
    const form = new FormData();
    for (const file of files) {
      form.append("file", file);
      form.append("upload_preset", "jpi7vh5i");
      axios
        .post("https://api.cloudinary.com/v1_1/dzgermdhe/image/upload", form)
        .then((res) => {
          setCarlig((prev: any) => {
            return { ...prev, extraImgs: [...prev.extraImgs, res.data.url] };
          });
        });
    }
  }

  // carlig
  const [titleFocus, setTitleFocus] = useState(false);
  const [categoryFocus, setCategoryFocus] = useState(false);
  const [subCategoryFocus, setSubCategoryFocus] = useState(false);
  const [descriptionFocus, setDescriptionFocus] = useState(false);
  const [slugFocus, setSlugFocus] = useState(false);
  const [brandFocus, setBrandFocus] = useState(false);
  const [availabilityFocus, setAvailabilityFocus] = useState(false);

  // Option
  const [codeFocus, setCodeFocus] = useState(false);
  const [priceFocus, setPriceFocus] = useState(false);
  const [sizeFocus, setSizeFocus] = useState(false);
  const [colorFocus, setColorFocus] = useState(false);
  const [packingWayFocus, setPackingWayFocus] = useState(false);

  useEffect(() => {
    if (carlig.title) {
      setTitleFocus(true);
    }
    if (carlig.category) {
      setCategoryFocus(true);
    }
    if (carlig.subCategory) {
      setSubCategoryFocus(true);
    }
    if (carlig.description) {
      setDescriptionFocus(true);
    }
    if (carlig.slug) {
      setSlugFocus(true);
    }
    if (carlig.brand) {
      setBrandFocus(true);
    }
    if (carlig.availability) {
      setAvailabilityFocus(true);
    }

    if (option.code) {
      setCodeFocus(true);
    }
    if (option.price) {
      setPriceFocus(true);
    }
    if (option.packingWay) {
      setPackingWayFocus(true);
    }
    if (option.color) {
      setColorFocus(true);
    }
    if (option.size) {
      setSizeFocus(true);
    }
  }, [
    carlig.availability,
    carlig.category,
    carlig.description,
    carlig.title,
    carlig.slug,
    carlig.subCategory,
    carlig.brand,
    option.code,
    option.packingWay,
    option.size,
    option.color,
    option.price,
  ]);

  return (
    <form
      onSubmit={(ev) => saveCarlig(ev)}
      className="relative w-full h-full grid grid-cols-2 gap-x-20 gap-y-10 pb-20"
    >
      <section className="col-span-1 flex flex-col gap-6">
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
              if (!carlig.title) {
                setTitleFocus(false);
              }
            }}
            type="text"
            value={carlig.title}
            onChange={(ev) =>
              setCarlig((prev) => {
                return { ...prev, title: ev.target.value };
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
              if (!carlig.category) {
                setCategoryFocus(false);
              }
            }}
            type="text"
            value={carlig.category}
            onChange={(ev) =>
              setCarlig((prev) => {
                return { ...prev, category: ev.target.value };
              })
            }
            placeholder=""
            className="w-full h-10 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
          />
        </div>
        <div className="relative">
          <label
            htmlFor="subCategory"
            className={`${
              subCategoryFocus ? "-translate-y-9" : "-translate-y-[50%]"
            } absolute left-4 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
          >
            Subcategorie
          </label>
          <input
            id="subCategory"
            onFocus={() => setSubCategoryFocus(true)}
            onBlur={() => {
              if (!carlig.subCategory) {
                setSubCategoryFocus(false);
              }
            }}
            type="text"
            value={carlig.subCategory}
            onChange={(ev) =>
              setCarlig((prev) => {
                return { ...prev, subCategory: ev.target.value };
              })
            }
            placeholder=""
            className="w-full h-10 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
          />
        </div>
        <div className="relative">
          <label
            htmlFor="description"
            className={`${
              descriptionFocus ? "-translate-y-6" : ""
            } absolute left-4 top-2 bg-white px-2 transition-all duration-100 cursor-text`}
          >
            Descriere
          </label>
          <textarea
            id="description"
            onFocus={() => setDescriptionFocus(true)}
            onBlur={() => {
              if (!carlig.description) {
                setDescriptionFocus(false);
              }
            }}
            value={carlig.description}
            onChange={(ev) =>
              setCarlig((prev) => {
                return { ...prev, description: ev.target.value };
              })
            }
            placeholder=""
            className="w-full h-40 border resize-none border-gray-300 px-4 pt-2 focus:border-gray-400 transition-all duration-200"
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
              if (!carlig.slug) {
                setSlugFocus(false);
              }
            }}
            type="text"
            value={carlig.slug}
            onChange={(ev) =>
              setCarlig((prev) => {
                return { ...prev, slug: ev.target.value };
              })
            }
            placeholder=""
            className="w-full h-10 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
          />
        </div>
        <div className="w-full flex gap-8">
          <div className="w-[47.5%] h-auto flex flex-col gap-4 relative px-4 py-2 border border-gray-300">
            <label htmlFor="coverImg">Coperta</label>
            {carlig.coverImg && (
              <img src={carlig.coverImg} className="h-40 w-40 object-cover" />
            )}
            <input
              id="coverImg"
              type="file"
              onChange={(ev: any) => {
                uploadCoverImage(ev.target.files[0]);
              }}
            />
            <button
              onClick={() =>
                setCarlig((prev) => {
                  return { ...prev, coverImg: "" };
                })
              }
              type="button"
              className="absolute top-2 right-2 hover:text-primary transition-all duration-200"
            >
              <IoMdClose className="text-xl" />
            </button>
          </div>
          <div className="w-[47.5%] h-auto flex flex-col gap-4 relative px-4 py-2 border border-gray-300">
            <label htmlFor="detailsImg">Detalii</label>
            {carlig.detailsImg && (
              <img
                src={carlig.detailsImg}
                className="h-40 w-40 object-contain"
              />
            )}
            <input
              id="detailsImg"
              type="file"
              onChange={(ev: any) => {
                uploadDetailsImage(ev.target.files[0]);
              }}
            />
            <button
              onClick={() =>
                setCarlig((prev) => {
                  return { ...prev, detailsImg: "" };
                })
              }
              type="button"
              className="absolute top-2 right-2 hover:text-primary transition-all duration-200"
            >
              <IoMdClose className="text-xl" />
            </button>
          </div>
        </div>
        {/* Extra images */}
        <div className="w-full h-auto flex flex-col gap-4 relative border border-gray-300 px-4 py-2">
          <label htmlFor="extraImgs">Extra</label>
          {carlig.extraImgs.length > 0 && (
            <div className="flex gap-4">
              {carlig.extraImgs.map((image) => {
                return <img src={image} className="h-40 w-40 object-contain" />;
              })}
            </div>
          )}
          <input
            id="extraImgs"
            type="file"
            onChange={(ev) => {
              uploadExtraImages(ev.target.files);
            }}
          />
          <button
            onClick={() =>
              setCarlig((prev) => {
                return { ...prev, extraImgs: [] };
              })
            }
            type="button"
            className="absolute top-2 right-2 hover:text-primary transition-all duration-200"
          >
            <IoMdClose className="text-xl" />
          </button>
        </div>
        {/* Extra images */}
      </section>
      <section className="col-span-1 flex flex-col gap-6">
        <div className="relative">
          <label
            htmlFor="brand"
            className={`${
              brandFocus ? "-translate-y-9" : "-translate-y-[50%]"
            } absolute left-4 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
          >
            Brand
          </label>
          <input
            id="brand"
            onFocus={() => setBrandFocus(true)}
            onBlur={() => {
              if (!carlig.brand) {
                setBrandFocus(false);
              }
            }}
            type="text"
            value={carlig.brand}
            onChange={(ev) =>
              setCarlig((prev) => {
                return { ...prev, brand: ev.target.value };
              })
            }
            placeholder=""
            className="w-full h-10 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
          />
        </div>
        <div className="relative">
          <label
            htmlFor="availability"
            className={`${
              availabilityFocus ? "-translate-y-9" : "-translate-y-[50%]"
            } absolute left-4 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
          >
            Valabilitate
          </label>
          <input
            id="availability"
            onFocus={() => setAvailabilityFocus(true)}
            onBlur={() => {
              if (!carlig.availability) {
                setAvailabilityFocus(false);
              }
            }}
            type="text"
            value={carlig.availability}
            onChange={(ev) =>
              setCarlig((prev) => {
                return { ...prev, availability: ev.target.value };
              })
            }
            placeholder=""
            className="w-full h-10 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
          />
        </div>

        {/* Options */}
        <h2 className="border-b mt-6 text-lg">Optiuni</h2>
        {carlig.options.length > 0 && (
          <div className="grid grid-cols-3 gap-4">
            {carlig.options.map((option: CarligOption, id) => {
              return (
                <div key={id} className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setOption(carlig.options[id] || option)}
                    className="border border-gray-300 w-full h-10 grid grid-cols-3"
                  >
                    <div className="col-span-1 h-full border-r border-gray-300 grid place-content-center">
                      Cod
                    </div>
                    <div className="col-span-2 h-full grid place-content-center">
                      {option.code}
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setCarlig((prev: any) => {
                        return {
                          ...prev,
                          options: carlig.options.filter((filterOption) => {
                            return filterOption !== option;
                          }),
                        };
                      });
                    }}
                  >
                    <IoMdClose className="text-lg hover:text-primary transition-all duration-200" />
                  </button>
                </div>
              );
            })}
          </div>
        )}
        <div className="grid grid-cols-3 gap-x-4 gap-y-6">
          <div className="relative">
            <label
              htmlFor="code"
              className={`${
                codeFocus ? "-translate-y-9" : "-translate-y-[50%]"
              } absolute left-4 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
            >
              Cod
            </label>
            <input
              id="code"
              onFocus={() => setCodeFocus(true)}
              onBlur={() => {
                if (!option.code) {
                  setCodeFocus(false);
                }
              }}
              type="text"
              value={option.code}
              onChange={(ev) =>
                setOption((prev) => {
                  return { ...prev, code: ev.target.value };
                })
              }
              placeholder=""
              className="w-full h-10 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="price"
              className={`${
                priceFocus ? "-translate-y-9" : "-translate-y-[50%]"
              } absolute left-4 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
            >
              Pret
            </label>
            <input
              id="price"
              onFocus={() => setPriceFocus(true)}
              onBlur={() => {
                if (!option.price) {
                  setPriceFocus(false);
                }
              }}
              type="text"
              value={option.price}
              onChange={(ev) =>
                setOption((prev) => {
                  return { ...prev, price: ev.target.value };
                })
              }
              placeholder=""
              className="w-full h-10 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="color"
              className={`${
                colorFocus ? "-translate-y-9" : "-translate-y-[50%]"
              } absolute left-4 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
            >
              Culoare
            </label>
            <input
              id="color"
              onFocus={() => setColorFocus(true)}
              onBlur={() => {
                if (!option.color) {
                  setColorFocus(false);
                }
              }}
              type="text"
              value={option.color}
              onChange={(ev) =>
                setOption((prev) => {
                  return { ...prev, color: ev.target.value };
                })
              }
              placeholder=""
              className="w-full h-10 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="size"
              className={`${
                sizeFocus ? "-translate-y-9" : "-translate-y-[50%]"
              } absolute left-4 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
            >
              Marime
            </label>
            <input
              id="size"
              onFocus={() => setSizeFocus(true)}
              onBlur={() => {
                if (!option.size) {
                  setSizeFocus(false);
                }
              }}
              type="text"
              value={option.size}
              onChange={(ev) =>
                setOption((prev) => {
                  return { ...prev, size: ev.target.value };
                })
              }
              placeholder=""
              className="w-full h-10 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="packingWay"
              className={`${
                packingWayFocus ? "-translate-y-9" : "-translate-y-[50%]"
              } absolute left-4 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
            >
              Mod ambalare
            </label>
            <input
              id="packingWay"
              onFocus={() => setPackingWayFocus(true)}
              onBlur={() => {
                if (!option.packingWay) {
                  setPackingWayFocus(false);
                }
              }}
              type="text"
              value={option.packingWay}
              onChange={(ev) =>
                setOption((prev) => {
                  return { ...prev, packingWay: ev.target.value };
                })
              }
              placeholder=""
              className="w-full h-10 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
            />
          </div>

          <button
            type="button"
            onClick={() => {
              setCarlig((prev: any) => {
                return { ...prev, options: [...prev.options, option] };
              });
              setOption({
                code: "",
                size: "",
                price: "",
                color: "",
                packingWay: "",
              });
            }}
            className="relative rounded-full group flex items-center justify-center h-10 bg-primary text-white overflow-hidden"
          >
            <p className="group-hover:-translate-y-10 transition-all duration-200">
              Adauga
            </p>
            <p className="text-xl absolute translate-y-8 left-[50%] -translate-x-[50%] group-hover:translate-y-0 transition-all duration-200">
              <AiOutlinePlus />
            </p>
          </button>
        </div>
        {/* Options */}
      </section>

      <button
        type="submit"
        className="absolute bottom-0 left-[50%] -translate-x-[50%] rounded-full group flex items-center justify-center w-52 py-2 bg-primary text-white overflow-hidden"
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

export default CarligForm;
