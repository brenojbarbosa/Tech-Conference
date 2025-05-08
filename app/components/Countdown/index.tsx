'use client';
import React, { useEffect, useState } from 'react';
import styles from './Countdown.module.css';

function Countdown() {
  const eventDate = new Date('2025-10-12T09:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: '--',
    hours: '--',
    minutes: '--',
    seconds: '--',
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.containerSection}>
      <h2 className={styles.title}>Contagem Regressiva</h2>
      <div className={styles.countdownContainer}>
        <div className={styles.countdownBox}>
          <div className={styles.countdownNumber}>{timeLeft.days}</div>
          <div className={styles.countdownLabel}>Dias</div>
        </div>
        <div className={styles.countdownBox}>
          <div className={styles.countdownNumber}>{timeLeft.hours}</div>
          <div className={styles.countdownLabel}>Horas</div>
        </div>
        <div className={styles.countdownBox}>
          <div className={styles.countdownNumber}>{timeLeft.minutes}</div>
          <div className={styles.countdownLabel}>Minutos</div>
        </div>
        <div className={styles.countdownBox}>
          <div className={styles.countdownNumber}>{timeLeft.seconds}</div>
          <div className={styles.countdownLabel}>Segundos</div>
        </div>
      </div>
    </section>
  );
}

export default Countdown;
