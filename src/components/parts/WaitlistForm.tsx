'use client';

import { FormEvent, useState } from 'react';
import styles from '@/app/shared.module.css';
import { trackEvent } from '@/lib/analytics';

interface WaitlistFormState {
    email: string;
}

type SubmitStatus =
    | { type: 'idle'; message: '' }
    | { type: 'success'; message: string }
    | { type: 'error'; message: string };

const initialState: WaitlistFormState = {
    email: '',
};

export default function WaitlistForm() {
    const [form, setForm] = useState<WaitlistFormState>(initialState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ type: 'idle', message: '' });

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isSubmitting) return;

        const payload = {
            email: form.email.trim(),
        };

        if (!payload.email) {
            setSubmitStatus({ type: 'error', message: 'Please provide an email address.' });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus({ type: 'idle', message: '' });
        trackEvent('form_submit', { form: 'waitlist' });

        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = (await response.json().catch(() => null)) as { message?: string } | null;

            if (!response.ok) {
                throw new Error(data?.message || 'Failed to join waitlist. Please try again.');
            }

            setSubmitStatus({ type: 'success', message: data?.message || 'Successfully joined waitlist.' });
            setForm(initialState);
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: error instanceof Error ? error.message : 'Failed to join waitlist. Please try again.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className={styles.contactForm} onSubmit={onSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="waitlist_email">Email</label>
                <input
                    type="email"
                    id="waitlist_email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                    required
                />
            </div>
            
            <button type="submit" className={styles.ctaBtn} style={{ border: 'none', marginTop: '16px' }} disabled={isSubmitting}>
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
            </button>
            {submitStatus.type !== 'idle' && (
                <p
                    className={`${styles.formStatus} ${
                        submitStatus.type === 'success' ? styles.formStatusSuccess : styles.formStatusError
                    }`}
                    role="status"
                    style={{ marginTop: '12px' }}
                >
                    {submitStatus.message}
                </p>
            )}
        </form>
    );
}
