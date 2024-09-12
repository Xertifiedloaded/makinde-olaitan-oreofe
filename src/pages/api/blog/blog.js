import databaseConnection from "@/lib/mongodb";
import Blog from "@/model/blog";

export default async function handler(req, res) {
  await databaseConnection();

  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const blogs = await Blog.find(); 
        res.status(200).json({ success: true, data: blogs });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'POST':
      try {
        const blog = await Blog.create(req.body); 
        res.status(201).json({ success: true, data: blog });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
