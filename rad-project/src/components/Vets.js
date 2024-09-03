import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/PetOwners.css";
import searchIcon from "../images/searchIcon.png";

const Vets = () => {
  const [vets, setVets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    // Fetch the pet vets from the server
    const fetchVets = async () => {
      try {
        const response = await fetch("http://localhost:5000/vets");
        const data = await response.json();
        setVets(data);
      } catch (error) {
        console.error("Error fetching vets:", error);
      }
    };

    fetchVets();
  }, []);

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
        <input type="text" placeholder="Search by vet Username" className="search-bar" />
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
                <Link to={`/vets/delete-vet/${vet._id}`} className="action-link delete-link">
                  Delete
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

export default Vets;
