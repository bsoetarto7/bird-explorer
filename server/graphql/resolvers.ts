const birds = [
  {
    id: 1,
    commonName: 'American Robin',
    scientificName: 'Turdus migratorius',
    imageUrl: 'https://placehold.co/400x300?text=American+Robin',
  },
  {
    id: 2,
    commonName: 'Bald Eagle',
    scientificName: 'Haliaeetus leucocephalus',
    imageUrl: 'https://placehold.co/400x300?text=Bald+Eagle',
  },
];

export const resolvers = {
  Query: {
    birds: () => birds,
  },
};
