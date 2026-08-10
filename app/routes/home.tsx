import HeroBanner from "~/components/home/HeroBanner";
import type { Route } from "./+types/home";
import Faq from "~/components/home/faq";
import Testimonials from "~/components/home/Testimonials";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Faq></Faq>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
}
