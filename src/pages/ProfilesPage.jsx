import React from "react";
import ProfilesGrid from "../components/ProfilesGrid";

export default function ProfilesPage() {
  return (
    <section className="p-8 max-w-6xl mx-auto mt-8">
      <h2 className="text-3xl font-bold text-sky-400 mb-4">Astronaut Training Profiles</h2>
      <ProfilesGrid />
    </section>
  );
}
