import axios from "axios";

const apiUrl = "http://localhost:8080/api/cpu";

class axiosApi {
    async getAllCpu() {
        const response = await axios.get(apiUrl);
        return response.data;
    }
}

export default axiosApi;
