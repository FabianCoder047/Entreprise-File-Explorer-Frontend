import axios from 'axios'
export default function client() {
  return (
    axios.create({
        "baseURL" : "http://localhost:8000/api",
        "timeout": 5000,
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
        }
    })
  )
}
