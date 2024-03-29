import axios from 'axios';

const API_URL = 'https://colaboracin-7lj2.onrender.com/api';

const MaterialService = {
    getMaterialsHome: () => {
        const url = `${API_URL}/`;
        return axios.get(url)
            .then(response => response.data)
            .catch(error => {
                throw new Error(`Erro ao obter todos os materiais: ${error.message}`);
            });
    },

    getMaterialById: (id) => {
        const url = `${API_URL}/materiais/${id}`;
        return axios.get(url)
            .then(response => response.data)
            .catch(error => {
                throw new Error(`Erro ao obter o material: ${error.message}`);
            });
    },

    addMaterial: (materialInfo) => {
        const url = `${API_URL}/materiais`;
        return axios.post(url, materialInfo)
            .then(response => response.data)
            .catch(error => {
                throw new Error(`Erro ao adicionar material: ${error.message}`);
            });
    },

    deleteMaterial: (id) => {
        const url = `${API_URL}/materiais/${id}`;
        return axios.delete(url)
            .then(response => response.data)
            .catch(error => {
                throw new Error(`Erro ao excluir material: ${error.message}`);
            });
    }
};

export default MaterialService;
