import React from "react";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

const themes = [
  {
    title: "North-West Mountain Escape",
    months: "January – February",
    regions: [
      {
        name: "Kef",
        description:
          "A mountain-inspired atmosphere featuring authentic rural traditions, local products, and cozy winter vibes.",
        image: "/kef.jpg",
      },
      {
        name: "Béja",
        description:
          "Green landscapes, traditional Tunisian gastronomy, and a peaceful countryside experience.",
        image: "/beja.jpg",
      },
    ],
  },
  {
    title: "Saharan Desert Experience",
    months: "March – April",
    regions: [
      {
        name: "Tozeur",
        description:
          "Desert-inspired decor, oasis themes, palm groves, and magical evenings under the stars.",
        image: "/Tozeur.jpg",
      },
      {
        name: "Kébili",
        description:
          "An immersive southern experience with desert culture, warm colors, and traditional Saharan cuisine.",
        image: "/Kebili.jpg",
      },
    ],
  },
  {
    title: "Mediterranean Coastal Lifestyle",
    months: "May – June",
    regions: [
      {
        name: "Bizerte",
        description:
          "Fresh sea vibes, coastal craftsmanship, and Mediterranean flavors.",
        image: "/Bizerte.jpg",
      },
      {
        name: "Sousse",
        description:
          "A vibrant coastal atmosphere blending heritage, beaches, and summer culture.",
        image: "/Sousse.jpg",
      },
    ],
  },
  {
    title: "Spiritual & Heritage Center",
    months: "July – August",
    regions: [
      {
        name: "Kairouan",
        description:
          "A spiritual journey highlighting Islamic heritage, ancient architecture, and traditional craftsmanship.",
        image: "/Kairouan.jpg",
      },
      {
        name: "Monastir",
        description:
          "A historic coastal city combining spirituality, history, and Tunisian cultural identity.",
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
        subTitle="When AI Transforms Tunisian Traditions"
        align="left"
      />

      {/* Description */}
      <div className="mt-6 max-w-3xl text-gray-500 leading-relaxed text-base md:text-lg">
        <p>
          Maison Caméléon is an intelligent guest house that transforms every
          month to represent a different region of Tunisia.
        </p>
        <p className="mt-4">
          Through artificial intelligence and smart technologies, each visitor
          enjoys a fully personalized and immersive cultural experience —
          blending heritage preservation with technological innovation.
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
                    Featured Region
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
                    Explore This Experience →
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