import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/PetOwners.css";
import searchIcon from "../images/searchIcon.png";

const Vets = () => {
  const [vets, setVets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    fetchVets();
  }, []);

  const fetchVets = async () => {
    try {
      const response = await fetch("http://localhost:5000/vets");
      const data = await response.json();
      setVets(data);
    } catch (error) {
      console.error("Error fetching pet owners:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/vets/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Deleted successfully!");
        fetchVets(); // Refresh the list after deletion
      } else {
        console.error("Failed to delete the vet.");
      }
    } catch (error) {
      console.error("Error deleting vet:", error);
    }
  };

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = vets.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(vets.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pet-owners-container">
      <div className="search-container">
        <img src={searchIcon} alt="search-icon" className="search-icon" />
        <input type="text" placeholder="Search by Vet Username" className="search-bar" />
      </div>

      <table className="pet-owners-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((vet, index) => (
            <tr key={index}>
              <td>{vet.username}</td>
              <td>{vet.fullName}</td>
              <td>
                <Link to={`/vets/view-vet/${vet._id}`} className="action-link view-link">
                  View
                </Link>
                <Link to={`/vets/edit-vet/${vet._id}`} className="action-link edit-link">
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(vet._id)}
                  className="action-link delete-link"
                >
                  Delete
                </button>
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

export default Vets;
