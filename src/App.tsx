import { Hero } from '@/sections/Hero/Hero';
import { Benefits } from '@/sections/Benefits/Benefits';
import { About } from '@/sections/About/About';
import { Reviews } from '@/sections/Reviews/Reviews';

import './_app.scss';

function App() {
	return (
		<main className="app">
			<div className="app__mobile">
				<Hero />
				<Benefits />
				<About />
				<Reviews />
			</div>

			<section className="app__desktop">
				<h1 className="app__desktop-title">Desktop version is not available</h1>

				<p className="app__desktop-description">Please open this website on your mobile device.</p>
			</section>
		</main>
	);
}

export default App;
