export interface IPlace {
  name: string;
  company: string;
  href: string;
  id: string;
  location: {
    city: string;
    country: string;
    latitude: number;
    longitude: number;
  };
  photoUrl?: string;
}
