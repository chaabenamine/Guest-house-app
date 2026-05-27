import React from "react";
import Title from "../components/Title";

const experiences = [
  {
    title: "Parcours Numérique Interactif",
    desc: "Explorez la Tunisie à travers des écrans interactifs intelligents présentant l'histoire, les paysages et les traditions de différentes régions.",
    icon: "🖥️",
  },
  {
    title: "Aventures en Réalité Virtuelle",
    desc: "Voyagez à travers la Tunisie grâce à la RV : visitez le désert du Sahara, explorez d'anciennes médinas et découvrez des villages de montagne.",
    icon: "🥽",
  },
  {
    title: "Guide Chatbot Culturel",
    desc: "Discutez avec notre assistant IA qui partage des histoires, des légendes et des faits historiques sur les régions tunisiennes.",
    icon: "🤖",
  },
  {
    title: "Ateliers d'Artisanat Traditionnel",
    desc: "Apprenez la poterie, le tissage, la broderie et le travail du cuivre avec des artisans tunisiens locaux.",
    icon: "🧵",
  },
  {
    title: "Soirée Contes et Légendes Tunisiens",
    desc: "Profitez de soirées magiques où des conteurs partagent des contes et du folklore traditionnels tunisiens.",
    icon: "🔥",
  },
  {
    title: "Démonstration de Costumes Traditionnels",
    desc: "Découvrez comment sont confectionnés les vêtements traditionnels tunisiens et apprenez la signification culturelle de chaque modèle.",
    icon: "👗",
  },
  {
    title: "Cours de Cuisine Tunisienne",
    desc: "Apprenez à cuisiner des plats tunisiens célèbres comme le couscous, le brik et les desserts traditionnels.",
    icon: "🍲",
  },
  {
    title: "Soirées Musique Tunisienne Live",
    desc: "Vivez d'authentiques représentations de musique tunisienne avec des instruments traditionnels.",
    icon: "🎶",
  },
  {
    title: "Spots Photos Culturels",
    desc: "Prenez de superbes photos dans des espaces inspirés des régions les plus emblématiques de la Tunisie.",
    icon: "📸",
  },
];

const Experience = () => {
  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-32">

      <Title
        title="Expériences Culturelles"
        subTitle="Découvrez la culture tunisienne authentique grâce à des activités immersives à la Maison Caméléon."
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