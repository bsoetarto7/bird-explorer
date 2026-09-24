import { getBirds } from '../api/iNaturalist.js';

export const resolvers = {
  Query: {
    birds: () => getBirds(),
  },
};
