interface ICharacter {
  id: number;
  name: string;
  image: string;
  location: ILocation;
  origin: IOrigin;
  species: string;
  status: string;
  gender: string;
  url: string;
}

interface ILocation {
  name: string;
}

interface IOrigin {
  name: string;
}

export { ICharacter };
