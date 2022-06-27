import http from '../utils/request.js'

export async function getTypeOneList(parent_name) {
    return await http({
        method: "post",
        url: "/type/getproduct",
        data: {
            parent_name
        }
    })
}