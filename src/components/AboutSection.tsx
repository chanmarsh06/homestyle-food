import MotionWrapper from "@/components/MotionWrapper";

const highlights = [
  {
    title: "Farm-to-table ingredients",
    description: "We source vegetables locally every morning and grind spices at home for maximum flavor.",
  },
  {
    title: "Family recipes",
    description: "Each dish tells a story from Amma&apos;s coastal upbringing and decades of culinary passion.",
  },
  {
    title: "Custom spice levels",
    description: "Personalize your spice preference and dietary needs for every order.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="tailwind-container section-padding">
      <MotionWrapper className="mx-auto max-w-3xl text-center">
        <h2 className="section-heading">Meet Chef Amma</h2>
        <p className="section-subtitle">
          Amma&apos;s Kitchen began as neighborhood tiffin service and blossomed into a heartfelt food delivery that
          celebrates warmth, family, and nostalgia in every bite.
        </p>
      </MotionWrapper>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((highlight) => (
          <MotionWrapper key={highlight.title} className="glass-card p-6 text-left">
            <h3 className="text-xl font-semibold text-orange-500">{highlight.title}</h3>
            <p className="mt-2 text-sm text-amber-700">{highlight.description}</p>
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
}
