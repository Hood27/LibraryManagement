const { ObjectId } = require("mongodb");

class BookService {
    constructor(client) {
        this.Book = client.db().collection("book");
    }

    extractBookData(payload){
        const book = {
            name: payload.name,
            authorName: payload.authorName,
            publishInfo: payload.publishInfo,
            publishAddress: payload.publishAddress,
            publishId: payload.publishId,
            price:payload.price,
            publishYear: payload.publishYear,
            imageURL:payload.imageURL,
            // available: payload.available,
            position: payload.position,
            genre: payload.genre,
        };

        Object.keys(book).forEach(
            (key) => book[key] === undefined && delete book[key]
        );
        return book;
    }

    async create(payload) {
        const book = this.extractBookData(payload);
        const result = await this.Book.findOneAndUpdate(
            book,
            { $set: {bookDetail: [],}},
            {returnDocument: "after", upsert: true}
        );
        return result;
    }

    async addBook(id){
        let detail = new ObjectId;
        await this.Book.updateOne(
            {_id: new ObjectId(id)},
            { $push:
                {
                    bookDetail: [detail],
                }
            },);
        return detail;
    }

    async find(filter){
        const cursor = await this.Book.find(filter);
        return await cursor.toArray();
    }
    async count(filter){
        const cursor = await this.Book.find(filter).count();
        return await cursor;
    }

    async findByName(name){
        return await this.find({
            name: {$regex: new RegExp(name), $options: "i"},
        });
    }

    async findById(id){
        return await this.Book.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload){
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = this.extractBookData(payload);
        const result  = await this.Book.findOneAndUpdate(
            filter,
            { $set: update},
            { returnDocument: "after"}
        );
        return result;
    }

    async delete(id) {
        const result = await this.Book.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result;
    }

    async deleteAll(){
        const result = await this.Book.deleteMany({});
        return result.deletedCount;
    }

    // async findAvailable(){
    //     return await this.find({ available:true });
    // }
}

module.exports = BookService;
