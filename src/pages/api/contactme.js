import transporter from "../../lib/nodemailer";
import { contactTemplate } from "@/lib/ThankYou";
export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case 'POST':
      try {
        const { email, fullname, subject, message } = req.body;

        if (!email || !fullname || !subject || !message) {
          return res.status(400).json({ success: false, error: 'All fields are required' });
        }

        const mailOptions = {
          from: email,
          to: "makindeolaitan01@gmail.com", 
          subject: subject,
          html: contactTemplate(fullname, email, subject, message),
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({ success: true, message: 'Message sent successfully' });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
      break;

    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
