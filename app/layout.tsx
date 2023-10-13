import "./styles/globals.css";

import axios from "axios";

import { Rubik } from "next/font/google";

import Layout from "./components/layout/Layout";

import HomePageFiltersContextProvider from "./contexts/HomePageFiltersContext";
import CategoryPageFiltersContextProvider from "./contexts/CategoryPageFiltersContext";
import CartContextProvider from "./contexts/CartContext";
import SidebarContextProvider from "./contexts/SidebarContext";
import ModalContextProvider from "./contexts/ModalContext";
import UserContextProvider from "./contexts/UserContext";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

axios.defaults.baseURL = "https://pestetot-server.onrender.com";
axios.defaults.withCredentials = true;

const getCategories = async () => {
  const res = await axios.get("/api/categories");
  const data = res.data;
  return data;
};

const getProducts = async () => {
  const res = await axios.get("/api/products");
  const data = res.data;
  return data;
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();
  const products = await getProducts();

  return (
    <CartContextProvider>
      <UserContextProvider>
        <ModalContextProvider>
          <SidebarContextProvider>
            <CategoryPageFiltersContextProvider>
              <HomePageFiltersContextProvider>
                <html lang="en">
                  <body className={rubik.className}>
                    <Layout categories={categories} products={products}>
                      {children}
                    </Layout>
                  </body>
                </html>
              </HomePageFiltersContextProvider>
            </CategoryPageFiltersContextProvider>
          </SidebarContextProvider>
        </ModalContextProvider>
      </UserContextProvider>
    </CartContextProvider>
  );
}
