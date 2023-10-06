const myAxios = (method, url, body = null) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.setRequestHeader("content-type", "application/json");

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(new Error("Request failed"));
      } else {
        resolve(xhr.response);
        // console.log(xhr.response);
      }
    };

    xhr.onerror = () => {
      console.log("Error!!!");
      reject(xhr.response);
    };

    xhr.send(JSON.stringify(body));
  });
};

const url = "https://jsonplaceholder.typicode.com/users";

// myAxios("Get", url);

myAxios("POST", url, {
  name: "joseph",
  job: "builder",
})
  .then((result) => {
    console.log(`Message from then block`, result);
  })
  .catch((err) => {
    console.log(err);
  });
