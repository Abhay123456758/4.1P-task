import { faker } from "@faker-js/faker";

export const generateArticles = (count = 5) => {
  return Array.from({ length: count }).map(() => ({
    title: faker.lorem.sentence(),
    author: faker.name.findName(),
    description: faker.lorem.paragraph(),
    image: `https://picsum.photos/200/300?random=${Math.random()}`,
  }));
};
