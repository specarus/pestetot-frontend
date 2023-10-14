import AccountPage from "../components/pages/AccountPage";

import type { Metadata } from "next";

const AccountServerPage = () => {
  return (
    <div className="w-full h-full">
      <AccountPage />
    </div>
  );
};

export default AccountServerPage;

export const metadata: Metadata = {
  title: "PesteTot | Contul meu",
};
