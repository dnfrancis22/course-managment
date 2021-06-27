import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Form from "../../components/Form/Form";

// const baseURL = 'http://localhost:8080/studentCourse';

const CreateProfilePage = () => {

  const history = useHistory();

  const handleFormSubmit = (e, student) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/studentCourse/students", student)
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
          <h3 style={{ marginTop: 20 }}>create your profile.</h3>
          <Form 
          handleFormSubmit={handleFormSubmit}
            buttonText="Create Profile"/>
        </div>
      </div>
    </div>
  );
};

export default CreateProfilePage;
