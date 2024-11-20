import { faker } from "@faker-js/faker";

export const generateTutorials = (count = 5) => {
  return Array.from({ length: count }).map(() => ({
    title: faker.lorem.sentence(),
    level: faker.random.arrayElement(["Beginner", "Intermediate", "Advanced"]),
    description: faker.lorem.paragraph(),
    image: `https://picsum.photos/300/200?random=${Math.random()}`,
  }));
};
