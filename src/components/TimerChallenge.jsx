import {useRef, useState} from "react";

export default function TimerChallenge({ title, targetTime }) {
	const timer = useRef();

	const [timerStarted, setTimerStarted] = useState(false);
	const [timerExpired, setTimerExpired] = useState(false);

	function startButtonClickHandler() {
		timer.current = setTimeout(() => {
			setTimerExpired(true);
		}, targetTime * 1000);

		setTimerStarted(true);
	}

	function startButtonStopClickHandler() {
		setTimerStarted(false);
		clearTimeout(timer.current);
	}

	return <section className="challenge">
		<h2>{title}</h2>
		{timerExpired && <p>You lost!</p>}
		<p className="challenge-time">
			{targetTime} second{targetTime > 1 ? 's' : ''}
		</p>
		<p>
			<button onClick={timerStarted ? startButtonStopClickHandler : startButtonClickHandler}>
				{timerStarted ? 'Stop' : 'Start'} challenge
			</button>
		</p>
		<p className={timerStarted ? 'active' : ''}>
			{timerStarted ? 'Time is running' : 'Timer inactive'}
		</p>
	</section>
}