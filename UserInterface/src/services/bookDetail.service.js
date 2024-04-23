import createApiClient from "./api.service";

class BookDetailService {
    constructor (baseUrl = "/api/bookDetails") {
        this.api = createApiClient(baseUrl);
    }

    async getDetail(id){
        console.log(id);
        return (await this.api.get(`/${id}`)).data;
    }
}

export default new BookDetailService();