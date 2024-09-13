'use client'
import { useState, useEffect } from 'react';

export const useResource = (baseURL, endpoints = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(endpoints.get || baseURL);
      const result = await response.json();
      setData(result.data || []);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const add = async (item) => {
    try {
      const response = await fetch(endpoints.add || baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
      const result = await response.json();
      if (result.success) {
        fetchData();
      } else {
        throw new Error(result.message || 'Failed to add item');
      }
    } catch (error) {
      setError(error);
    }
  };

  const edit = async (id, item) => {
    try {
      const response = await fetch(`${endpoints.edit || baseURL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
      const result = await response.json();
      if (result.success) {
        fetchData();
      } else {
        throw new Error(result.message || 'Failed to edit item');
      }
    } catch (error) {
      setError(error);
    }
  };

  const remove = async (id) => {
    try {
      const response = await fetch(`${endpoints.remove || baseURL}/${id}`, {
        method: 'DELETE',
      });
      const result = await response.json();
      if (result.success) {
        fetchData();
      } else {
        throw new Error(result.message || 'Failed to remove item');
      }
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [baseURL]);

  return { data, loading, error, add, edit, remove };
};
