export const removeCounter = async (id) => {
    const response = await fetch("http://localhost:5000/api/v1/counter", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    });
    const data = await response.json();
    onSuccess(data);
};