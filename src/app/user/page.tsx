import Image from "next/image";
import userPageBackground from "/public/images/user_profile.png";

export default function UserPage() {
  return (
    <div>
      <main className="absolute -z-10 inset-0">
        <Image
          src={userPageBackground}
          alt="user page background"
          fill
          style={{ objectFit: "contain" }}
        />
      </main>
    </div>
  );
}
