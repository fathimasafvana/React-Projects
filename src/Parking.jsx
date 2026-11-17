
import { useState } from "react";

function Parking() {
    const [slots, setSlots] = useState([
        "available", "available", "available", "available", "available",
        "available", "available", "available", "available", "available"
    ]);

    function selectSlot(index) {
        setSlots(prev =>
            prev.map((slot, i) =>
                i === index && slot !== "booked"
                    ? slot === "available" ? "selected" : "available"
                    : slot
            )
        );
    }

    function bookSlots() {
        setSlots(prev =>
            prev.map(slot =>
                slot === "selected" ? "booked" : slot
            )
        );
    }

    function cancelSlot(index) {
        setSlots(prev =>
            prev.map((slot, i) =>
                i === index ? "available" : slot
            )
        );
    }

    function resetSlots() {
        setSlots(prev => prev.map(() => "available"));
    }

    const available = slots.filter(s => s === "available").length;
    const booked = slots.filter(s => s === "booked").length;
    const selected = slots.filter(s => s === "selected").length;

    return (
        <div style={{
            backgroundColor: "black",
            color: "white",
            minHeight: "100vh",
            textAlign: "center",
            padding: "20px"
        }}>

            <h1 style={{ fontSize: "50px" }}>Smart Parking </h1>

            <h3>Available: {available}</h3>
            <h3>Booked: {booked}</h3>
            <h3>Selected: {selected}</h3>
            <h3>Parking Fee: ₹{booked * 100}</h3>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 100px)",
                gap: "15px",
                justifyContent: "center",
                marginTop: "40px"
            }}>

                {slots.map((slot, index) => (
                    <div key={index}>

                        <button
                            onClick={() => selectSlot(index)}
                            disabled={slot === "booked"}
                            style={{
                                width: "100px",
                                height: "75px",
                                fontSize: "16px",
                                fontWeight: "bold",
                                border: "none",
                                borderRadius: "8px",
                                cursor: "pointer",
                                backgroundColor:
                                    slot === "available" ? "lightgreen" :
                                    slot === "selected" ? "yellow" :
                                    "lightcoral"
                            }}
                        >
                            <div>{index + 1}</div>
                            <div>{slot}</div>
                        </button>

                        {slot === "booked" && (
                            <button onClick={() => cancelSlot(index)}>
                                Cancel
                            </button>
                        )}

                    </div>
                ))}

            </div>

            <br />

            <button
                onClick={bookSlots}
                disabled={selected === 0}
                style={{ padding: "10px", margin: "5px" }}
            >
                Book Slot
            </button>

            <button
                onClick={resetSlots}
                style={{ padding: "10px", margin: "5px" }}
            >
                Reset Parking
            </button>

            {booked === 10 && (
                <h2>All Slots Occupied!</h2>
            )}

        </div>
    );
}

export default Parking;
