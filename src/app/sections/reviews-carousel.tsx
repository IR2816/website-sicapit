"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Review = {
  author: string;
  avatar: string;
  isLocalGuide: boolean;
  rating: number;
  time: string;
  text: string;
  attachedImage?: string;
};

type ReviewsCarouselProps = {
  reviews: Review[];
};

export function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="relative flex flex-col items-center min-h-[380px] sm:min-h-[320px] md:min-h-[280px]">
        {reviews.map((review, index) => {
          const isActive = index === active;
          return (
            <article 
              key={index} 
              className={`${isActive ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-8 pointer-events-none -z-10'} absolute top-0 left-0 w-full transition-all duration-700 ease-in-out`}
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 p-6 md:p-8 bg-surface-strong/50 border border-white/5 rounded-[24px] shadow-shadow hover:border-white/10 transition-colors">
                <div className="flex-shrink-0 relative">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden relative">
                    <Image src={review.avatar} alt={review.author} fill sizes="56px" className="object-cover" unoptimized />
                  </div>
                  {review.isLocalGuide && (
                    <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-0.5 shadow-sm">
                       <svg className="w-4 h-4 text-[#F4B400]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    </div>
                  )}
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-4 mb-2">
                    <div>
                      <h3 className="font-bold text-white text-base md:text-lg">{review.author}</h3>
                      {review.isLocalGuide && (
                        <p className="text-xs text-slate-400">Local Guide</p>
                      )}
                    </div>
                    <div className="text-xs text-slate-500 mt-1 sm:mt-0">
                      {review.time}
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'text-[#F4B400]' : 'text-slate-600'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    ))}
                  </div>
                  
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                    &quot;{review.text}&quot;
                  </p>

                  {review.attachedImage && (
                    <div className="mt-2 w-full max-w-[200px] h-[120px] rounded-xl overflow-hidden border border-white/10 hover:border-brand/40 transition-colors relative">
                      <Image src={review.attachedImage} alt={`Ulasan dari ${review.author}`} fill sizes="200px" className="object-cover transition-transform hover:scale-105 duration-500" />
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="flex justify-center gap-2 mt-4" aria-label="Indikator ulasan">
        {reviews.map((review, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Lihat ulasan ${index + 1}`}
            className={`${index === active ? 'w-8 bg-brand' : 'w-2 bg-white/20 hover:bg-white/40'} h-2 rounded-full transition-all duration-300`}
            onClick={() => setActive(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
