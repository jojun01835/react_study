import EventsList from "../components/EventsList";
import { useLoaderData, json } from "react-router-dom";

function Events() {
  const data = useLoaderData();
  const events = data.events;

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <EventsList events={events} />
      </div>
    </>
  );
}

export default Events;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    return json(
      { message: "Error" },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
