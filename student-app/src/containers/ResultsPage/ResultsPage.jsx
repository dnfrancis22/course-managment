import React from "react";

const ResultsPage = () => {
  return (
    <main className="container">
      <div className="row">
        <div className="col center-align">
          <table
            class="table table-striped table-hover"
            style={{ marginTop: 20 }}
          >
            <thead>
              <tr>
                <th scope="col">Course Number</th>
                <th scope="col">Course Title</th>
                <th scope="col">Instructor</th>
                <th scope="col">Quarter</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>101</td>
                <td>web dev</td>
                <td>dan</td>
                <td>summer</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>101</td>
                <td>web dev</td>
                <td>dan</td>
                <td>summer</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>101</td>
                <td>web dev</td>
                <td>dan</td>
                <td>summer</td>
              </tr>
            </tbody>
          </table>

          <div className="mb-3">
            <label
              htmlFor="course"
              className="form-label"
              style={{ marginTop: 20 }}
            >
              Return to Profile
            </label>
            <div>
              {/* <Link to={`/update/${musician._id}`}> */}
              <button className="btn btn-primary" type="submit">
                {/* </Link> */}
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResultsPage;
