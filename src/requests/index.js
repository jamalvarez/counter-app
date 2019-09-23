export const removeCounter = async (id, onSuccess, onFailure = (e) => {console.log(e)}) => {

  try {
    const response = await fetch("http://localhost:5000/api/v1/counter", {
      method: "delete",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    });
    const data = await response.json();
    onSuccess(data);
  }catch(e){
    onFailure(e);
  }
};

export const fetchInitialData = async (onSuccess, onFailure) => {
  try {
    const response = await fetch("http://localhost:5000/api/v1/counters", {
      method: "get",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const initialData = await response.json();
    onSuccess(initialData);
  } catch (e) {
    console.log("couldnt do shit for now");
  }
}