import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/PetOwners.css";

const AdminViewPets = () => {
  const [pets, setPets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await fetch("http://localhost:5000/admin-pets");
      const data = await response.json();
      setPets(data);
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pets.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(pets.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pet-owners-container">
      <table className="pet-owners-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Species</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((pet, index) => (
            <tr key={index}>
              <td>{pet.name}</td>
              <td>{pet.species}</td>
              <td>
                <Link to={`/admin-pets/admin-view-pet/${pet._id}`} className="action-link view-link">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <span className="pagination-previous" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
          Previous
        </span>
        {pageNumbers.map(number => (
          <span
            key={number}
            onClick={() => setCurrentPage(number)}
            className={currentPage === number ? "pagination-active" : ""}
          >
            {number}
          </span>
        ))}
        <span className="pagination-next" onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageNumbers.length))}>
          Next
        </span>
      </div>
    </div>
  );
};

export default AdminViewPets;
