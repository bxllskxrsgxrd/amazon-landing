import { useEffect, useState } from 'react';

const DURATION = 3 * 60 * 1000;
const STORAGE_KEY = 'bonus-timer-end';

function getEndTime(): number {
	const stored = localStorage.getItem(STORAGE_KEY);

	if (stored !== null) {
		const endTime = Number(stored);

		if (Number.isFinite(endTime) && endTime > 0) {
			return endTime;
		}
	}

	const endTime = Date.now() + DURATION;
	localStorage.setItem(STORAGE_KEY, String(endTime));

	return endTime;
}

export function BonusTimer() {
	const [endTime] = useState(getEndTime);

	const [seconds, setSeconds] = useState(() => Math.max(0, Math.ceil((endTime - Date.now()) / 1000)));

	useEffect(() => {
		const updateTimer = () => {
			const remaining = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));

			setSeconds(remaining);
		};

		updateTimer();

		const interval = setInterval(updateTimer, 1000);

		return () => clearInterval(interval);
	}, [endTime]);

	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = seconds % 60;

	const formattedTime = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;

	return <span className="bonus__urgency-timer">{formattedTime}</span>;
}
