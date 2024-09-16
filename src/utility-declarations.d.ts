type User = {
  name: string;
  age: number;
  job: string;
};

declare module "@fox/mediacloud-ux-styleguide-poc" {
  const Card: React.FC;
  const Button: React.FC<{ onClick: () => void; text: string }>;
  const CollectionCards: React.FC<{
    items: { title: string; url: string }[];
  }>;
}

declare module "styled-components";

declare namespace JSX {
  interface IntrinsicElements {
    "collection-cards": {
      items: string;
    };
  }
}
