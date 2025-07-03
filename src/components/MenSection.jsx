import { useParams } from "react-router-dom";

// Sample content map
const menSections = {
  preppy_shores: {
    title: "Preppy Shores",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w26/MS32LH4-4x5-men-startpage-wk26.jpg?imwidth=4800",
    description:
      "Classic and coastal vibes for men. Shop the new Preppy Shores collection now.",
  },
  rugged_luxe: {
    title: "Rugged Luxe",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w26/MS32LH3-4x5-men-startpage-wk26.jpg?imwidth=1870",
    description:
      "Bold, confident style made for modern men. Explore Rugged Luxe.",
  },
  linen_looks: {
    title: "Linen Looks",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w24/ce/Linen-CE-wk24.jpg?imwidth=1536",
    description: "Stay fresh with lightweight linen. Discover the Linen Looks.",
  },
  shirts: {
    title: "SHIRTS",
  },
};

export default function MenSection() {
  const { sectionId } = useParams(); // Get the part after /men/

  const section = menSections[sectionId]; // Look it up from the object

  if (!section) {
    return <div className="p-6 text-red-500">404: Section not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{section.title}</h1>
      <img
        src={section.image}
        alt={section.title}
        className="w-full max-w-3xl mb-4"
      />
      <p>{section.description}</p>
      {console.log(section.title)}
    </div>
  );
}
