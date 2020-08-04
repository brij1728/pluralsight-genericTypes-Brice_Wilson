export class Building {
  //   address: string;
  //   numberOfFloors: number;

  constructor(public address: string, public numberOfFloors: number) {}
}

export const buildingData: Building[] = [
  { address: "Main Street", numberOfFloors: 10 },
  { address: "Central Avenue", numberOfFloors: 2 },
  { address: "Curious Way", numberOfFloors: 1 },
  { address: "Circle Drive", numberOfFloors: 4 },
];
