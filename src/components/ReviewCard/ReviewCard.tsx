import avatarImage from '@/assets/images/avatar.png';

import './_reviewCard.scss';

type ReviewCardProps = {
	name: string;
	date: string;
	text: string;
};

export function ReviewCard({ name, date, text }: ReviewCardProps) {
	return (
		<article className="review-card">
			<div className="review-card__author">
				<img className="review-card__avatar" src={avatarImage} alt="" />
				<div>
					<h3 className="review-card__name">{name}</h3>
					<p className="review-card__date">{date}</p>
				</div>
			</div>

			<div className="review-card__stars" aria-label="5 von 5 Sternen">★★★★★</div>
			<p className="review-card__text">{text}</p>
		</article>
	);
}
