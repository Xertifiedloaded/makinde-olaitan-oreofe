import databaseConnection from "@/lib/mongodb";
import Project from "@/model/project";

export default async function handler(req, res) {
 databaseConnection();

  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case 'GET':
      try {
        const project = await Project.findById(id);
        if (!project) {
          return res.status(404).json({ success: false, error: 'Project not found' });
        }
        res.status(200).json({ success: true, data: project });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'PUT':
      try {
        const project = await Project.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!project) {
          return res.status(404).json({ success: false, error: 'Project not found' });
        }
        res.status(200).json({ success: true, data: project });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'DELETE':
      try {
        const project = await Project.findByIdAndDelete(id);
        if (!project) {
          return res.status(404).json({ success: false, error: 'Project not found' });
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
