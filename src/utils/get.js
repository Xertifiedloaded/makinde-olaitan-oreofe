import { useResource } from "@/lib/useApiResources"

const PostsComponent = () => {
  const API_URL = "/api/posts"
  const {
    data: posts,
    loading,
    error,
    add,
    edit,
    remove,
  } = useResource(API_URL)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <button
              onClick={() =>
                edit(post._id, { ...post, title: "Updated Title" })
              }
            >
              Edit
            </button>
            <button onClick={() => remove(post._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => add({ title: "New Post", description: "Description" })}
      >
        Add Post
      </button>
    </div>
  )
}

const ProjectsComponent = () => {
  const API_URL = "/api/project/project"
  const {
    data: projects,
    loading,
    error,
    add,
    edit,
    remove,
  } = useResource(API_URL)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <button
              onClick={() =>
                edit(project._id, { ...project, title: "Updated Title" })
              }
            >
              Edit
            </button>
            <button onClick={() => remove(project._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          add({ title: "New Project", description: "Description" })
        }
      >
        Add Project
      </button>
    </div>
  )
}

const ServicesComponent = ({ SwiperSlide }) => {
  const API_URL = "/api/service/service"
  const {
    data: services,
    loading,
    error,
    add,
    edit,
    remove,
  } = useResource(API_URL)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  console.log(services)

  return (
    <div>
      <h1>Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service._id}>
            <span className="uppercase tracking-wider text-titleColor dark:text-titleColorDark text-xl font-bold mb-16 block">
              {service.name}
            </span>
            <h3 className="text-xl text-titleColor dark:text-titleColorDark mb-4 font-bold">
              {service.title}
            </h3>
            <p className="min-h-[205px] sm:min-h-[175px] text-textColor dark:text-textColorDark">
              {service.description}
            </p>
            <button
              onClick={() =>
                edit(service._id, { ...service, title: "Updated Title" })
              }
            >
              Edit
            </button>
            <button onClick={() => remove(service._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          add({ title: "New Service", description: "Description" })
        }
      >
        Add Service
      </button>
    </div>
  )
}

export { PostsComponent, ServicesComponent, ProjectsComponent }
