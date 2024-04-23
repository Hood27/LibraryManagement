<template>
    <div class="input-group">
        <InputSearch v-model="searchText"/>
    </div>
    <div class="SearchItems-Group">
        <BookList
            v-if="filteredBooksCount > 0"
            :books="filteredBooks"
            v-model:activeIndex="activeIndex"
        />
        <p v-else>Không có sách nào.</p>
    </div>
</template>

<script>
import BooksService from '@/services/book.service.js';
import BookList from '@/components/BookList.vue';
import InputSearch from './InputSearch.vue';
export default {
    data() {
        return {
            books: [],
            searchText: "",
            activeIndex: -1,
        }
    },

    components: {
        BookList,
        InputSearch,
    },

    methods: {

        async retrieveBooks() {
            try {
                this.books = await BooksService.getAll();
            } catch (error) {
                console.error();
            }
        },

        refreshList() {
            this.retrieveBooks();
        },
    },

    mounted() {
        this.refreshList();
    },

    computed: {
        bookString() {
            return this.books.map((book) => {
                const { name, authorName, publishInfo, publishYear } = book;
                return [name, authorName, publishInfo, publishYear].join("");
            });
        },


        filteredBooks() {
            if (!this.searchText) return this.books;
            return this.books.filter((_book, index) => //filter giúp lọc mảng books
                this.bookString[index].includes(this.searchText) //string.includes(str) giúp tìm chuỗi với case sensitive
            );
        },

        //Check số book hiển thị
        filteredBooksCount() {
            return this.filteredBooks.length;
        },
    },


}
</script>

<style scoped>

</style>
