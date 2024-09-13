
import Newsletter from "@/model/newsletter";
import transporter from "@/lib/nodemailer";
import { thankYouTemplate } from "@/lib/ThankYou";
import databaseConnection from "@/lib/mongodb";

export default async function handler(req, res) {
  await databaseConnection();
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const subscribers = await Newsletter.find({}, 'email subscribedAt');
        res.status(200).json({ success: true, subscribers });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
      break;

    case 'POST':
      try {

        const { email } = req.body;

        if (!email) {
          return res.status(400).json({ success: false, error: 'Email is required' });
        }

        const newSubscriber = new Newsletter({ email });
        await newSubscriber.save();

        const mailOptions = {
          from: "makindeolaitan01@gmail.com",
          to: email,
          subject: "Thank You for Subscribing to Our Newsletter",
          html: thankYouTemplate(email),
        };
        await transporter.sendMail(mailOptions);

        res.status(201).json({ success: true, message: 'Subscription successful and confirmation email sent' });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
