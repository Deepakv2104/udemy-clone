import React from 'react';
import styles from './JoinWaitlistDialog.css';

function JoinWaitlistDialog({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.dialog}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <h2>Join the Waitlist</h2>
                <p>Enter your details to join the waitlist and get notified when we launch:</p>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" placeholder="Your name" required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" placeholder="Your email" required />
                    </label>
                    <label>
                        Phone:
                        <input type="tel" name="phone" placeholder="Your phone number" />
                    </label>
                    <label>
                        Course Interest:
                        <input type="text" name="courseInterest" placeholder="Course you're interested in" />
                    </label>
                    <button type="submit" className={styles.submitButton}>Join Waitlist</button>
                </form>
            </div>
        </div>
    );
}

export default JoinWaitlistDialog;
