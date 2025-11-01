import client from "./client";

export const userService = {
    async getAll(adminToken) {
        const api = client();
        const response = await api.get("/list-users", {
            headers: {
                Authorization: `Bearer ${adminToken}`,
            }
        });
        return response.data;
    },

    async create(data,adminToken) {

            try{
                const api = client();
                const response = await api.post("/create-user", data,{
                    headers: {
                        'Authorization': `Bearer ${adminToken}`
                    }
                });
                return response.data;
            }catch (error){
                console.log(error)
            }
    },

    async update(id, data) {
        const api = client();
        const response = await api.put(`/update-user/${id}`, data);
        return response.data;
    },

    async toggleStatus(id) {
        const api = client();
        const response = await api.patch(`/toggle-user-status/${id}`);
        return response.data;
    },

    async delete(id) {
        const api = client();
        const response = await api.delete(`/delete-user/${id}`);
        return response.data;
    },
};
