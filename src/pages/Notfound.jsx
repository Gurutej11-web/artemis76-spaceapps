import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="p-12 text-center">
      <h2 className="text-4xl font-bold">Page not found</h2>
      <p className="mt-4">Return <Link to="/" className="text-sky-400">home</Link></p>
    </div>
  );
}
