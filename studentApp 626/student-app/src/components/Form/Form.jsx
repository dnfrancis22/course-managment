import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { add } from '../../api';
// import { useMutation, useQueryClient } from 'react-query';


// const baseURL = 'http://localhost:8080/studentCourse';


const Form = ({ buttonText, handleFormSubmit }) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [courseId, setCourseId] = useState("");
  const [gpa, setGpa] = useState("");
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    if (id) {
      axios
        .get(`http://localhost:8080/studentCourse/students/${id}`)
        .then((response) => {
          console.log(response.data);
          const { firstName, lastName, email, course, courseId, gpa } = response.data;
          setFirstName(firstName);
          setLastName(lastName);
          setEmail(email);
          setCourse(course);
          setCourseId(courseId);
          setGpa(gpa);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  // const qc = useQueryClient();

  // const mutation = useMutation(newStudent => add(newStudent, "students"), {
  //   onSuccess: () => {
  //     qc.invalidateQueries('students');
  //   },
  // });

  // function handleSubmit(event) {
  //   event.preventDefault();

  //   mutation.mutate({ firstName, lastName, email, course, courseId, gpa });
  //   event.target.reset();
  // }
  return (
    <>
      <form onSubmit={(e) => {
          handleFormSubmit(
            e,
            { firstName, lastName, email, course, courseId, gpa },
            id
          );
        }}
      >
        <div className="mb-3">
        <label htmlFor="firstName" className="form-label"> 
        First Name 
        </label>
          <input
          className="form-control"
            id="firstName"
            type="text"
            name="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
          />
        </div>

        <div className="mb-3">
        <label htmlFor="lastName" className="form-label"> 
        Last Name 
        </label>
          <input
          className="form-control"
            id="lastName"
            type="text"
            name="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
          />
        </div>

        <div className="mb-3">
        <label htmlFor="email" className="form-label"> 
        Email 
        </label>
          <input
          className="form-control"
            id="email"
            type="email"
            name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
          />
        </div>

        <div className="mb-3">
        <label htmlFor="course" className="form-label"> 
        Course 
        </label>
          <input
          className="form-control"
            id="course"
            type="text"
            name="course"
              value={course}
              onChange={(e) => {
                setCourse(e.target.value);
              }}
          />
        </div>

        <div className="mb-3">
        <label htmlFor="courseId" className="form-label"> 
        Course Id 
        </label>
          <input
          className="form-control"
            id="courseId"
            type="text"
            name="courseId"
              value={courseId}
              onChange={(e) => {
                setCourseId(e.target.value);
              }}
          />
        </div>

        <div className="mb-3">
        <label htmlFor="studentGpa" className="form-label"> 
        Student Gpa 
        </label>
          <input
          className="form-control"
            id="gpa"
            type="text"
            name="gpa"
              value={gpa}
              onChange={(e) => {
                setGpa(e.target.value);
              }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
        {buttonText}
        </button>
      </form>
    </>
  );
};

export default Form;
