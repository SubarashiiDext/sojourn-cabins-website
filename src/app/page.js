import Link from "next/link";
import LocationA from "./LocationA/page";

export default function Home() {
  return (
    <div>
      <h1 className="text-center font-bold text-4xl text-gray-700">Homepage</h1>
      <Link href="LocationA" >LocationA</Link>
    </div>
  );
}
