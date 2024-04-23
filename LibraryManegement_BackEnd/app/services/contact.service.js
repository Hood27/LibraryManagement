const { ObjectId } = require("mongodb");

class ContactService {
    constructor(client) {
        this.Contact = client.db().collection("contacts");
    }

    extractContactData(payload){
        const contact = {
            fullname: payload.fullname,
            username: payload.username,
            password: payload.password,
            address: payload.address,
            phone: payload.phone,
            date: payload.date,
            phai: payload.phai,
        };

        Object.keys(contact).forEach(
            (key) => contact[key] === undefined && delete contact[key]
        );
        return contact;
    }

    async create(payload) {
        const contact = this.extractContactData(payload);
        const result = await this.Contact.findOneAndUpdate(
            contact,
            { $set: {}},
            {returnDocument: "after", upsert: true}
        );
        return result;
    }

    async find(filter){
        const cursor = await this.Contact.find(filter);
        return await cursor.toArray();
    }

    async count(filter){
        const cursor = await this.Contact.find(filter).count();
        return await cursor;
    }

    async findByName(username){
        return await this.find({
            username: {$regex: new RegExp(username), $options: "i"},
        });
    }

    async findById(id){
        return await this.Contact.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload){
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = this.extractContactData(payload);
        const result  = await this.Contact.findOneAndUpdate(
            filter,
            { $set: update},
            { returnDocument: "after"}
        );
        return result;
    }

    async delete(id) {
        const result = await this.Contact.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result;
    }

    async deleteAll(){
        const result = await this.Contact.deleteMany({});
        return result.deletedCount;
    }

    async findUser(Username, Password){
        return await this.Contact.findOne({
            username: Username,
            password: Password,
        });
    }
}

module.exports = ContactService;
