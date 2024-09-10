type User = {
    name: string;
    age: number;
    job: string;
}

declare module "@fox/mediacloud-ux-sdk-poc" {
  const getUser: () => User;
}

declare module "@fox/mediacloud-ux-styleguide-poc" {
    const Card: React.FC;
}
