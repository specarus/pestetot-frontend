import Title from "@/app/components/layout/Title";

const AboutUsPage = () => {
  return (
    <div className="w-full h-full">
      <section className="px-20 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <p>Acasa</p>
          <p className="text-primary">/</p>
          <p className="text-primary">Despre noi</p>
        </div>
        <div className="mb-14">
          <Title title="Despre noi" />
        </div>
      </section>

      <section className="pl-20 pr-96 mb-24 flex flex-col gap-8"></section>
    </div>
  );
};

export default AboutUsPage;
