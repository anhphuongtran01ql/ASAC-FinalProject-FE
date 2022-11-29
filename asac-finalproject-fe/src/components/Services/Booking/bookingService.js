import axios from 'axios'

const fetchPosts= async () => {
    const {data} = await axios.get('http://localhost:3000/patients')
    return data
}

const createSchedule= async (data) => {
    await axios.post('http://localhost:3000/patient',data)

}
async function createPost() {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts')
}

export {fetchPosts, createPost, createSchedule}
