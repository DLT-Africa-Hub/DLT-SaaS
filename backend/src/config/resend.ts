import { Resend, CreateEmailOptions } from 'resend';

type SendEmailParams = CreateEmailOptions;

let resendInstance: Resend | null = null;

export const resend = {
  emails: {
    send: async (params: SendEmailParams) => {
      if (!resendInstance) {
        resendInstance = new Resend(process.env.RESEND_API_KEY);
      }
      return resendInstance.emails.send(params);
    },
  },
};
