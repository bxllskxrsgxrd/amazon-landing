import { ReviewCard } from '@/components/ReviewCard/ReviewCard';

import './_reviews.scss';

const reviews = [
	{ name: 'Maya R.', date: '2 hours ago', text: 'Auszahlung in 5 Minuten! Unglaublich.' },
	{ name: 'Leo K.', date: '5 hours ago', text: 'Läuft perfekt auf dem Handy, keine Ruckler.' },
	{ name: 'Nina P.', date: '1 day ago', text: 'Die Freispiele haben mir 800€ gebracht!' },
	{ name: 'Omar D.', date: '3 days ago', text: 'Book of Dead läuft einwandfrei. Top!' },
	{ name: 'Emma T.', date: '4 days ago', text: 'Einzahlung mit Klarna war in 10 Sekunden erledigt.' },
	{ name: 'Noah W.', date: '1 week ago', text: 'Perfekt für eine schnelle Runde zwischendurch.' },
	{ name: 'Ava M.', date: '2 weeks ago', text: 'Der Willkommensbonus ist echt großzügig.' },
	{ name: 'Sam B.', date: '3 weeks ago', text: 'Die Grafik von Big Bass ist der Hammer.' },
	{ name: 'Chloe L.', date: '1 month ago', text: 'Meine Stamm-App für Slots.' },
];

export function Reviews() {
	return (
		<section className="reviews">
			<header className="reviews__header">
				<h2 className="reviews__title">Echte Spieler. Echte Siege.</h2>

				<div className="reviews__rating">
					<div className="reviews__score">
						<span className="reviews__stars" aria-label="4,8 von 5 Sternen">★★★★★</span>
						<span>4.8 out of 5</span>
					</div>
					<p className="reviews__count">based on 12,845 reviews</p>
				</div>
			</header>

			<div className="reviews__grid">
				{reviews.map((review) => (
					<ReviewCard key={review.name} {...review} />
				))}
			</div>
		</section>
	);
}
