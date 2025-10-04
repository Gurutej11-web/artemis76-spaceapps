export default function InfoPanel() {
  return (
    <section id="info" className="p-8 max-w-6xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-3">Why this matters for Earth</h2>
      <div className="grid md:grid-cols-2 gap-6 text-slate-300">
        <div>
          <h3 className="font-semibold">Disaster Response</h3>
          <p className="text-sm mt-1">
            Astronaut photos from the Cupola help map wildfires, floods, and other events so responders can act faster.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Climate & Environmental Science</h3>
          <p className="text-sm mt-1">
            Long-term observations from the ISS track glacier change, urban growth, vegetation health, and coastal erosion.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Human Health & Research</h3>
          <p className="text-sm mt-1">
            Training in neutral buoyancy supports research into human physiology and leads to medical and robotic innovations on Earth.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Engineering & Robotics</h3>
          <p className="text-sm mt-1">
            Spacewalk training improves tool design and robotic techniques used in underwater engineering and rescue robotics.
          </p>
        </div>
      </div>
    </section>
  );
}
