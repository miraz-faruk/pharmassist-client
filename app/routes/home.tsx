import HeroBanner from "~/components/home/HeroBanner";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "PharmASSIST" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <HeroBanner></HeroBanner>
    </div>
  );
}
