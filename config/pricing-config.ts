export const PLANS = [
  {
    name: "Free",
    slug: "free",
    quota: 5,
    pagesPerPdf: 5,
    price: {
      amount: 0,
      priceIds: {
        test: "",
        production: "",
      },
    },
  },
  {
    name: "Pro",
    slug: "pro",
    quota: 15,
    pagesPerPdf: 25,
    price: {
      amount: 19,
      priceIds: {
        test: process.env.STRIPE_PLAN!,
        production: "",
      },
    },
  },
];
