import React, { useState } from "react";

export default function Sign() {
  const [showForm, setShowForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (!email) {
      setError("Enter email");
      return;
    }

    if (!password) {
      setError("Enter password");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");
    alert("Form is valid! (Backend will come later)");
  };

  return (
    <>
      {showForm && (
        <div className="relative">
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className="bg-white p-[20px]  rounded-lg w-[300px]" >
      
            {/* {error && <p style={{ color: "red" }}>{error}</p>} */}

            <form onSubmit={handleSubmit}>
              <input
              className="border rounded-md"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "100%", padding: 8, marginBottom: 10 }}
              />
              <input
              className="border rounded-md"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: "100%", padding: 8, marginBottom: 10  }}
              />
              <button type="submit"
              className="border rounded-md  text-gray-700 "
               style={{ width: "100%", padding: 8  }}>Sign In</button>
            </form>

            <button 
            className="rounded-full text-gray-700 p-1 bg-indigo-200 ml-13 px-10"
            onClick={() => setShowForm(false)} style={{ marginTop: 10 }}>continue</button>
          </div>
        </div>
  </div>
      )}
    </>
  );
}
