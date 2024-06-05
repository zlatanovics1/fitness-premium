interface MailOptions {
  messaage: string;
  from: string;
  name: string;
}
export async function sendMail(options: MailOptions) {}
