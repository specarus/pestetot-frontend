import Title from "@/app/components/layout/Title";

import type { Metadata } from "next";

const PrivacyPolicyPage = () => {
  return (
    <div className="w-full h-full">
      <section className="px-20 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <p>Acasa</p>
          <p className="text-primary">/</p>
          <p className="text-primary">Politica de confidentalitate</p>
        </div>
        <div className="mb-14">
          <Title title="Politica de confidentalitate" />
        </div>
      </section>

      <section className="pl-20 pr-96 mb-52 flex flex-col gap-8"></section>
    </div>
  );
};

export default PrivacyPolicyPage;

export const metadata: Metadata = {
  title: "PesteTot | Politica de confidentalitate",
};
