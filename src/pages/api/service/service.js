import databaseConnection from "@/lib/mongodb";
import Service from "@/model/service";




export default async function handler(req, res) {
  databaseConnection();
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const services = await Service.find({});
        res.status(200).json({ success: true, data: services });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case 'POST':
      try {
        const service = await Service.create(req.body);
        res.status(201).json({ success: true, data: service });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
