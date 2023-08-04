import React from "react";
// import { useDispatch } from "react-redux";
import { useCalendarStore } from "../../hooks";

export const FabDelete = () => {
  const { startDeletingEvent, hasEventSelected } = useCalendarStore();
  const handleDelete = () => {
    startDeletingEvent();
  };
  //   const dispatch = useDispatch();
  return (
    <button
      style={{ display: hasEventSelected ? "" : "none" }}
      className="btn btn-danger fab-danger"
      onClick={handleDelete}
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};
