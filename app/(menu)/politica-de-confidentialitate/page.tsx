import Title from "@/app/components/layout/Title";
import type { Metadata } from "next";

const PrivacyPolicyPage = () => {
  return (
    <div className="w-full h-full">
      <section className="desktop:px-20 laptop:px-16 desktop:mb-6 laptop:mb-4">
        <div className="flex items-center desktop:gap-3 laptop:gap-2 desktop:mb-6 laptop:mb-4 desktop:text-base laptop:text-sm">
          <p>Acasa</p>
          <p className="text-primary">/</p>
          <p className="text-primary">Politica de confidentalitate</p>
        </div>
        <div className="desktop:mb-14 laptop:mb-10">
          <Title title="Politica de confidentalitate" />
        </div>
      </section>

      <section className="desktop:pl-20 laptop:pl-16 desktop:pr-96 laptop:pr-[30rem] mb-52"></section>
    </div>
  );
};

export default PrivacyPolicyPage;

export const metadata: Metadata = {
  title: "PesteTot | Politica de confidentalitate",
};
