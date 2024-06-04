import {
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  aboutFirstImage,
  aboutSecondImage,
  aboutThirdImage,
  costco,
  kuka,
  sleemon,
  samsClub,
  amazon,
} from "../utils";

export const navLists = ["Store", "About us", "Video Galleries", "Faq"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Factory direct supply",
      "250+ skilled workers",
      "Quality-assured production",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: [
      "Market-driven development",
      "100+ patents. ",
      "Rapid prototyping.",
    ],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "Fastest delivery cycle",
      "Innovative supply chain",
      "One stop warehousing service.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["Price is good", "Product is excellent."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Sales Policy",
  "Our Store",
  "FAQ",
];


export const aboutSections = [
  {
    img: aboutFirstImage,
    title: 'Our why',
    text: 'We believe the more we travel, the better we all become. That’s why our travel essentials are designed to last (and last) for every trip to come, so you can get out there and explore.'
  },
  {
    img: aboutSecondImage,
    title: 'Our approach',
    text: 'We’re travelers, and our experiences inform our approach to the things we make. Simply put: our luggage is designed by travelers, for travelers. At Away, you’ll find suitcases, bags, and accessories built with thoughtful details to make each and every journey more seamless. We’re transforming travel to inspire you to get away more and see more of the world along with us.'
  },
  {
    img: aboutThirdImage,
    title: 'Our travel essentials',
    text: 'Our suitcases, bags, and accessories use materials—from polycarbonate and aluminum to water-resistant nylons—that are not only sleek and lightweight, but also high-performance, durable, and ready for whatever comes up along the way. When it comes to our luggage, the details matter, especially since they’re intentional and functional, to make the journey (from packing to unpacking and storing) seamless.'
  }
];

// testimonials on about-us page.

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "costco",
    img: costco,
  },
  {
    id: 2,
    name: "kuka",
    img: kuka,
  },
  {
    id: 3,
    name: "sleemon",
    img: sleemon,
  },
  {
    id: 4,
    name: "sams-club",
    img: samsClub,
  },
  {
    id: 5,
    name: "amazon",
    img: amazon,
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

