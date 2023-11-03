import Title from "@/app/components/layout/Title";
import type { Metadata } from "next";

const TermsAndConditionsPage = () => {
  return (
    <div className="w-full h-full">
      <section className="desktop:px-20 laptop:px-16 desktop:mb-6 laptop:mb-4">
        <div className="flex items-center desktop:gap-3 laptop:gap-2 desktop:mb-6 laptop:mb-4 desktop:text-base laptop:text-sm">
          <p>Acasa</p>
          <p className="text-primary">/</p>
          <p className="text-primary">Termeni si conditii</p>
        </div>
        <div className="desktop:mb-14 laptop:mb-10">
          <Title title="Termeni si conditii" />
        </div>
      </section>

      <section className="desktop:pl-20 laptop:pl-16 desktop:pr-96 laptop:pr-[30rem] desktop:mb-24 laptop:mb-20 flex flex-col gap-8">
        <div>
          <h2 className="desktop:text-lg laptop:text-base font-medium mb-2">
            1. Acceptarea termenilor
          </h2>
          <div className="flex gap-2 desktop:text-base laptop:text-sm">
            <span className="desktop:w-6 laptop:w-5">1.1</span>
            <p className="text-justify">
              Accesând și utilizând acest site web
              <span className="ml-1 underline">pestetot.vercel.app</span>,
              sunteți de acord să respectați și să fiți obligat de acești
              termeni și condiții. Dacă nu sunteți de acord cu acești termeni,
              vă rugăm să nu utilizați site-ul.
            </p>
          </div>
        </div>
        <div>
          <h2 className="desktop:text-lg laptop:text-base font-medium mb-2">
            2. Drepturile de autor si proprietate intelectuală
          </h2>
          <div className="flex gap-2 desktop:text-base laptop:text-sm">
            <span className="desktop:w-6 laptop:w-5">2.1</span>
            <p className="text-justify">
              Toate conținuturile de pe site, inclusiv textele, imaginile,
              graficele, videoclipurile, logourile și mărcile comerciale, sunt
              proprietatea PesteTot SRL sau a licențiatorilor săi și sunt
              protejate de legile aplicabile privind proprietatea intelectuală.
            </p>
          </div>
        </div>
        <div>
          <h2 className="desktop:text-lg laptop:text-base font-medium mb-2">
            3. Produse și servicii
          </h2>
          <div className="flex gap-2 desktop:text-base laptop:text-sm">
            <span className="desktop:w-6 laptop:w-5">3.1</span>
            <p className="text-justify">
              Site-ul oferă produse pentru pescuit spre vânzare.
              Disponibilitatea, descrierile și prețurile produselor pot fi
              modificate fără notificare prealabilă.
            </p>
          </div>
        </div>
        <div>
          <h2 className="desktop:text-lg laptop:text-base font-medium mb-2">
            4. Comenzi și plăți
          </h2>
          <div className="flex gap-2 desktop:text-base laptop:text-sm">
            <span className="desktop:w-6 laptop:w-5">4.1</span>
            <p className="text-justify">
              Plasând o comandă, sunteți de acord să furnizați informații
              precise și complete. Sunteți responsabil de asigurarea exactității
              comenzii și a detaliilor de plată.
            </p>
          </div>
          <div className="flex gap-2 desktop:text-base laptop:text-sm">
            <span className="desktop:w-6 laptop:w-5">4.2</span>
            <p className="text-justify">
              Plățile sunt procesate prin portaluri de plată securizate.
              PesteTot SRL nu stochează informațiile dvs. de plată.
            </p>
          </div>
        </div>
        <div>
          <h2 className="desktop:text-lg laptop:text-base font-medium mb-2">
            5. Livrare și returnări
          </h2>
          <div className="flex gap-2 desktop:text-base laptop:text-sm">
            <span className="desktop:w-6 laptop:w-5">5.1</span>
            <p className="text-justify">
              Termenii și costurile de livrare sunt detaliate pe site. PesteTot
              SRL nu este responsabilă pentru întârzierile cauzate de furnizorii
              externi de transport.
            </p>
          </div>
          <div className="flex gap-2 desktop:text-base laptop:text-sm">
            <span className="desktop:w-6 laptop:w-5">5.2</span>
            <p className="text-justify">
              Politicile de returnare și schimb sunt disponibile pe site. Vă
              rugăm să revizuiți aceste politici înainte de a efectua o
              achiziție.
            </p>
          </div>
        </div>
        <div>
          <h2 className="desktop:text-lg laptop:text-base font-medium mb-2">
            6. Contul utilizatorului
          </h2>
          <div className="flex gap-2 desktop:text-base laptop:text-sm">
            <span className="desktop:w-6 laptop:w-5">2.1.</span>
            <p className="text-justify">
              Pentru a accesa anumite caracteristici ale site-ului, puteți fi
              obligat să vă creați un cont de utilizator. Sunteți responsabil
              pentru păstrarea confidențialității datelor de conectare și pentru
              restricționarea accesului la contul dvs.
            </p>
          </div>
          <div className="flex gap-2 desktop:text-base laptop:text-sm">
            <span className="desktop:w-6 laptop:w-5">2.2.</span>
            <p className="text-justify">
              Sunteți responsabil pentru toate activitățile care au loc sub
              contul dvs. și vă angajați să ne informați imediat despre orice
              utilizare neautorizată a contului sau orice altă încălcare a
              securității.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditionsPage;

export const metadata: Metadata = {
  title: "PesteTot | Termeni si conditii",
};
