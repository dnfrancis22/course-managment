import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Form from "../../components/Form/Form";

// const baseURL = 'http://localhost:8080/studentCourse';

const UpdateProfilePage = () => {

  const history = useHistory();

  const handleFormSubmit = (e,student,id) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/studentCourse/students/${id}`,student)
      .then((response) => {
        history.push(`/Profile/${response.data._id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
    return (
        <div className="container">
        <div className="row">
          <div className="col center-align">
            <h3 style={{ marginTop: 20 }}>update your profile.</h3>
            <Form           
            handleFormSubmit={handleFormSubmit}
            buttonText="Update Profile"/>
          </div>
        </div>
      </div>
    );
};

export default UpdateProfilePage;