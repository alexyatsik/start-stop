import {useRef, useState} from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({title, targetTime}) {
	const timer = useRef();
	const dialog = useRef();

	const [timerStarted, setTimerStarted] = useState(false);
	const [timerExpired, setTimerExpired] = useState(false);

	function startButtonClickHandler() {
		timer.current = setTimeout(() => {
			dialog.current.open();
			setTimerExpired(true);
		}, targetTime * 1000);

		setTimerStarted(true);
	}

	function startButtonStopClickHandler() {
		setTimerStarted(false);
		clearTimeout(timer.current);
	}

	return <>
		<ResultModal ref={dialog} targetTime={targetTime} result={"lost"} />
		<section className="challenge">
			<h2>{title}</h2>
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
	</>
}