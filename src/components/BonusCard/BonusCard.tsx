import './_bonusCard.scss';
import avatar1 from '@/assets/images/hero/hero-avatar_1.webp';
import avatar2 from '@/assets/images/hero/hero-avatar_2.webp';
import avatar3 from '@/assets/images/hero/hero-avatar_3.webp';
import clockIcon from '@/assets/svg/hero/clock.svg';
import { BonusTimer } from './BonusTimer';

export function BonusCard() {
	return (
		<div className="bonus">
			<div className="bonus__icon">f</div>

			<h2 className="bonus__title">GLÜCKWUNSCH!</h2>

			<p className="bonus__description">
				Ihr Konto wurde ausgewählt. <br />
				Sie erhalten einen Bonus von
			</p>
			<p className="bonus__amount">1.500 € + 250 Freispiele</p>
			<div className="bonus__info">
				<div className="bonus__social">
					<div className="bonus__avatars">
						<img src={avatar1} alt="" />
						<img src={avatar2} alt="" />
						<img src={avatar3} alt="" />
					</div>

					<p className="bonus__social-text">
						31 Personen in Deutschland
						<br />
						haben ihn bereits aktiviert ✓
					</p>
				</div>

				<div className="bonus__conditions">
					<span>Dauert 30 Sekunden</span>
					<span>·</span>
					<span>Keine Einzahlung erforderlich</span>
					<img src={clockIcon} alt="Clock Icon" />
				</div>

				<div className="bonus__footer">
					<p className="bonus__urgency">Angebot nur heute gültig · Noch <BonusTimer /></p>

					<p className="bonus__jackpot">Jackpot: 1.500.000 € 🏆</p>
				</div>
			</div>
		</div>
	);
}
