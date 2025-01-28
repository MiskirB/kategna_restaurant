import images from "./images";

const wines = [
  {
    title: "Opus One",
    price: "$350",
    tags: "US | Bottle",
  },
  {
    title: "Château Margaux",
    price: "$780",
    tags: "FR | Bottle",
  },
  {
    title: "Sassicaia",
    price: "$450",
    tags: "IT | 750 ml",
  },
  {
    title: "Penfolds Grange",
    price: "$620",
    tags: "AU | 750 ml",
  },
  {
    title: "Dom Pérignon Vintage",
    price: "$290",
    tags: "FR | 750 ml",
  },
];

const cocktails = [
  {
    title: "Golden Bliss Martini",
    price: "$45",
    tags: "Gold-infused vodka | Elderflower liqueur | Lemon juice | Edible gold leaf",
  },
  {
    title: "Smoked Old Fashioned",
    price: "$40",
    tags: "Bourbon | Smoked maple syrup | Angostura bitters | Orange zest",
  },
  {
    title: "Rose Petal Gin Fizz",
    price: "$35",
    tags: "Gin | Rose water | Lemon juice | Egg white | Soda water | Dried rose petals",
  },
  {
    title: "Truffle Negroni",
    price: "$50",
    tags: "Gin | Sweet vermouth | Campari | Truffle oil | Orange garnish",
  },
  {
    title: "Caviar Martini",
    price: "$70",
    tags: "Vodka | Dry vermouth | Lemon twist | Caviar garnish",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export default { wines, cocktails, awards };
