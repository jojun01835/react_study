import React from "react";
import { useRouteLoaderData, json, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";

const Event = () => {
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
};

export default Event;

export async function loader({ req, params }) {
  const id = params.eventId;
  const res = await fetch("http://localhost:8080/events/" + id);

  if (!res.ok) {
    throw json({ message: "not fetch" }, { status: 500 });
  } else {
    return res;
  }
}

export async function action({ params, req }) {
  const id = params.eventId;
  const res = await fetch("http://localhost:8080/events/" + id, {
    method: req.method,
  });
  if (!res.ok) {
    throw json({ message: "not delete event" }, { status: 500 });
  }
  return redirect("/events");
}
