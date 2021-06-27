import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// const baseURL = 'http://localhost:8080/studentCourse';

const ProfilePage = () => {

  const [student, setStudent] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getProfile = (id) => {
    axios
    .get(`http://localhost:8080/studentCourse/students/${id}`)
      .then((response) => {
        console.log(response.data);
        setStudent(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteProfile = (id) => {
    axios
      .delete(`http://localhost:8080/studentCourse/students/${id}`)
      .then(() => {
        getProfile();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <main className="container">
        <div className="row">
          <div className="col">
            {/* <h4>{musician.phone}</h4> */}
            <h4 style={{ marginTop: 20 }}>First Name</h4>
            <h4>{student.firstName}</h4>
            <h4>{student.lastName}</h4>
            <h4>{student.email}</h4>
            <h4>{student.course}</h4>
            <h4>{student.courseId}</h4>
            <h4>{student.studentGpa}</h4>
            
            <div className="mb-3">
            <label htmlFor="course" className="form-label" style={{ marginTop: 20 }}>
                Search for courses
              </label>
              <div>
              <button
            //   onClick={() => {
            //     setCity("");
            //     setGenre("");
            //     setInstrument("");
            //     setEmail("");
            //   }}
            className="btn btn-primary"
            type="submit"
            >
              Search
            </button>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="instructor" className="form-label" style={{ marginTop: 20 }}>
                Search for course by instructor
              </label>
              <div class="input-group mb-3">
                <input
                  className="form-control"
                  placeholder="Enter Instructor's Name"
                  id="instructor"
                  type="text"
                  name="instructor"
                  //   value={instructor}
                  //   onChange={(e) => {
                  //     setInstructor(e.target.value);
                  //   }}
                />
                <button
                  //   onClick={handleFormSubmit}
                  className="btn btn-primary"
                  type="button"
                  id="button-addon2"
                >
                  Search
                </button>
              </div>
            </div>

            <Link to={`/Update/${student._id}`}>
            <button className="btn btn-primary" style={{ marginRight: 10, marginTop: 10 }}>
              update profile
            </button>
            </Link>
            <Link to={"/"}>
            <button
              className="btn btn-primary" style={{ marginRight: 10, marginTop: 10 }}
                onClick={() => {
                  deleteProfile(student._id);
                }}
              // eslint-disable-next-line
            >
              delete profile
            </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
