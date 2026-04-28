import { resend } from '../config/resend';

export const sendEmail = async ({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [to],
      subject,
      html,
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : 'Unknown error occurred';
    const error = new Error(message);
    error.cause = err;
    throw error;
  }
};
