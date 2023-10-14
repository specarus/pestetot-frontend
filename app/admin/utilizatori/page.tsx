import UsersPage from "@/app/components/pages/UsersPage";
import type { Metadata } from "next";

const UsersServerPage = () => {
  return (
    <div className="w-full h-full px-20 mb-40">
      <UsersPage />
    </div>
  );
};

export default UsersServerPage;

export const metadata: Metadata = {
  title: "PesteTot | Utilizatori",
};
