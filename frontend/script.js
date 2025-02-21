async function fetchData() {
    try {
        const response = await fetch("http://34.47.235.80:3000");  // Replace with your backend external IP
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        document.getElementById("message").innerText = `Backend says: ${data.message}`;
    } catch (error) {
        document.getElementById("message").innerText = "Error fetching backend data.";
        console.error("Fetch error:", error);
    }
}

document.addEventListener("DOMContentLoaded", fetchData);
