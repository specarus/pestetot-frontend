import AdminPage from "../components/pages/AdminPage";
import type { Metadata } from "next";

const AdminServerPage = () => {
  return (
    <div className="w-full h-full px-20 mb-40">
      <AdminPage />
    </div>
  );
};

export default AdminServerPage;

export const metadata: Metadata = {
  title: "PesteTot | Dashboard",
};
