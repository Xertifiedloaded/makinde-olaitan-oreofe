import databaseConnection from "@/lib/mongodb";
import Service from "@/model/service";


export default async function handler(req, res) {
  databaseConnection();
  const { method } = req;

  const { id } = req.query;

  switch (method) {
    case 'GET':
      try {
        const service = await Service.findById(id);
        if (!service) {
          return res.status(404).json({ success: false, error: 'Service not found' });
        }
        res.status(200).json({ success: true, data: service });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case 'PUT':
      try {
        const service = await Service.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!service) {
          return res.status(404).json({ success: false, error: 'Service not found' });
        }
        res.status(200).json({ success: true, data: service });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case 'DELETE':
      try {
        const service = await Service.findByIdAndDelete(id);
        if (!service) {
          return res.status(404).json({ success: false, error: 'Service not found' });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
