import axios from "axios"

const isprod = process.env.REACT_APP_IS_PRODUCTION
const apihost = process.env.REACT_APP_API_HOST
const apihostdev = 'http://localhost:0000'
const apitoken = process.env.REACT_APP_API_TOKEN
const apiendpoint = {
    controllername: {
        fnEndpointname: { apikey: 'ABCD1234', apiendpoint: '/api/controllername/v1.0/fnEndpointname' }
    }
}

const fnCallAPIPost = async (jsendpoint, payload) => {
    const res = await axios.post((isprod ? apihost : `${apihostdev}${jsendpoint.apiendpoint}`), payload, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apitoken}`,
            'key': jsendpoint.apikey,
            'checksum': ''
        }
    })
   return (res.data ? (res.data.result ? (res.data.result.data && res.data.result.status === 'success' ? res.data.result.data : []) : []) : [])
}

export { apiendpoint, fnCallAPIPost }