import Image from "next/image";
import analyticsDashboardBackground from "/public/images/analytics_dashboard.webp";

export default function AnalyticsPage() {
  return (
    <div>
      <main className="absolute -z-10 inset-0">
        <Image
          src={analyticsDashboardBackground}
          alt="analytics dashboard image"
          fill
          style={{ objectFit: "contain" }}
        />
      </main>
    </div>
  );
}
