import Image from "next/image";
import settingsPageBackground from "/public/images/settings.png";

export default function SettingsPage() {
  return (
    <div>
      <main className="absolute -z-10 inset-0">
        <Image
          src={settingsPageBackground}
          alt="settings page image"
          fill
          style={{ objectFit: "scale-down" }}
        />
      </main>
    </div>
  );
}
