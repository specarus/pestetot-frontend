import Account from "../components/Account";

import type { Metadata } from "next";

const AccountPage = () => {
  return (
    <div className="w-full h-full pl-20 pr-96">
      <Account />
    </div>
  );
};

export default AccountPage;

export const metadata: Metadata = {
  title: "PesteTot | Contul meu",
};
