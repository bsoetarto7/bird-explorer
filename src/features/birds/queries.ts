import { gql, type TypedDocumentNode } from '@apollo/client';

import type { Bird } from 'features/birds/types';

type GetBirdsData = {
  birds: Bird[];
};

export const GET_BIRDS: TypedDocumentNode<GetBirdsData> = gql`
  query GetBirds {
    birds {
      id
      commonName
      scientificName
      imageUrl
    }
  }
`;
