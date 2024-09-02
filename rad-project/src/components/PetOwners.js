import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/PetOwners.css"; // Assume you have this stylesheet
import searchIcon from "../images/searchIcon.png";

const PetOwners = () => {
  const [petOwners, setPetOwners] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    // Fetch the pet owners from the server
    const fetchPetOwners = async () => {
      try {
        const response = await fetch("http://localhost:5000/pet-owners");
        const data = await response.json();
        setPetOwners(data);
      } catch (error) {
        console.error("Error fetching pet owners:", error);
      }
    };

    fetchPetOwners();
  }, []);

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = petOwners.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(petOwners.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pet-owners-container">
      <div className="search-container">
        <img src={searchIcon} alt="search-icon" className="search-icon" />
        <input type="text" placeholder="Search by Owner Username" className="search-bar" />
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
          {currentItems.map((owner, index) => (
            <tr key={index}>
              <td>{owner.username}</td>
              <td>{owner.fullName}</td>
              <td>
                <Link to={`/pet-owners/view-owner/${owner._id}`} className="action-link view-link">
                  View
                </Link>
                <Link to={`/pet-owners/edit-owner/${owner._id}`} className="action-link edit-link">
                  Edit
                </Link>
                <Link to={`/pet-owners/delete-owner/${owner._id}`} className="action-link delete-link">
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

export default PetOwners;
