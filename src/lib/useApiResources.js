"use client"
import { useState, useEffect, useCallback } from "react"

export const useResource = (baseURL, endpoints = {}) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(endpoints.get || baseURL, {
        cache: 'no-store' 
      });
      const result = await response.json();
      setData(result.data || []);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [endpoints.get, baseURL]);

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  const add = async (item) => {
    try {
      const response = await fetch(endpoints.add || baseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
      const result = await response.json()
      if (result.success) {
        fetchData()
      } else {
        throw new Error(result.message || "Failed to add item")
      }
    } catch (error) {
      setError(error)
    }
  }

  const edit = async (id, item) => {
    try {
      const response = await fetch(`${endpoints.edit || baseURL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
      const result = await response.json()
      if (result.success) {
        fetchData()
      } else {
        throw new Error(result.message || "Failed to edit item")
      }
    } catch (error) {
      setError(error)
    }
  }

  const remove = async (id) => {
    try {
      const response = await fetch(`${endpoints.remove || baseURL}/${id}`, {
        method: "DELETE",
      })
      const result = await response.json()
      if (result.success) {
        fetchData()
      } else {
        throw new Error(result.message || "Failed to remove item")
      }
    } catch (error) {
      setError(error)
    }
  }



  return { data, loading, error, add, edit, remove }
}


export const getPostBySlug = async (id) => {
  const res = await fetch(`/api/blog/${id}`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};
