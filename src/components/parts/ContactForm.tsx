'use client';

import { FormEvent, useState } from 'react';
import styles from '@/app/shared.module.css';

interface ContactFormState {
    name: string;
    email: string;
    subject: string;
    message: string;
}

type SubmitStatus =
    | { type: 'idle'; message: '' }
    | { type: 'success'; message: string }
    | { type: 'error'; message: string };

const initialState: ContactFormState = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

export default function ContactForm() {
    const [form, setForm] = useState<ContactFormState>(initialState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ type: 'idle', message: '' });

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isSubmitting) return;

        const payload = {
            name: form.name.trim(),
            email: form.email.trim(),
            subject: form.subject.trim(),
            message: form.message.trim(),
        };

        if (!payload.name || !payload.email || !payload.subject || !payload.message) {
            setSubmitStatus({ type: 'error', message: 'Please fill in all fields.' });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus({ type: 'idle', message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = (await response.json().catch(() => null)) as { message?: string } | null;

            if (!response.ok) {
                throw new Error(data?.message || 'Failed to send message. Please try again.');
            }

            setSubmitStatus({ type: 'success', message: data?.message || 'Message sent successfully.' });
            setForm(initialState);
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className={styles.contactForm} onSubmit={onSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What is this about?"
                    value={form.subject}
                    onChange={(event) => setForm((prev) => ({ ...prev, subject: event.target.value }))}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more..."
                    value={form.message}
                    onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                    required
                ></textarea>
            </div>
            <button type="submit" className={styles.ctaBtn} style={{ border: 'none' }} disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
            {submitStatus.type !== 'idle' && (
                <p
                    className={`${styles.formStatus} ${
                        submitStatus.type === 'success' ? styles.formStatusSuccess : styles.formStatusError
                    }`}
                    role="status"
                >
                    {submitStatus.message}
                </p>
            )}
        </form>
    );
}
