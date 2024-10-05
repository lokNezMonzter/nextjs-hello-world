import Image from "next/image";
import landingPageBackground from "/public/images/background.webp";

export default function Home() {
  return (
    <div>
      <h1 className="text-white text-6xl text-center font-semibold my-2">
        Hello World
      </h1>
      <main className="absolute -z-10 inset-0">
        <Image
          src={landingPageBackground}
          alt="landing page background"
          fill
          style={{ objectFit: "cover" }}
        />
      </main>
    </div>
  );
}
