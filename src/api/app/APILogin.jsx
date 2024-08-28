import { apiendpoint, fnCallAPIPost } from '../API'

const fnCallAPILogin = async (payload) => {
    const res = await fnCallAPIPost(apiendpoint.controllername.fnEndpointname, payload)
   return res
}

export { fnCallAPILogin }