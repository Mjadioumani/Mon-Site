import { Star } from 'lucide-react';
import Image from 'next/image';

const REVIEWS = [
  {
    name: 'Mel Rhodes',
    role: 'Creative Director',
    quote: "Patricia's eye for detail is unmatched. She took our vision and turned it into a digital experience that our users absolutely love.",
    avatar: 'https://picsum.photos/seed/mel/100/100'
  },
  {
    name: 'Jordan Baxter',
    role: 'Product Lead',
    quote: "Working with Patricia was seamless. She doesn't just design; she solves problems. Our conversion rate increased by 40% after the redesign.",
    avatar: 'https://picsum.photos/seed/jordan/100/100'
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-20 border-t border-border/10">
      <div className="mb-10">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Kind Words from Clients</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {REVIEWS.map((review, idx) => (
          <div key={idx} className="p-8 md:p-10 bg-card border border-border/10 rounded-2xl flex flex-col">
            <div className="flex gap-0.5 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm mb-10 leading-relaxed text-muted-foreground flex-grow">
              "{review.quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-muted border border-border/20">
                <Image src={review.avatar} alt={review.name} fill className="object-cover grayscale" />
              </div>
              <div>
                <h4 className="text-[11px] font-bold text-white uppercase tracking-wider">{review.name}</h4>
                <p className="text-[9px] text-muted-foreground uppercase tracking-widest mt-0.5">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
