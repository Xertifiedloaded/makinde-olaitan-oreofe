import databaseConnection from "@/lib/mongodb"
import Project from "@/model/project"

export default async function handler(req, res) {
  databaseConnection()
  const { method } = req
  switch (method) {
    case "GET":
      try {
        const projects = await Project.find()
        res.status(200).json({ success: true, data: projects })
      } catch (error) {
        res.status(400).json({ success: false, error: error.message })
      }
      break

    case "POST":
      try {
        const project = await Project.create(req.body)
        res.status(201).json({ success: true, data: project })
      } catch (error) {
        res.status(400).json({ success: false, error: error.message })
      }
      break

    default:
      res.setHeader("Allow", ["GET", "POST"])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
