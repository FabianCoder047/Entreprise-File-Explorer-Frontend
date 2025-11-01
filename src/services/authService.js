import client from './client'

export const authService =  {
    //Service de connexion(Login)
    async login(credentials){
        try{
            const apiClient = client();
            const response = await apiClient.post('/login',credentials);
            return response.data;
        }catch(error){
            console.log(error);
        }
    },

    //Service de changement de mot de passe temporaire
    async changeTemporaryPassword(credentials){
        try{
            const apiClient = client();
            const response = await apiClient.post('/change-temporary-password',credentials);
            return response.data;
        }catch(error){
            console.log(error);
        }
    },

    //Service de déconnexion
    async logout(){
        const token = localStorage.getItem('token');
        if(token){
            try{
                const apiClient = client();
                const response = await apiClient.post('/logout',{
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                return response.data;
            }catch(error){
                console.log(error);
            }
        }

    },

    //Service de changement de mot de passe
    async changePassword(credentials){
        const token = localStorage.getItem('token');
        if(token){
            try{
                const response = await client.post('/change-password',credentials,{
                    headers : {
                        'Authorization': `Bearer ${token}`
                    }
                });
                return response.data;
            }catch(error){
                console.log(error);
            }
        }
    },

    //Service de récupération de profil
    async getProfile(){
        const token = localStorage.getItem('token');
        if(token){
            try{
                const apiClient = client();
                const response = await apiClient.get('/profile',{
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                return response.data;
            }catch(error){
                console.log(error);
            }
        }
    },

    //Service de mise à jour de profil
    async updateProfile(credentials){
        const token = localStorage.getItem('token');
        if(token){
            try{
                const response = await client.put('/update-profile',credentials,{
                    headers : {
                        'Authorization': `Bearer ${token}`
                    }
                });
                return response.data;
            }catch (error){
                console.log(error);
            }
        }
    },
}