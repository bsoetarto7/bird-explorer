import type { Bird } from '../models/Bird.js';

const INATURALIST_API_URL = 'https://api.inaturalist.org/v1';

type INaturalistPhoto = {
  url: string;
  license_code: string | null;
};

type INaturalistTaxon = {
  name: string;
  preferred_common_name?: string;
};

type INaturalistObservation = {
  id: number;
  taxon?: INaturalistTaxon;
  photos: INaturalistPhoto[];
};

type INaturalistResponse = {
  total_results: number;
  page: number;
  per_page: number;
  results: INaturalistObservation[];
};

export const getBirdObservations = async (): Promise<INaturalistResponse> => {
  const response = await fetch(
    `${INATURALIST_API_URL}/observations?iconic_taxa=Aves&photos=true&photo_license=cc0&per_page=10`,
  );

  if (!response.ok) {
    throw new Error(
      `iNaturalist request failed: ${response.status} ${response.statusText}`,
    );
  }

  const data = (await response.json()) as INaturalistResponse;

  return data;
};

export const getBirds = async (): Promise<Bird[]> => {
  const data = await getBirdObservations();

  return data.results.flatMap((observation) => {
    const { taxon } = observation;

    if (!taxon) {
      return [];
    }

    const photo = observation.photos.find(
      (photo) => photo.license_code === 'cc0',
    );

    if (!photo) {
      return [];
    }

    return [
      {
        id: observation.id,
        commonName: taxon.preferred_common_name ?? taxon.name,
        scientificName: taxon.name,
        imageUrl: photo.url,
      },
    ];
  });
};
