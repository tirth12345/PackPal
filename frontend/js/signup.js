document.getElementById("signup-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;
  let role = document.getElementById("signup-role").value;

  // Normalize the role to match allowed roles
  role = role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
  console.log("Received role:", role);

  try {
    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, role }),
    });

    const data = await res.json();
    alert(data.message);

    if (res.ok) {
      window.location.href = "login.html";
    }

  } catch (err) {
    console.error("Signup error:", err);
    alert("Error signing up.");
  }
});