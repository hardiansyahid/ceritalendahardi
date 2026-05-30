import Home from "../page";
import greetings from "@/data/greetings.json";

export function generateStaticParams() {
  return Object.keys(greetings).map((greetingId) => ({ greetingId }));
}

export default function GreetingPage() {
  return <Home />;
}
