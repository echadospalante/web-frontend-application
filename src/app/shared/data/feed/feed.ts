// import images

import { faker } from "@faker-js/faker";

const categoriesData = [
  {
    id: 1,
    text: "Test",
    icon: "mdi mdi-chevron-right",
  },
  {
    id: 2,
    text: "Test",
    icon: "mdi mdi-chevron-right",
    badge: {
      text: "Test",
      color: "badge-soft-success",
    },
  },
  {
    id: 3,
    text: "Test",
    icon: "mdi mdi-chevron-right",
  },
  {
    id: 4,
    text: "Test",
    icon: "mdi mdi-chevron-right",
  },
  {
    id: 5,
    text: "Test",
    icon: "mdi mdi-chevron-right",
    badge: {
      text: "Test",
      color: "badge-soft-success",
    },
  },
];

const archiveData = [
  {
    id: 1,
    year: "2023",
    badgeCount: "03",
  },
  {
    id: 2,
    year: "2022",
    badgeCount: "06",
  },
  {
    id: 3,
    year: "2021",
    badgeCount: "05",
  },
  {
    id: 3,
    year: "2020",
    badgeCount: "05",
  },
];
const popularPosts = [
  {
    id: 1,
    imageSrc: faker.image.url({
      width: 1080,
      height: 750,
    }),
    title: "Test",
    date: "10 Abr, 2020",
  },
  {
    id: 2,
    imageSrc: faker.image.url({
      width: 1080,
      height: 750,
    }),
    title: "Test",
    date: "24 Mar, 2020",
  },
  {
    id: 3,
    imageSrc: faker.image.url({
      width: 1080,
      height: 750,
    }),
    title: "Test",
    date: "11 Mar, 2020",
  },
];

const tagsData = [
  { id: 1, name: "Test" },
  { id: 2, name: "Test" },
  { id: 3, name: "Test" },
  { id: 4, name: "Test" },
  { id: 5, name: "Test" },
  { id: 6, name: "Test" },
  { id: 7, name: "Test" },
];

export { categoriesData, archiveData, popularPosts, tagsData };
