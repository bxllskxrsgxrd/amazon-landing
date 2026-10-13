import aboutImage from '@/assets/images/about.png';

import './_about.scss';

export function About() {
	return (
		<section className="about">
			<div className="about__image-wrapper">
				<img className="about__image" src={aboutImage} alt="Spielerin gewinnt bei Amazon Slots" />
			</div>

			<div className="about__content">

				<div className="about__text">
					<p className='about__heading'>🎰 1.500 € BONUS + 250 FREISPIELE – AMAZON SLOTS JETZT IN DEUTSCHLAND ONLINE!</p>
					<p>
						🇩🇪📱 Willkommen bei Amazon Slots, dem neuesten Online-Casino-Erlebnis für Spieler in ganz Deutschland.
						Schluss mit langen Wegen ins stationäre Casino – jetzt ist der nächste große Gewinn nur einen Spin
						entfernt, direkt auf deinem Smartphone. Schnell, unterhaltsam und vollständig optimiert für deutsche
						Spieler!
					</p>
					<p className='about__heading'>🇩🇪 Warum deutsche Spieler Amazon Slots lieben:</p>
					<ul className="about__list">
						<li>🔒 Sicher &amp; Lizenziert – Vollständig reguliert und vertrauenswürdig</li>
						<li>💳 Sofortige Einzahlungen &amp; Schnelle Auszahlungen – Erhalte deine Gewinne schnell und sicher</li>
						<li>🎁 Massiver Willkommensbonus – 1.500 € + 250 Freispiele nur für die Anmeldung</li>
						<li>📱 Mobile First – Reibungsloses, schnelles Gameplay auf jedem Gerät</li>
						<li>🕘 24/7 Support – Freundliche Hilfe, wann immer du sie brauchst</li>
						<li>🌸 Faires Spiel Garantiert – Transparente Regeln und sichere Transaktionen</li>
					</ul>
					<p className='about__heading'>🎯 Top Slots, beliebt bei deutschen Spielern:</p>
					<ul className="about__list">
						<li>🎰 Buffalo Megaways – Große Multiplikatoren und riesiges Gewinnpotenzial</li>
						<li>🐟 Big Bass Bonanza – Hol dir Belohnungen mit jedem Spin</li>
						<li>🌃 Starburst – Ein wahrer Klassiker, geliebt von deutschen Spielern</li>
						<li>📚 Book of Dead – Hohe Volatilität und legendäre Gewinne</li>
					</ul>
					<p className='about__heading'>🚀 MELDE DICH HEUTE AN – SICHERE DIR 1.500 € + 250 FREISPIELE</p>
					<p className='about__heading'>💰🌴 Amazon Slots – Der Dschungel der Jackpots in Deutschland ist jetzt geöffnet. Spin, gewinne und zahle aus!</p>
				</div>

		
			</div>
		</section>
	);
}
