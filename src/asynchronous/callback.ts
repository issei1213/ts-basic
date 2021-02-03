export default function callbackSample() {
  const url = "https://api.github.com/users/issei1213";

  const fetchProfile = () => {
    return fetch(url)
      .then((res) => {
        res.json()
          .then((json) => {
            console.log("Asynchronous Callback Sample 1:", json)
            return json
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch(error => {
        console.log(error)
      })
  }

  const profile = fetchProfile()
  console.log("Asynchronous Callback Sample 2:", profile)
}