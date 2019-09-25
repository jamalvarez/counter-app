export const removeCounter = async (id, onSuccess, onFailure = (e) => {console.log(e)}) => {

  try {
    const response = await fetch(window.location.href.replace(':3000',':5000') + "api/v1/counter", {
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

export const fetchInitialData = async (onSuccess, onFailure = (e) => {console.log(e)}) => {
  try {
    const response = await fetch(window.location.href.replace(':3000',':5000') + "api/v1/counters", {
      method: "get",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const initialData = await response.json();
    onSuccess(initialData);
  } catch (e) {
    onFailure(e);
  }
}

export const saveCounter = async (title, onSuccess, onFailure = (e) => {console.log(e)}) => {
  try{
  const response = await fetch(window.location.href.replace(':3000',':5000') + "api/v1/counter", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title })
  });
  const initialData = await response.json();
  onSuccess(initialData);
} catch (e) {
  onFailure(e);
}
};

export const increaseCounter = async (id, onSuccess, onFailure = (e) => {console.log(e)}) => {
  try {
    const response = await fetch(window.location.href.replace(':3000',':5000') + "api/v1/counter/inc", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    });
    const initialData = await response.json();
    onSuccess(initialData);
  } catch (e) {
    onFailure(e);
  }
}

export const decreaseCounter = async (id, onSuccess, onFailure = (e) => {console.log(e)}) => {
  try {
    const response = await fetch(window.location.href.replace(':3000',':5000') + "api/v1/counter/dec", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    });
    const initialData = await response.json();
    onSuccess(initialData);
  } catch (e) {
    onFailure(e);
  }
}