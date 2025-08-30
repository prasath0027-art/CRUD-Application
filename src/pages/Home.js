import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("https://crud-backend-bqkd.onrender.com/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`https://crud-backend-bqkd.onrender.com/user/${id}`);
    loadUsers();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center py-8">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">User Management</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg shadow">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-2 text-left font-semibold text-gray-700">S.N</th>
                <th className="px-4 py-2 text-left font-semibold text-gray-700">Name</th>
                <th className="px-4 py-2 text-left font-semibold text-gray-700">Username</th>
                <th className="px-4 py-2 text-left font-semibold text-gray-700">Email</th>
                <th className="px-4 py-2 text-left font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id} className="hover:bg-blue-50 transition">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{user.name}</td>
                  <td className="px-4 py-2 border-b">{user.username}</td>
                  <td className="px-4 py-2 border-b">{user.email}</td>
                  <td className="px-4 py-2 border-b flex gap-2">
                    <Link
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded shadow transition no-underline"
                      to={`/viewuser/${user.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded shadow transition no-underline"
                      to={`/edituser/${user.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded shadow transition no-underline"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}