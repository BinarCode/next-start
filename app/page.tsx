'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const [currentPage, setCurrentPage] = useState(1);  // Track the current page
  const itemsPerPage = 5; // Products per page

  useEffect(() => {
    // TODO: Fetch products from the provided API when the component mounts.
    // API: "https://fakestoreapi.com/products"
  }, []);

  // TODO: Implement sorting functionality. When the user clicks on the "Product Name" or "Price" column header, sort the products accordingly.

  // TODO: Implement pagination logic to show a subset of products (e.g., 5 per page).
  const handleNextPage = () => {
    // TODO: Move to the next page
  };

  const handlePrevPage = () => {
    // TODO: Move to the previous page
  };

  const handleSort = (key) => {

  }

  return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Product List</h1>

        {/* TODO: Show a loading message while products are being fetched */}
        {loading && <p className="text-center">Loading products...</p>}

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200 border-b">
                <button
                    className="flex items-center font-semibold text-gray-700 hover:text-gray-900"
                    onClick={() => handleSort("title")}
                >
                  Product Name
                  {/* TODO: Show sorting indicator when sorting */}
                </button>
              </th>
              <th className="py-2 px-4 bg-gray-200 border-b">
                <button
                    className="flex items-center font-semibold text-gray-700 hover:text-gray-900"
                    onClick={() => handleSort("price")}
                >
                  Price
                  {/* TODO: Show sorting indicator when sorting */}
                </button>
              </th>
            </tr>
            </thead>
            <tbody>
            {/* TODO: Map through paginated products and render rows */}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between mt-4">
          <button
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-gray-700">Page {currentPage}</span>
          <button
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded"
              onClick={handleNextPage}
              disabled={false}
          >
            Next
          </button>
        </div>
      </div>
  );
}
