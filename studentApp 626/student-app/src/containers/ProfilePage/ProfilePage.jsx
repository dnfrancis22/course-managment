import React from "react";
import { useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useHistory, useParams } from "react-router-dom";
import  api  from '../../api/index';

const ProfilePage = () => {

  const { id } = useParams();
  const history = useHistory();

  const fetchStudent = async () => await api.show(id);
  const { status, data, error } = useQuery("students", fetchStudent);

  const queryClient = useQueryClient();

  switch (status) {
    case "loading":
      return <p>Loading...</p>;
    case "error":
      return <p>{error.message}</p>;
    default:
  return (
    <div>
      <main className="container">
        <div className="row">
          <div className="col">
            {/* <h4>{musician.phone}</h4> */}
            <h4 style={{ marginTop: 20 }}>First Name</h4>
            <h4>{data.lastName}</h4>
            <h4>{data.email}</h4>
            <h4>{data.course}</h4>
            <h4>{data.courseId}</h4>
            <h4>{data.gpa}</h4>
            
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

            {/* <Link to={`/update/${musician._id}`}> */}
            <button className="btn btn-primary" style={{ marginRight: 10, marginTop: 10 }}>
              update profile
            </button>
            {/* </Link> */}
            {/* <Link to={"/home"}> */}
            <button
              className="btn btn-primary" style={{ marginRight: 10, marginTop: 10 }}
              //   onClick={() => {
              //     deleteProfile(musician._id);
              //   }}
              // eslint-disable-next-line
            >
              delete profile
            </button>
            {/* </Link> */}
          </div>
        </div>
      </main>
    </div>
  );
}
};

export default ProfilePage;
