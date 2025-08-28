import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
            <h2 className="text-2xl font-bold text-white text-center">User Details</h2>
          </div>
          
          <div className="p-6">
            <div className="mb-4 pb-2 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-gray-500 font-bold">User ID:</span>
                <span className="text-gray-800 font-medium">{user.id}</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-150">
                <div className="w-24 font-semibold text-gray-700">Name:</div>
                <div className="flex-1 text-gray-800">{user.name}</div>
              </div>
              
              <div className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-150">
                <div className="w-24 font-semibold text-gray-700">Username:</div>
                <div className="flex-1 text-gray-800">{user.username}</div>
              </div>
              
              <div className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-150">
                <div className="w-24 font-semibold text-gray-700">Email:</div>
                <div className="flex-1 text-gray-800">{user.email}</div>
              </div>
            </div>
          </div>
          
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}