import './_benefits.scss';

type BenefitIcon = 'crown' | 'diamond' | 'star';

const benefits: Array<{ icon: BenefitIcon; title: string; description: string }> = [
	{
		icon: 'crown',
		title: 'Bonus-\nfunktionen',
		description: 'Freispiele\nund mehr!',
	},
	{
		icon: 'diamond',
		title: 'Hohe\nMultiplikatoren',
		description: 'Gewinne\nvervielfachen!',
	},
	{
		icon: 'star',
		title: 'Grosse\nJackpots',
		description: 'Deine Chance\nauf den großen\nGewinn!',
	},
];

function BenefitIcon({ name }: { name: BenefitIcon }) {
	if (name === 'crown') {
		return (
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<path d="m4 8 4 3 4-6 4 6 4-3-2 10H6L4 8Z" />
				<path d="M7 21h10" />
			</svg>
		);
	}

	if (name === 'diamond') {
		return (
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<path d="M7 5h10l4 5-9 10-9-10 4-5Z" />
				<path d="m7 5 5 15 5-15M3 10h18M7 5l5 5 5-5" />
			</svg>
		);
	}

	return (
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d="m12 4 2.4 4.85 5.35.78-3.88 3.78.92 5.34L12 16.23l-4.79 2.52.92-5.34-3.88-3.78 5.35-.78L12 4Z" />
		</svg>
	);
}

export function Benefits() {
	return (
		<section className="benefits">
			<h2 className="benefits__title">Drehen. Gewinnen.<br />Weiterspielen.</h2>

			<p className="benefits__description">
				Entdecke bei Amazon Slots spannende<br />
				Bonusfunktionen, hohe Multiplikatoren<br />
				und die Chance auf große Jackpots!
			</p>

			<div className="benefits__items">
				{benefits.map((benefit) => (
					<article className="benefits__item" key={benefit.title}>
						<div className="benefits__icon">
							<BenefitIcon name={benefit.icon} />
						</div>
						<h3 className="benefits__item-title">{benefit.title}</h3>
						<p className="benefits__item-description">{benefit.description}</p>
					</article>
				))}
			</div>
		</section>
	);
}
