import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const DESTINATION_EMAIL = 'info@fovibalt.com';

interface ContactPayload {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const buildFromHeader = (smtpUser: string) => {
    const configuredFrom = (process.env.SMTP_FROM ?? '').trim();

    if (!configuredFrom) {
        return smtpUser;
    }

    // Allow plain brand names in SMTP_FROM by attaching the authenticated mailbox.
    if (!configuredFrom.includes('@')) {
        return `${configuredFrom} <${smtpUser}>`;
    }

    return configuredFrom;
};

export async function POST(request: NextRequest) {
    try {
        const body = (await request.json()) as Partial<ContactPayload>;

        const name = (body.name ?? '').trim().slice(0, 100);
        const email = (body.email ?? '').trim().slice(0, 180);
        const subject = (body.subject ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, 140);
        const message = (body.message ?? '').trim().slice(0, 5000);

        if (!name || !email || !subject || !message) {
            return NextResponse.json({ message: 'Please fill in all fields.' }, { status: 400 });
        }

        if (!isValidEmail(email)) {
            return NextResponse.json({ message: 'Please provide a valid email address.' }, { status: 400 });
        }

        const smtpHost = process.env.SMTP_HOST;
        const smtpPort = process.env.SMTP_PORT;
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;

        if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
            return NextResponse.json(
                { message: 'Email service is not configured yet. Set SMTP env variables on the server.' },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: Number(smtpPort),
            secure: Number(smtpPort) === 465,
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });

        const fromHeader = buildFromHeader(smtpUser);

        await transporter.sendMail({
            from: fromHeader,
            sender: smtpUser,
            to: DESTINATION_EMAIL,
            envelope: {
                from: smtpUser,
                to: DESTINATION_EMAIL,
            },
            replyTo: email,
            subject: `[Contact Form] ${subject}`,
            text: `New contact form submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
            html: `
                <h2>New contact form submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <hr />
                <p style="white-space: pre-line;">${message}</p>
            `,
        });

        return NextResponse.json({ message: 'Message sent successfully.' }, { status: 200 });
    } catch (error) {
        console.error('Failed to send contact form email:', error);
        return NextResponse.json({ message: 'Failed to send message. Please try again.' }, { status: 500 });
    }
}
