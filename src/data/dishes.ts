import { Dish } from "@/types";
import { prawnDishBg} from "@/asset/bg/index"


export const dishes: Dish[] = [
  {
    id: "masala-dosa",
    name: "Masala Dosa",
    description: "Crispy rice crepe filled with spiced potato mash, served with coconut chutney and sambar.",
    price: "₹180",
    image:
      prawnDishBg,
    spiceLevel: "Medium",
    servings: "Serves 1",
  },
  {
    id: "butter-chicken",
    name: "Butter Chicken",
    description: "Slow-cooked tomato gravy with tender chicken simmered in homemade butter and cream.",
    price: "₹320",
     image:
      prawnDishBg,
    spiceLevel: "Mild",
    servings: "Serves 2",
  },
  {
    id: "paneer-tikka",
    name: "Paneer Tikka",
    description: "Char-grilled cottage cheese cubes marinated with yogurt, Kashmiri chilli, and house spices.",
    price: "₹260",
  image:
      prawnDishBg,
    spiceLevel: "Medium",
    servings: "Serves 2",
  },
  {
    id: "veg-biryani",
    name: "Hyderabadi Veg Biryani",
    description: "Layered basmati rice with farm vegetables, mint, saffron, and caramelized onions.",
    price: "₹280",
   image:
      prawnDishBg,
    spiceLevel: "Hot",
    servings: "Serves 2",
  },
  {
    id: "fish-curry",
    name: "Coconut Fish Curry",
    description: "Fresh catch simmered in coastal style coconut gravy with curry leaves and mustard seeds.",
    price: "₹340",
    image:
      prawnDishBg,
    spiceLevel: "Medium",
    servings: "Serves 2",
  },
  {
    id: "dal-tadka",
    name: "Dal Tadka",
    description: "Home-style yellow lentils tempered with ghee, garlic, cumin, and dry chillies.",
    price: "₹180",
  image:
      prawnDishBg,
    spiceLevel: "Mild",
    servings: "Serves 2",
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun",
    description: "Soft khoya dumplings soaked in saffron rose syrup, garnished with pistachios.",
    price: "₹140",
   image:
      prawnDishBg,
    spiceLevel: "Sweet",
    servings: "4 pieces",
  },
  {
    id: "millet-khichdi",
    name: "Millet Khichdi",
    description: "Comforting foxtail millet cooked with seasonal vegetables, turmeric, and clarified butter.",
    price: "₹220",
   image:
      prawnDishBg,
    spiceLevel: "Light",
    servings: "Serves 2",
  },
];
