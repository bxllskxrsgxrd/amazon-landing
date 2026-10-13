import './_ctaButton.scss';

interface CTAButtonProps {
	href: string;
}

export function CTAButton({ href }: CTAButtonProps) {
	return (
		<a className="cta-button" href={href}>
			SPIELEN & SICHERN
		</a>
	);
}
