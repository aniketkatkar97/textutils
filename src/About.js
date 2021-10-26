import React from "react";

function About(props) {
  return (
    <div>
      <div
        className="accordion"
        id="accordionExample"
        style={{
          backgroundColor: props.mode === "dark" ? "#4e4b4b" : "white",
          color: props.mode === "dark" ? "white" : "#4e4b4b",
        }}
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor: props.mode === "dark" ? "#212529" : "#f8f9fa",
                color: props.mode === "dark" ? "white" : "#4e4b4b",
              }}
            >
              About
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={{
              backgroundColor: props.mode === "dark" ? "#4e4b4b" : "white",
              color: props.mode === "dark" ? "white" : "#4e4b4b",
            }}
          >
            <div className="accordion-body">
              This is an utility app, which takes a text input from users and
              performs shown operations on the given text. It also shows the
              result of the operation where user can copy the result. <br />{" "}
              <strong>User can also switch between dark and light UI.</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
