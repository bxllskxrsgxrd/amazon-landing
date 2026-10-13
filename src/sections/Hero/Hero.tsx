import { useEffect, useRef, useState } from 'react';

import { BonusCard } from '@/components/BonusCard/BonusCard';
import { CTAButton } from '@/components/CTAButton/CTAButton';

import heroImage from '@/assets/images/hero/hero.webp';

import './_hero.scss';

export function Hero() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);

  const offerUrl =
    document.getElementById('root')?.dataset.offerUrl ?? '#';

  useEffect(() => {
    const element = ctaRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsFixed(
        !entry.isIntersecting &&
        entry.boundingClientRect.bottom <= 0
      );
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero">
      <div className="hero__image-wrapper">
        <img className="hero__image" src={heroImage} alt="" />
      </div>

      <BonusCard />

      <div className="hero__actions">
        <div className="hero__cta-slot" ref={ctaRef}>
          <div
            className={`hero__cta ${isFixed ? 'hero__cta--fixed' : ''}`}
          >
            <CTAButton href={offerUrl} />
          </div>
        </div>

        <div className="hero__platforms">
          {/* iOS и Android */}
        </div>
      </div>
    </section>
  );
}