// components/Dashboard.jsx
import Modal from "@/components/Modal"
import { useResource } from "@/lib/useApiResources"
import { useState } from "react"

const Dashboard = () => {
  // State for managing posts, projects, and services resources
  const {
    data: posts,
    loading: postsLoading,
    error: postsError,
    add: addPost,
    edit: editPost,
    remove: removePost,
  } = useResource("/api/blog/blog", {
    add: "/api/blog/add",
    edit: "/api/blog", // Base URL with {id} appended
    remove: "/api/blog", // Base URL with {id} appended
  })

  const {
    data: projects,
    loading: projectsLoading,
    error: projectsError,
    add: addProject,
    edit: editProject,
    remove: removeProject,
  } = useResource("/api/project/project", {
    add: "/api/project/add",
    edit: "/api/project", // Base URL with {id} appended
    remove: "/api/project", // Base URL with {id} appended
  })

  const {
    data: services,
    loading: servicesLoading,
    error: servicesError,
    add: addService,
    edit: editService,
    remove: removeService,
  } = useResource("/api/service/service", {
    add: "/api/service/add",
    edit: "/api/service", // Base URL with {id} appended
    remove: "/api/service", // Base URL with {id} appended
  })

  const [activeTab, setActiveTab] = useState("posts")
  const [isModalOpen, setModalOpen] = useState(false) // Modal state
  const [modalType, setModalType] = useState("") // 'add' or 'edit'
  const [currentItem, setCurrentItem] = useState(null) // Current item to edit or add

  const handleOpenModal = (type, item = null) => {
    setModalType(type)
    setCurrentItem(item)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setCurrentItem(null)
  }

  const handleConfirmModal = () => {
    if (modalType === "add") {
      if (activeTab === "posts")
        addPost({ title: "New Post", description: "Description" })
      if (activeTab === "projects")
        addProject({ title: "New Project", description: "Description" })
      if (activeTab === "services")
        addService({ name: "New Service", description: "Description" })
    } else if (modalType === "edit" && currentItem) {
      if (activeTab === "posts")
        editPost(currentItem._id, { ...currentItem, title: "Updated Title" })
      if (activeTab === "projects")
        editProject(currentItem._id, { ...currentItem, title: "Updated Title" })
      if (activeTab === "services")
        editService(currentItem._id, { ...currentItem, name: "Updated Name" })
    }
    handleCloseModal()
  }

  if (postsLoading || projectsLoading || servicesLoading)
    return <p className="text-center py-4">Loading...</p>
  if (postsError || projectsError || servicesError)
    return (
      <p className="text-center py-4 text-red-600">
        Error:{" "}
        {postsError?.message ||
          projectsError?.message ||
          servicesError?.message}
      </p>
    )

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <button
                  className={`py-2 px-4 text-black rounded ${
                    activeTab === "posts"
                      ? "bg-blue-500 text-black"
                      : "bg-white text-black border border-blue-500"
                  }`}
                  onClick={() => setActiveTab("posts")}
                >
                  Posts
                </button>
              </li>
              <li>
                <button
                  className={`py-2 text-black px-4 rounded ${
                    activeTab === "projects"
                      ? "bg-blue-500"
                      : "bg-white text-blue-500 border border-blue-500"
                  }`}
                  onClick={() => setActiveTab("projects")}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  className={`py-2 text-black px-4 rounded ${
                    activeTab === "services"
                      ? "bg-blue-500"
                      : "bg-white text-blue-500 border border-blue-500"
                  }`}
                  onClick={() => setActiveTab("services")}
                >
                  Services
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="p-6">
        <div className="container mx-auto">
          {/* Posts Tab */}
          {activeTab === "posts" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Posts</h2>
              <ul>
                {posts.map((post) => (
                  <li
                    key={post._id}
                    className="bg-white text-black p-4 mb-4 shadow-md rounded-lg flex flex-col space-y-4"
                  >
                    <h3 className="text-lg font-bold">{post.title}</h3>
                    <p>{post.description}</p>
                    <div className="flex space-x-4">
                      <button
                        className="bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 transition duration-150"
                        onClick={() => handleOpenModal("edit", post)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 py-2 px-4 rounded hover:bg-red-600 transition duration-150"
                        onClick={() => removePost(post._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                className="bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 transition duration-150"
                onClick={() => handleOpenModal("add")}
              >
                Add Post
              </button>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === "projects" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Projects</h2>
              <ul>
                {projects.map((project) => (
                  <li
                    key={project._id}
                    className="bg-white text-black p-4 mb-4 shadow-md rounded-lg flex flex-col space-y-4"
                  >
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="flex space-x-4">
                      <button
                        className="bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 transition duration-150"
                        onClick={() => handleOpenModal("edit", project)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 py-2 px-4 rounded hover:bg-red-600 transition duration-150"
                        onClick={() => removeProject(project._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                className="bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 transition duration-150"
                onClick={() => handleOpenModal("add")}
              >
                Add Project
              </button>
            </div>
          )}

          {/* Services Tab */}
          {activeTab === "services" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Services</h2>
              <ul>
                {services.map((service) => (
                  <li
                    key={service._id}
                    className="bg-white text-black p-4 mb-4 shadow-md rounded-lg flex flex-col space-y-4"
                  >
                    <h3 className="text-lg font-bold">{service.name}</h3>
                    <p>{service.description}</p>
                    <div className="flex space-x-4">
                      <button
                        className="bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 transition duration-150"
                        onClick={() => handleOpenModal("edit", service)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 py-2 px-4 rounded hover:bg-red-600 transition duration-150"
                        onClick={() => removeService(service._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                className="bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 transition duration-150"
                onClick={() => handleOpenModal("add")}
              >
                Add Service
              </button>
            </div>
          )}
        </div>
      </main>

      <Modal
        activeTab={activeTab}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmModal}
        title={
          modalType === "add"
            ? `Add ${activeTab.slice(0, -1)}`
            : `Edit ${activeTab.slice(0, -1)}`
        }
      >
        <p className="text-black">
          Form fields for {modalType === "add" ? "adding" : "editing"}{" "}
          {activeTab.slice(0, -1)}
        </p>
      </Modal>
    </div>
  )
}

export default Dashboard
