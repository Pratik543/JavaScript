const url = "https://jsonplaceholder.typicode.com/users";

const myAxios = async (method, url, body = null) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return await fetch(url, {
    method,
    headers,
    body: JSON.stringify(body),
  }).then((res) => res.json());
};

myAxios("POST", url, {
  name: "John Doe",
  age: 30,
  job: "Engineer",
})
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

myAxios("GET", url)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
