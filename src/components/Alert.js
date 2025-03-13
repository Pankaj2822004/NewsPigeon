import React from "react";

function Alert(props) {
  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        width: "338px",
        textAlign: "center",
      }}
    >
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
          style={{ margin: "39px 11px" }}
        >
          <strong>{props.alert.type}</strong>: {props.alert.msg}
          
        </div>
      )}
    </div>
  );
}

export default Alert;
