import { BlogForm, ProjectForm, ServiceForm } from "./form/Form";

const Modal = ({ isOpen, onClose, onConfirm, title, activeTab, initialData = {} }) => {
  const renderForm = () => {
    switch (activeTab) {
      case 'services':
        return <ServiceForm initialData={initialData} onSubmit={onConfirm} />;
      case 'posts':
        return <BlogForm initialData={initialData} onSubmit={onConfirm} />;
      case 'projects':
        return <ProjectForm initialData={initialData} onSubmit={onConfirm} />;
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white text-black p-6 rounded shadow-lg w-full max-w-lg">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        {renderForm()}
        <button
          onClick={onClose}
          className="bg-gray-500 text-black py-2 px-4 rounded mt-4 hover:bg-gray-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
