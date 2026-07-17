import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addInteraction,
  deleteInteraction,
} from "../store/interactionSlice";
function LogInteractionForm() {
  const dispatch = useDispatch();

  const interactions = useSelector(
    (state) => state.interactions.interactions
  );
  useEffect(() => {
  localStorage.setItem(
    "interactions",
    JSON.stringify(interactions)
  );
}, [interactions]);

  const [doctorName, setDoctorName] = useState("");
  const [hospital, setHospital] = useState("");
  const [interactionType, setInteractionType] = useState("Meeting");
  const [products, setProducts] = useState("");
  const [notes, setNotes] = useState("");
  const [followUpDate, setFollowUpDate] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
  !doctorName ||
  !hospital ||
  !products ||
  !notes ||
  !followUpDate
) {
  alert("Please fill in all fields.");
  return;
}

    dispatch(
      addInteraction({
        doctorName,
        hospital,
        interactionType,
        products,
        notes,
        followUpDate,
      })
    );

    try {
  const response = await fetch("http://127.0.0.1:8001/feedback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      notes,
    }),
  });

  const data = await response.json();

  setFeedback(data.feedback);
} catch (error) {
  setFeedback("Backend not running.");
}

    setDoctorName("");
    setHospital("");
    setInteractionType("Meeting");
    setProducts("");
    setNotes("");
    setFollowUpDate("");
  };

  return (
    <div>
      <h2>Log Interaction</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Doctor Name"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Hospital"
          value={hospital}
          onChange={(e) => setHospital(e.target.value)}
        />

        <select
          value={interactionType}
          onChange={(e) => setInteractionType(e.target.value)}
        >
          <option>Meeting</option>
          <option>Call</option>
          <option>Email</option>
        </select>

        <input
          type="text"
          placeholder="Products"
          value={products}
          onChange={(e) => setProducts(e.target.value)}
        />

        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <input
          type="date"
          value={followUpDate}
          onChange={(e) => setFollowUpDate(e.target.value)}
        />

        <button
  type="submit"
  disabled={
    !doctorName ||
    !hospital ||
    !products ||
    !notes ||
    !followUpDate
  }
>
  Save
</button>
      </form>

     <h3>Saved Interactions</h3>

<table>
  <thead>
    <tr>
      <th>Doctor</th>
      <th>Hospital</th>
      <th>Type</th>
      <th>Products</th>
      <th>Follow-up</th>
      <th>Action</th>
    </tr>
  </thead>

<tbody>
  {interactions.map((item, index) => (
    <tr key={index}>
      <td>{item.doctorName}</td>
      <td>{item.hospital}</td>
      <td>{item.interactionType}</td>
      <td>{item.products}</td>
      <td>{item.followUpDate}</td>

      <td>
        <button onClick={() => dispatch(deleteInteraction(index))}>
          Delete
        </button>
      </td>
    </tr>
  ))}
</tbody>
        <tbody>
  {interactions.map((item, index) => (
    <tr key={index}>
      <td>{item.doctorName}</td>
      <td>{item.hospital}</td>
      <td>{item.interactionType}</td>
      <td>{item.products}</td>
      <td>{item.followUpDate}</td>

      <td>
        <button onClick={() => dispatch(deleteInteraction(index))}>
          Delete
        </button>
      </td>

    </tr>
  ))}
</tbody>
</table>

      {feedback && (
        <div className="feedback-card">
          <h3>🤖 AI Feedback</h3>
          <p>{feedback}</p>
        </div>
      )}
    </div>
  );
}

export default LogInteractionForm;