export interface Skatepark {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
}

export const skateparks: Skatepark[] = [
  {
    id: "lagrange",
    name: "LaGrange Skatepark",
    location: "LaGrange, KY",
    description:
      "A well-kept, modern outdoor park with smooth concrete, bowls, and ledges. Great for skaters of all levels.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/34/Lagrange-skatepark.jpg",
  },
  {
    id: "extreme-park",
    name: "Dave Armstrong Extreme Park",
    location: "Louisville, KY",
    description:
      "A legendary 40,000 sq ft park under the bridge in downtown Louisville. Features massive vert ramps, bowls, and street elements.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/94/Extreme-park-louisville.jpg",
  },
];
