"use client";

import { useState, useEffect } from "react";
import { MulinetaOption } from "@/app/types/MulinetaOption";

import axios from "axios";

import { useRouter } from "next/navigation";

import Swal from "sweetalert2";

import { IoMdClose } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { IoSaveOutline } from "react-icons/io5";
import Image from "next/image";

interface MulinetaFormProps {
  _id?: string;
  title?: string;
  slug?: string;
  description?: string;
  subCategory?: string;
  brand?: string;
  coverImg?: string;
  availability?: string;
  detailsImg?: string;
  extraImgs?: string[];
  options?: [
    {
      code: string;
      price: string;
      size: string;
      noBearing: string;
      recoveryReport: string;
      material: string;
      brakingSystem: string;
      drum: string;
      drumCapacity: string;
      weight: string;
    }
  ];
}

const MulinetaForm: React.FC<MulinetaFormProps> = ({
  _id,
  title,
  options,
  description,
  availability,
  brand,
  coverImg,
  extraImgs,
  slug,
  detailsImg,
  subCategory,
}) => {
  const router = useRouter();

  const [option, setOption] = useState({
    code: "",
    price: "",
    size: "",
    noBearing: "",
    recoveryReport: "",
    material: "",
    drum: "",
    brakingSystem: "",
    drumCapacity: "",
    weight: "",
  });

  const [mulineta, setMulineta] = useState({
    title: title || "",
    slug: slug || "",
    description: description || "",
    category: "mulinete",
    options: options || [],
    subCategory: subCategory || "",
    brand: brand || "",
    coverImg: coverImg || "",
    availability: availability || "",
    extraImgs: extraImgs || [],
    detailsImg: detailsImg || "",
  });

  const saveMulineta = async (ev: any) => {
    ev.preventDefault();
    if (_id) {
      const mulinetaData = { ...mulineta, _id };
      const res = await axios.put(`/api/products/mulinete`, mulinetaData);
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
      const res = await axios.post(`/api/products/mulinete`, mulineta);
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
  };

  async function uploadCoverImage(file: any) {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "jpi7vh5i");

    axios
      .post("https://api.cloudinary.com/v1_1/dzgermdhe/image/upload", form)
      .then((res) =>
        setMulineta((prev) => {
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
        setMulineta((prev) => {
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
          setMulineta((prev: any) => {
            return { ...prev, extraImgs: [...prev.extraImgs, res.data.url] };
          });
        });
    }
  }

  // Mulineta
  const [titleFocus, setTitleFocus] = useState(false);
  const [categoryFocus, setCategoryFocus] = useState(false);
  const [subCategoryFocus, setSubCategoryFocus] = useState(false);
  const [brandFocus, setBrandFocus] = useState(false);
  const [descriptionFocus, setDescriptionFocus] = useState(false);
  const [slugFocus, setSlugFocus] = useState(false);
  const [availabilityFocus, setAvailabilityFocus] = useState(false);

  // Option
  const [codeFocus, setCodeFocus] = useState(false);
  const [priceFocus, setPriceFocus] = useState(false);
  const [sizeFocus, setSizeFocus] = useState(false);
  const [noBearingFocus, setNoBearingFocus] = useState(false);
  const [recoveryReportFocus, setRecoveryReportFocus] = useState(false);
  const [materialFocus, setMaterialFocus] = useState(false);
  const [drumFocus, setDrumFocus] = useState(false);
  const [drumCapacityFocus, setDrumCapacityFocus] = useState(false);
  const [weightFocus, setWeightFocus] = useState(false);
  const [brakingSystemFocus, setBrakingSystemFocus] = useState(false);

  useEffect(() => {
    if (mulineta.title) {
      setTitleFocus(true);
    }
    if (mulineta.category) {
      setCategoryFocus(true);
    }
    if (mulineta.subCategory) {
      setSubCategoryFocus(true);
    }
    if (mulineta.description) {
      setDescriptionFocus(true);
    }
    if (mulineta.slug) {
      setSlugFocus(true);
    }
    if (mulineta.brand) {
      setBrandFocus(true);
    }
    if (mulineta.availability) {
      setAvailabilityFocus(true);
    }

    if (option.code) {
      setCodeFocus(true);
    }
    if (option.price) {
      setPriceFocus(true);
    }
    if (option.noBearing) {
      setNoBearingFocus(true);
    }
    if (option.drum) {
      setDrumFocus(true);
    }
    if (option.weight) {
      setWeightFocus(true);
    }
    if (option.drumCapacity) {
      setDrumCapacityFocus(true);
    }
    if (option.material) {
      setMaterialFocus(true);
    }
    if (option.size) {
      setSizeFocus(true);
    }
    if (option.recoveryReport) {
      setRecoveryReportFocus(true);
    }
    if (option.brakingSystem) {
      setBrakingSystemFocus(true);
    }
  }, [
    mulineta.availability,
    mulineta.brand,
    mulineta.description,
    mulineta.subCategory,
    mulineta.slug,
    mulineta.title,
    mulineta.category,
    option.material,
    option.drum,
    option.drumCapacity,
    option.code,
    option.price,
    option.noBearing,
    option.size,
    option.recoveryReport,
    option.weight,
    option.brakingSystem,
  ]);

  return (
    <form
      onSubmit={(ev) => saveMulineta(ev)}
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
              if (!mulineta.title) {
                setTitleFocus(false);
              }
            }}
            type="text"
            value={mulineta.title}
            onChange={(ev) =>
              setMulineta((prev) => {
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
              if (!mulineta.category) {
                setCategoryFocus(false);
              }
            }}
            type="text"
            value={mulineta.category}
            onChange={(ev) =>
              setMulineta((prev) => {
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
              if (!mulineta.subCategory) {
                setSubCategoryFocus(false);
              }
            }}
            type="text"
            value={mulineta.subCategory}
            onChange={(ev) =>
              setMulineta((prev) => {
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
              if (!mulineta.description) {
                setDescriptionFocus(false);
              }
            }}
            value={mulineta.description}
            onChange={(ev) =>
              setMulineta((prev) => {
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
              if (!mulineta.slug) {
                setSlugFocus(false);
              }
            }}
            type="text"
            value={mulineta.slug}
            onChange={(ev) =>
              setMulineta((prev) => {
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
            {mulineta.coverImg && (
              <Image
                alt="Mulineta"
                width={200}
                height={200}
                src={mulineta.coverImg}
                className="h-40 w-40 object-cover"
              />
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
                setMulineta((prev) => {
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
            {mulineta.detailsImg && (
              <Image
                alt="Mulineta"
                width={200}
                height={200}
                src={mulineta.detailsImg}
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
                setMulineta((prev) => {
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
        <div className="w-full h-auto flex flex-col gap-4 relative px-4 py-2 border border-gray-300">
          <label htmlFor="extraImgs">Extra</label>
          {mulineta.extraImgs.length > 0 && (
            <div className="flex flex-wrap gap-x-4 gap-y-8">
              {mulineta.extraImgs.map((image) => {
                return (
                  <Image
                    key={image}
                    alt="Mulineta"
                    width={200}
                    height={200}
                    src={image}
                    className="h-40 w-40 object-contain"
                  />
                );
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
              setMulineta((prev) => {
                return { ...prev, extraImgs: [] };
              })
            }
            type="button"
            className="absolute top-2 right-2 hover:text-primary transition-all duration-200"
          >
            <IoMdClose className="text-xl" />
          </button>
        </div>
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
              if (!mulineta.brand) {
                setBrandFocus(false);
              }
            }}
            type="text"
            value={mulineta.brand}
            onChange={(ev) =>
              setMulineta((prev) => {
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
              if (!mulineta.availability) {
                setAvailabilityFocus(false);
              }
            }}
            type="text"
            value={mulineta.availability}
            onChange={(ev) =>
              setMulineta((prev) => {
                return { ...prev, availability: ev.target.value };
              })
            }
            placeholder=""
            className="w-full h-10 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
          />
        </div>

        {/* Options */}
        <h2 className="border-b mt-6 text-lg">Optiuni</h2>
        {mulineta.options.length > 0 && (
          <div className="grid grid-cols-3 gap-4">
            {mulineta.options.map((option: MulinetaOption, id) => {
              return (
                <div key={id} className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setOption(mulineta.options[id] || option)}
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
                      setMulineta((prev: any) => {
                        return {
                          ...prev,
                          options: mulineta.options.filter((filterOption) => {
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
              htmlFor="noBearing"
              className={`${
                noBearingFocus ? "-translate-y-9" : "-translate-y-[50%]"
              } absolute left-4 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
            >
              Rulmenti
            </label>
            <input
              id="noBearing"
              onFocus={() => setNoBearingFocus(true)}
              onBlur={() => {
                if (!option.noBearing) {
                  setNoBearingFocus(false);
                }
              }}
              type="text"
              value={option.noBearing}
              onChange={(ev) =>
                setOption((prev) => {
                  return { ...prev, noBearing: ev.target.value };
                })
              }
              placeholder=""
              className="w-full h-10 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="recoveryReport"
              className={`${
                recoveryReportFocus ? "-translate-y-9" : "-translate-y-[50%]"
              } absolute left-4 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
            >
              Raport recuperare
            </label>
            <input
              id="recoveryReport"
              onFocus={() => setRecoveryReportFocus(true)}
              onBlur={() => {
                if (!option.recoveryReport) {
                  setRecoveryReportFocus(false);
                }
              }}
              type="text"
              value={option.recoveryReport}
              onChange={(ev) =>
                setOption((prev) => {
                  return { ...prev, recoveryReport: ev.target.value };
                })
              }
              placeholder=""
              className="w-full h-10 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="material"
              className={`${
                materialFocus ? "-translate-y-9" : "-translate-y-[50%]"
              } absolute left-4 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
            >
              Material
            </label>
            <input
              id="material"
              onFocus={() => setMaterialFocus(true)}
              onBlur={() => {
                if (!option.material) {
                  setMaterialFocus(false);
                }
              }}
              type="text"
              value={option.material}
              onChange={(ev) =>
                setOption((prev) => {
                  return { ...prev, material: ev.target.value };
                })
              }
              placeholder=""
              className="w-full h-10 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="drum"
              className={`${
                drumFocus ? "-translate-y-9" : "-translate-y-[50%]"
              } absolute left-4 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
            >
              Tambur
            </label>
            <input
              id="drum"
              onFocus={() => setDrumFocus(true)}
              onBlur={() => {
                if (!option.drum) {
                  setDrumFocus(false);
                }
              }}
              type="text"
              value={option.drum}
              onChange={(ev) =>
                setOption((prev) => {
                  return { ...prev, drum: ev.target.value };
                })
              }
              placeholder=""
              className="w-full h-10 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="drumCapacity"
              className={`${
                drumCapacityFocus ? "-translate-y-9" : "-translate-y-[50%]"
              } absolute left-4 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
            >
              Capacitate tambur
            </label>
            <input
              id="drumCapacity"
              onFocus={() => setDrumCapacityFocus(true)}
              onBlur={() => {
                if (!option.drumCapacity) {
                  setDrumCapacityFocus(false);
                }
              }}
              type="text"
              value={option.drumCapacity}
              onChange={(ev) =>
                setOption((prev) => {
                  return { ...prev, drumCapacity: ev.target.value };
                })
              }
              placeholder=""
              className="w-full h-10 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="weight"
              className={`${
                weightFocus ? "-translate-y-9" : "-translate-y-[50%]"
              } absolute left-4 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
            >
              Greutate
            </label>
            <input
              id="weight"
              onFocus={() => setWeightFocus(true)}
              onBlur={() => {
                if (!option.weight) {
                  setWeightFocus(false);
                }
              }}
              type="text"
              value={option.weight}
              onChange={(ev) =>
                setOption((prev) => {
                  return { ...prev, weight: ev.target.value };
                })
              }
              placeholder=""
              className="w-full h-10 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="brakingSystem"
              className={`${
                brakingSystemFocus ? "-translate-y-9" : "-translate-y-[50%]"
              } absolute left-4 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
            >
              Sistem franare
            </label>
            <input
              id="brakingSystem"
              onFocus={() => setBrakingSystemFocus(true)}
              onBlur={() => {
                if (!option.brakingSystem) {
                  setBrakingSystemFocus(false);
                }
              }}
              type="text"
              value={option.brakingSystem}
              onChange={(ev) =>
                setOption((prev) => {
                  return { ...prev, brakingSystem: ev.target.value };
                })
              }
              placeholder=""
              className="w-full h-10 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
            />
          </div>

          <button
            type="button"
            onClick={() => {
              setMulineta((prev: any) => {
                return { ...prev, options: [...prev.options, option] };
              });
              setOption({
                noBearing: "",
                price: "",
                code: "",
                material: "",
                size: "",
                weight: "",
                recoveryReport: "",
                drum: "",
                brakingSystem: "",
                drumCapacity: "",
              });
            }}
            className="h-10 relative rounded-full group flex items-center justify-center bg-primary text-white overflow-hidden"
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

export default MulinetaForm;
