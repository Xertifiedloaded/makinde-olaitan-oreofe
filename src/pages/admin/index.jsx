'use client'
import Modal from "@/components/Modal";
import { useResource } from "@/lib/useApiResources";
import { useState } from "react";
import TabContent from "@/components/TabContent";

const Dashboard = () => {
  const { data: posts, loading: postsLoading, error: postsError, add: addPost, edit: editPost, remove: removePost } = useResource("/api/blog/blog", { add: "/api/blog/blog", edit: "/api/blog", remove: "/api/blog" });
  const { data: projects, loading: projectsLoading, error: projectsError, add: addProject, edit: editProject, remove: removeProject } = useResource("/api/project/project", { add: "/api/project/project", edit: "/api/project", remove: "/api/project" });
  const { data: services, loading: servicesLoading, error: servicesError, add: addService, edit: editService, remove: removeService } = useResource("/api/service/service", { add: "/api/service/service", edit: "/api/service", remove: "/api/service" });

  const [activeTab, setActiveTab] = useState("posts");
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [currentItem, setCurrentItem] = useState(null);

  const handleOpenModal = (type, item = null) => {
    setModalType(type);
    setCurrentItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentItem(null);
  };

  const handleConfirmModal = async (formData) => {
    try {
      if (modalType === "add") {
        switch (activeTab) {
          case "posts":
            await addPost(formData);
            break;
          case "projects":
            await addProject(formData);
            break;
          case "services":
            await addService(formData);
            break;
          default:
            break;
        }
      } else if (modalType === "edit" && currentItem) {
        switch (activeTab) {
          case "posts":
            await editPost(currentItem._id, formData);
            break;
          case "projects":
            await editProject(currentItem._id, formData);
            break;
          case "services":
            await editService(currentItem._id, formData);
            break;
          default:
            break;
        }
      }
      handleCloseModal();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (postsLoading || projectsLoading || servicesLoading) return <p className="text-center py-4">Loading...</p>;
  // if (postsError || projectsError || servicesError) return <p className="text-center py-4 text-red-600">Error: {postsError?.message || projectsError?.message || servicesError?.message}</p>;

  const renderTabContent = () => {
    switch (activeTab) {
      case "posts":
        return <TabContent data={posts} onAdd={() => handleOpenModal("add")} onEdit={(item) => handleOpenModal("edit", item)} onDelete={removePost} itemLabel="Posts" />;
      case "projects":
        return <TabContent data={projects} onAdd={() => handleOpenModal("add")} onEdit={(item) => handleOpenModal("edit", item)} onDelete={removeProject} itemLabel="Projects" />;
      case "services":
        return <TabContent data={services} onAdd={() => handleOpenModal("add")} onEdit={(item) => handleOpenModal("edit", item)} onDelete={removeService} itemLabel="Services" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen  bg-gray-100">
      <header className="bg-blue-600 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <nav>
            <ul className="flex space-x-4">
              {["posts", "projects", "services"].map((tab) => (
                <li key={tab}>
                  <button
                    className={`py-2 px-4 text-black rounded ${activeTab === tab ? "bg-blue-500 text-black" : "bg-white text-black border border-blue-500"}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="p-6">
        <div className="container mx-auto">{renderTabContent()}</div>
      </main>

      <Modal
        activeTab={activeTab}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmModal}
        title={modalType === "add" ? `Add ${activeTab.slice(0, -1)}` : `Edit ${activeTab.slice(0, -1)}`}
      >
        <p className="text-black">
          Form fields for {modalType === "add" ? "adding" : "editing"} {activeTab.slice(0, -1)}
        </p>
      </Modal>
    </div>
  );
};

export default Dashboard;
