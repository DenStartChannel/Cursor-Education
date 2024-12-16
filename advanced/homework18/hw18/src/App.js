import React, { useState, useEffect, useRef } from "react";

const Timer = ({
	time = 10000, // початковий час в мс
	step = 1000, // інтервал оновлення
	autostart = false, // чи стартує таймер автоматично
	onTick = (remainingTime) => {}, // функція, яка викликається при кожному тіку
	onTimeEnd = () => {}, // функція, що викликається після завершення таймера
	onTimeStart = () => {}, // функція, що викликається при старті таймера
	onTimePause = () => {}, // функція, що викликається при паузі таймера
	onTimeChange = (newTime) => {}, // функція для обробки зміни часу ззовні
}) => {
	const [remainingTime, setRemainingTime] = useState(time);
	const [isRunning, setIsRunning] = useState(autostart);
	const timerRef = useRef(null);

	// Оновлює час при зміні props time
	useEffect(() => {
		setRemainingTime(time);
		onTimeChange(time);
	}, [time, onTimeChange]);

	// Логіка запуску/паузи таймера
	useEffect(() => {
		if (isRunning) {
			onTimeStart(remainingTime);
			timerRef.current = setInterval(() => {
				setRemainingTime((prevTime) => {
					if (prevTime <= step) {
						clearInterval(timerRef.current);
						onTimeEnd();
						return 0;
					}
					return prevTime - step;
				});
			}, step);
		} else {
			onTimePause(remainingTime);
			if (timerRef.current) clearInterval(timerRef.current);
		}

		return () => {
			if (timerRef.current) clearInterval(timerRef.current);
		};
	}, [isRunning, step, remainingTime, onTimeStart, onTimeEnd, onTimePause]);

	// Викликає onTick кожного разу, коли час змінюється
	useEffect(() => {
		if (remainingTime > 0) {
			onTick(remainingTime);
		}
	}, [remainingTime, onTick]);

	const handleStartPause = () => {
		setIsRunning((prev) => !prev);
	};

	return (
		<div>
			<div>Залишилось часу: {remainingTime / 1000} сек.</div>
			<button onClick={handleStartPause}>
				{isRunning ? "Pause" : "Start"}
			</button>
		</div>
	);
};

const InfiniteTimer = () => {
	const [time, setTime] = useState(1000 * 1000); // 1000 секунд = 1 мільйон мс

	const handleTimeEnd = () => {
		setTime(1000 * 1000); // Перезапуск таймера
	};

	const handleTimeChange = (newTime) => {
		setTime(newTime);
	};

	return (
		<Timer
			time={time}
			onTimeChange={handleTimeChange}
			onTimeEnd={handleTimeEnd}
			step={10000} // оновлення раз у 10 секунд
			autostart={true}
		/>
	);
};

export default InfiniteTimer;
