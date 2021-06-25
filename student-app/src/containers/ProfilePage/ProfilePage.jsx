import React from "react";

const ProfilePage = () => {
  return (
    <div>
      <main className="container">
        <div className="row">
          <div className="col">
            {/* <h4>{musician.phone}</h4> */}
            <h4 style={{ marginTop: 20 }}>First Name</h4>
            <h4>Last Name</h4>
            <h4>Email</h4>
            <h4>Course</h4>
            <h4>Course Id</h4>
            <h4>Student Gpa</h4>
            
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
};

export default ProfilePage;
