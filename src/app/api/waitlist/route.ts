import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const DESTINATION_EMAIL = 'info@fovibalt.com';

interface WaitlistPayload {
    email: string;
}

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const buildFromHeader = (smtpUser: string) => {
    const configuredFrom = (process.env.SMTP_FROM ?? '').trim();

    if (!configuredFrom) {
        return smtpUser;
    }

    if (!configuredFrom.includes('@')) {
        return `${configuredFrom} <${smtpUser}>`;
    }

    return configuredFrom;
};

export async function POST(request: NextRequest) {
    try {
        const body = (await request.json()) as Partial<WaitlistPayload>;

        const email = (body.email ?? '').trim().slice(0, 180);

        if (!email) {
            return NextResponse.json({ message: 'Please provide an email address.' }, { status: 400 });
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
            subject: `[Waitlist] New Joiner`,
            text: `email - ${email} joined waitlist`,
            html: `
                <p>email - ${email} joined waitlist</p>
            `,
        });

        return NextResponse.json({ message: 'You have been added to the waitlist.' }, { status: 200 });
    } catch (error) {
        console.error('Failed to send waitlist email:', error);
        return NextResponse.json({ message: 'Failed to join waitlist. Please try again.' }, { status: 500 });
    }
}
