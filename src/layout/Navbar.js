import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link className="text-white text-2xl font-bold tracking-wide hover:text-blue-200 transition no-underline" to="/">
          CRUD Application
        </Link>
        <div className="flex items-center gap-4">
          <Link
            className="bg-white text-blue-700 font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-100 transition no-underline"
            to="/adduser"
          >
            Add User
          </Link>
        </div>
      </div>
    </nav>
  );
}
