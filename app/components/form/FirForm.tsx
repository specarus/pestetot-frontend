"use client";

import Swal from "sweetalert2";

import axios from "axios";

import { useState, useEffect } from "react";

import { IoSaveOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";

import { useRouter } from "next/navigation";

import { FirOption } from "@/app/types/FirOption";

interface FirFormProps {
  _id?: string;
  title?: string;
  slug?: string;
  options?: [
    {
      code: string;
      length: string;
      price: string;
      color: string;
      stringResistance: string;
      diameter: string;
    }
  ];
  subCategory?: string;
  coverImg?: string;
  availability?: string;
  brand?: string;
  description?: string;
  detailsImg?: string;
  extraImgs?: string[];
}

const FirForm: React.FC<FirFormProps> = ({
  _id,
  slug,
  options,
  subCategory,
  coverImg,
  title,
  brand,
  detailsImg,
  availability,
  description,
  extraImgs,
}) => {
  const router = useRouter();

  const [option, setOption] = useState({
    code: "",
    length: "",
    price: "",
    color: "",
    stringResistance: "",
    diameter: "",
  });

  const [fir, setFir] = useState({
    title: title || "",
    slug: slug || "",
    category: "fire",
    subCategory: subCategory || "",
    options: options || [],
    coverImg: coverImg || "",
    detailsImg: detailsImg || "",
    extraImgs: extraImgs || [],
    description: description || "",
    availability: availability || "",
    brand: brand || "",
  });

  async function saveFir(ev: any) {
    ev.preventDefault();
    if (_id) {
      const firData = { ...fir, _id };
      const res = await axios.put(`/api/products/fire`, firData);
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
      const res = await axios.post(`/api/products/fire`, fir);
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
        setFir((prev) => {
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
        setFir((prev) => {
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
          setFir((prev: any) => {
            return { ...prev, extraImgs: [...prev.extraImgs, res.data.url] };
          });
        });
    }
  }

  // fir
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
  const [stringResistanceFocus, setStringResistanceFocus] = useState(false);
  const [diameterFocus, setDiameterFocus] = useState(false);
  const [colorFocus, setColorFocus] = useState(false);
  const [lengthFocus, setLengthFocus] = useState(false);

  useEffect(() => {
    if (fir.title) {
      setTitleFocus(true);
    }
    if (fir.category) {
      setCategoryFocus(true);
    }
    if (fir.subCategory) {
      setSubCategoryFocus(true);
    }
    if (fir.description) {
      setDescriptionFocus(true);
    }
    if (fir.slug) {
      setSlugFocus(true);
    }
    if (fir.brand) {
      setBrandFocus(true);
    }
    if (fir.availability) {
      setAvailabilityFocus(true);
    }

    if (option.code) {
      setCodeFocus(true);
    }
    if (option.price) {
      setPriceFocus(true);
    }
    if (option.stringResistance) {
      setStringResistanceFocus(true);
    }
    if (option.length) {
      setLengthFocus(true);
    }
    if (option.color) {
      setColorFocus(true);
    }
    if (option.diameter) {
      setDiameterFocus(true);
    }
  }, [
    fir.availability,
    fir.brand,
    fir.category,
    fir.subCategory,
    fir.description,
    fir.title,
    fir.slug,
    option.code,
    option.length,
    option.stringResistance,
    option.color,
    option.price,
    option.diameter,
  ]);

  return (
    <form
      onSubmit={(ev) => saveFir(ev)}
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
              if (!fir.title) {
                setTitleFocus(false);
              }
            }}
            type="text"
            value={fir.title}
            onChange={(ev) =>
              setFir((prev) => {
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
              if (!fir.category) {
                setCategoryFocus(false);
              }
            }}
            type="text"
            value={fir.category}
            onChange={(ev) =>
              setFir((prev) => {
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
              if (!fir.subCategory) {
                setSubCategoryFocus(false);
              }
            }}
            type="text"
            value={fir.subCategory}
            onChange={(ev) =>
              setFir((prev) => {
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
              if (!fir.description) {
                setDescriptionFocus(false);
              }
            }}
            value={fir.description}
            onChange={(ev) =>
              setFir((prev) => {
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
              if (!fir.slug) {
                setSlugFocus(false);
              }
            }}
            type="text"
            value={fir.slug}
            onChange={(ev) =>
              setFir((prev) => {
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
            {fir.coverImg && (
              <img src={fir.coverImg} className="h-40 w-40 object-cover" />
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
                setFir((prev) => {
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
            {fir.detailsImg && (
              <img src={fir.detailsImg} className="h-40 w-40 object-contain" />
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
                setFir((prev) => {
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
          {fir.extraImgs.length > 0 && (
            <div className="flex gap-4">
              {fir.extraImgs.map((image) => {
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
              setFir((prev) => {
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
              if (!fir.brand) {
                setBrandFocus(false);
              }
            }}
            type="text"
            value={fir.brand}
            onChange={(ev) =>
              setFir((prev) => {
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
              if (!fir.availability) {
                setAvailabilityFocus(false);
              }
            }}
            type="text"
            value={fir.availability}
            onChange={(ev) =>
              setFir((prev) => {
                return { ...prev, availability: ev.target.value };
              })
            }
            placeholder=""
            className="w-full h-10 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
          />
        </div>

        {/* Options */}
        <h2 className="border-b mt-6 text-lg">Optiuni</h2>
        {fir.options.length > 0 && (
          <div className="grid grid-cols-3 gap-4">
            {fir.options.map((option: FirOption, id) => {
              return (
                <div key={id} className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setOption(fir.options[id] || option)}
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
                      setFir((prev: any) => {
                        return {
                          ...prev,
                          options: fir.options.filter((filterOption) => {
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
              htmlFor="diameter"
              className={`${
                diameterFocus ? "-translate-y-9" : "-translate-y-[50%]"
              } absolute left-4 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
            >
              Diametru
            </label>
            <input
              id="diameter"
              onFocus={() => setDiameterFocus(true)}
              onBlur={() => {
                if (!option.diameter) {
                  setDiameterFocus(false);
                }
              }}
              type="text"
              value={option.diameter}
              onChange={(ev) =>
                setOption((prev) => {
                  return { ...prev, diameter: ev.target.value };
                })
              }
              placeholder=""
              className="w-full h-10 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="stringResistance"
              className={`${
                stringResistanceFocus ? "-translate-y-9" : "-translate-y-[50%]"
              } absolute left-4 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
            >
              Rezistenta fir
            </label>
            <input
              id="stringResistance"
              onFocus={() => setStringResistanceFocus(true)}
              onBlur={() => {
                if (!option.stringResistance) {
                  setStringResistanceFocus(false);
                }
              }}
              type="text"
              value={option.stringResistance}
              onChange={(ev) =>
                setOption((prev) => {
                  return { ...prev, stringResistance: ev.target.value };
                })
              }
              placeholder=""
              className="w-full h-10 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="length"
              className={`${
                lengthFocus ? "-translate-y-9" : "-translate-y-[50%]"
              } absolute left-4 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
            >
              Lungime
            </label>
            <input
              id="length"
              onFocus={() => setLengthFocus(true)}
              onBlur={() => {
                if (!option.length) {
                  setLengthFocus(false);
                }
              }}
              type="text"
              value={option.length}
              onChange={(ev) =>
                setOption((prev) => {
                  return { ...prev, length: ev.target.value };
                })
              }
              placeholder=""
              className="w-full h-10 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
            />
          </div>

          <button
            type="button"
            onClick={() => {
              setFir((prev: any) => {
                return { ...prev, options: [...prev.options, option] };
              });
              setOption({
                code: "",
                length: "",
                price: "",
                color: "",
                stringResistance: "",
                diameter: "",
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

export default FirForm;
