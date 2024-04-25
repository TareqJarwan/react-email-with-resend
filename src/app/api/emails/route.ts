import { Resend } from "resend";

import WelcomeTemplate from "@/emails/Welcome";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
    try {
        const { email, firstName } = await request.json();

        console.log("first", email, firstName)

        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'hello world',
            react: WelcomeTemplate({ firstName }),
        });
        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}