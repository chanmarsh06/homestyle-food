import MotionWrapper from "@/components/MotionWrapper";

const testimonials = [
  {
    id: "ananya",
    name: "Ananya R.",
    location: "Whitefield",
    message: "Amma&apos;s Sunday biryani brings my childhood memories back! The flavors are so comforting and consistent every time.",
  },
  {
    id: "sanjay",
    name: "Sanjay K.",
    location: "Indiranagar",
    message: "The on-time delivery and custom spice options make weekday dinners effortless for our family.",
  },
  {
    id: "meera",
    name: "Meera D.",
    location: "HSR Layout",
    message: "I love the rotating menu and healthy millet bowls. It feels like home-cooked food made just for me!",
  },
];

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="tailwind-container section-padding">
      <MotionWrapper className="mx-auto max-w-3xl text-center">
        <h2 className="section-heading">Loved by our community</h2>
        <p className="section-subtitle">
          Hear from families who enjoy Amma&apos;s freshly cooked meals for their everyday cravings and celebrations.
        </p>
      </MotionWrapper>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <MotionWrapper key={testimonial.id} delay={index * 0.1} className="glass-card h-full p-6 text-left">
            <p className="text-sm text-amber-700">“{testimonial.message}”</p>
            <div className="mt-5">
              <p className="text-sm font-semibold text-orange-500">{testimonial.name}</p>
              <p className="text-xs text-amber-600">{testimonial.location}</p>
            </div>
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
}
