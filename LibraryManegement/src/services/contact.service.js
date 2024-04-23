import createApiClient from "./api.service";

class ContactService {
    constructor (baseUrl = "/api/contacts") {
        this.api = createApiClient(baseUrl);
    }

    async count(){
        return (await this.api.put("/count")).data;
    }
}

export default new ContactService();