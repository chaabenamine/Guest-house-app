import React from "react";
import Title from "../components/Title";

const experiences = [
  {
    title: "Interactive Digital Journey",
    desc: "Explore Tunisia through smart interactive screens presenting history, landscapes, and traditions of different regions.",
    icon: "🖥️",
  },
  {
    title: "Virtual Reality Adventures",
    desc: "Travel through Tunisia using VR: visit the Sahara desert, explore ancient medinas, and discover mountain villages.",
    icon: "🥽",
  },
  {
    title: "Cultural Chatbot Guide",
    desc: "Chat with our AI assistant that shares stories, legends, and historical facts about Tunisian regions.",
    icon: "🤖",
  },
  {
    title: "Traditional Craft Workshops",
    desc: "Learn pottery, weaving, embroidery, and copper crafting with local Tunisian artisans.",
    icon: "🧵",
  },
  {
    title: "Tunisian Stories & Legends Night",
    desc: "Enjoy magical evenings where storytellers share traditional Tunisian tales and folklore.",
    icon: "🔥",
  },
  {
    title: "Traditional Costume Demonstration",
    desc: "Discover how traditional Tunisian clothing is made and learn the cultural meaning behind each design.",
    icon: "👗",
  },
  {
    title: "Tunisian Cooking Classes",
    desc: "Learn to cook famous Tunisian dishes like couscous, brik, and traditional desserts.",
    icon: "🍲",
  },
  {
    title: "Live Tunisian Music Evenings",
    desc: "Experience authentic Tunisian music performances with traditional instruments.",
    icon: "🎶",
  },
  {
    title: "Cultural Photo Spots",
    desc: "Take beautiful photos in spaces inspired by Tunisia’s most iconic regions.",
    icon: "📸",
  },
];

const Experience = () => {
  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-32">

      <Title
        title="Cultural Experiences"
        subTitle="Discover authentic Tunisian culture through immersive activities at Maison Caméléon."
      />

      <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300 border"
          >
            <div className="text-4xl mb-4">{exp.icon}</div>

            <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>

            <p className="text-gray-600 text-sm">{exp.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Experience;