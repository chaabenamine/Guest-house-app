import React from "react";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

const themes = [
  {
    title: "Escapade en Montagne du Nord-Ouest",
    months: "Janvier – Février",
    regions: [
      {
        name: "Kef",
        description:
          "Une atmosphère inspirée de la montagne, mettant en valeur des traditions rurales authentiques, des produits locaux et des ambiances hivernales chaleureuses.",
        image: "/kef.jpg",
      },
      {
        name: "Béja",
        description:
          "Des paysages verdoyants, une gastronomie tunisienne traditionnelle et une expérience paisible à la campagne.",
        image: "/beja.jpg",
      },
    ],
  },
  {
    title: "Expérience du Désert Saharien",
    months: "Mars – Avril",
    regions: [
      {
        name: "Tozeur",
        description:
          "Décor inspiré du désert, thèmes d'oasis, palmeraies et soirées magiques à la belle étoile.",
        image: "/Tozeur.jpg",
      },
      {
        name: "Kébili",
        description:
          "Une expérience immersive dans le sud avec la culture du désert, des couleurs chaudes et une cuisine saharienne traditionnelle.",
        image: "/Kebili.jpg",
      },
    ],
  },
  {
    title: "Art de Vivre Côtier Méditerranéen",
    months: "Mai – Juin",
    regions: [
      {
        name: "Bizerte",
        description:
          "Brise marine fraîche, artisanat côtier et saveurs méditerranéennes.",
        image: "/Bizerte.jpg",
      },
      {
        name: "Sousse",
        description:
          "Une atmosphère côtière vibrante mêlant patrimoine, plages et culture estivale.",
        image: "/Sousse.jpg",
      },
    ],
  },
  {
    title: "Centre Spirituel et Patrimonial",
    months: "Juillet – Août",
    regions: [
      {
        name: "Kairouan",
        description:
          "Un voyage spirituel mettant en valeur le patrimoine islamique, l'architecture ancienne et l'artisanat traditionnel.",
        image: "/Kairouan.jpg",
      },
      {
        name: "Monastir",
        description:
          "Une ville côtière historique alliant spiritualité, histoire et identité culturelle tunisienne.",
        image: "/Monastir.jpg",
      },
    ],
  },
];

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col pt-28 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">

      {/* Page Title */}
      <Title
        title="Maison Caméléon"
        subTitle="Quand l'IA Transforme les Traditions Tunisiennes"
        align="left"
      />

      {/* Description */}
      <div className="mt-6 max-w-3xl text-gray-500 leading-relaxed text-base md:text-lg">
        <p>
          La Maison Caméléon est une maison d'hôtes intelligente qui se transforme chaque
          mois pour représenter une région différente de la Tunisie.
        </p>
        <p className="mt-4">
          Grâce à l'intelligence artificielle et aux technologies intelligentes, chaque visiteur
          profite d'une expérience culturelle totalement personnalisée et immersive —
          alliant préservation du patrimoine et innovation technologique.
        </p>
      </div>

      {/* Themes Section */}
      <div className="mt-20">

        {themes.map((theme, themeIndex) => (
          <div key={themeIndex} className="mb-24">

            {/* Theme Header */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair text-gray-800">
                {theme.title}
              </h2>
              <p className="text-sm text-gray-400 mt-2 tracking-wide">
                {theme.months}
              </p>
            </div>

            {/* Regions */}
            {theme.regions.map((region, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-10 py-12 border-b border-gray-200 last:border-0 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >

                {/* Image */}
                <img
                  src={region.image}
                  alt={region.name}
                  className="md:w-1/2 w-full max-h-[420px] rounded-xl object-cover cursor-pointer hover:opacity-90 transition duration-300"
                />

                {/* Text Content */}
                <div className="md:w-1/2 flex flex-col gap-4 text-left">

                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    Région En Vedette
                  </p>

                  <h3 className="text-3xl font-playfair text-gray-800">
                    {region.name}
                  </h3>

                  <p className="text-gray-500 leading-relaxed">
                    {region.description}
                  </p>

                  <button
                    onClick={() => {
                      navigate("/rooms");
                      scrollTo(0, 0);
                    }}
                    className="mt-4 w-fit text-primary hover:underline text-sm font-medium transition"
                  >
                    Explorer Cette Expérience →
                  </button>

                </div>
              </div>
            ))}

          </div>
        ))}

      </div>
    </div>
  );
};

export default AboutUs;