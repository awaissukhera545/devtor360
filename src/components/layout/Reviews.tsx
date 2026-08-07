import Image from "next/image";

type Review = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

const REVIEWS: Review[] = [
  {
    name: "Ayesha Khan",
    role: "Freelance Designer",
    quote:
      "I test and compare the best project management software for collaborating with a team, hitting deadlines.",
    avatar: "/images/avatars/avatar-1.jpg",
  },
  {
    name: "Zainab Malik",
    role: "Product Manager",
    quote:
      "I rely on this to keep my team aligned, track every deadline, and ship projects without last-minute surprises.",
    avatar: "/images/avatars/avatar-2.jpg",
  },
  {
    name: "Sana Tariq",
    role: "Marketing Lead",
    quote:
      "I compare project tools often, and this is the first one my whole team actually enjoys using every day.",
    avatar: "/images/avatars/avatar-3.jpg",
  },
  {
    name: "Bilal Ahmed",
    role: "Software Engineer",
    quote:
      "I needed something that fit my workflow, not the other way around — this made collaboration effortless.",
    avatar: "/images/avatars/avatar-4.jpg",
  },
  {
    name: "Hira Sheikh",
    role: "UI/UX Designer",
    quote:
      "I hand off designs to developers constantly, and this tool keeps everyone on the same page, every time.",
    avatar: "/images/avatars/avatar-5.jpg",
  },
  {
    name: "Rukhsana Bibi",
    role: "Operations Head",
    quote:
      "I manage multiple teams, and this is the only tracker that has kept every one of our deadlines on schedule.",
    avatar: "/images/avatars/avatar-6.jpg",
  },
];

const ROW1 = REVIEWS.slice(0, 3);
const ROW2 = REVIEWS.slice(3);

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="w-[260px] shrink-0 rounded-xl border border-border bg-card p-5 text-left shadow-sm sm:w-[300px] sm:p-6">
      <div className="flex items-center gap-3">
        <Image
          src={review.avatar}
          alt={`Portrait of ${review.name}`}
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <p className="text-lg font-bold text-foreground">{review.name}</p>
          <p className="text-sm text-muted-foreground">{review.role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {review.quote}
      </p>
    </article>
  );
}

function ReviewRow({
  reviews,
  offset,
}: {
  reviews: Review[];
  offset?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden ${
        offset ? "-translate-x-[80px] sm:-translate-x-[162px]" : ""
      }`}
    >
      <div className="flex w-max animate-marquee items-center gap-6">
        {[...reviews, ...reviews].map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section aria-label="Customer reviews" className="bg-muted py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-content px-6 text-center lg:px-8">
        <p className="text-eyebrow uppercase text-primary">Reviews</p>
        <h2 className="mt-3 text-[1.875rem] font-bold leading-[1.25] text-foreground sm:text-[2.25rem] sm:leading-[1.3] lg:text-[2.5rem] lg:leading-[1.5]">
          Reviews from our customers
        </h2>
      </div>

      <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6 lg:mt-12">
        <ReviewRow reviews={ROW1} />
        <ReviewRow reviews={ROW2} offset />
      </div>
    </section>
  );
}
