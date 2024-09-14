import { useResource } from "@/lib/useApiResources"
import React, { useEffect, useState } from "react"

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true)

  const { loading: projectLoading } = useResource("/api/project/project")
  const { loading: blogLoading } = useResource("/api/blog/blog")
  const { loading: serviceLoading } = useResource("/api/service/service")

  useEffect(() => {
    // If all resources have finished loading
    if (!projectLoading && !blogLoading && !serviceLoading) {
      setLoading(false)
    }
  }, [projectLoading, blogLoading, serviceLoading])

  if (loading) {
    return (
      <div className="grid h-screen place-items-center">
        <p className="spiner"/>
      </div>
    )
  }

  return <div>{children}</div>
}
