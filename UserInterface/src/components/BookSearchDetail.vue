<template>
    <div class="BookSearchDetail-Container">
        <div class="detail-left">
            <div class="img-container">
                <img v-bind:src="book.imageURL" alt="Detail book image">
            </div>
        </div>
        <div class="detail-right">
            <dl>
                <dd></dd>
                <dd class="detailField">Tên sách:</dd>
                <dd class="detailValue">{{ book.name }} <box-icon id="search" color="green" size="28px" animation='tada-hover' type='solid' name='file-find'
                        @click="findPosition(book.position)"></box-icon></dd>
                <dd></dd>
                <dd class="detailField">Tác giả:</dd>
                <dd class="detailValue">{{ book.authorName }}</dd>
                <dd></dd>
                <dd class="detailField">Thông tin nhà xuất bản:</dd>
                <dd class="detailValue">{{ book.publishInfo }}</dd>
                <dd></dd>
                <dd class="detailField">Địa chỉ nhà xuất bản:</dd>
                <dd class="detailValue">{{ book.publishAddress }}</dd>
                <dd></dd>
                <dd class="detailField">Mã nhà xuất bản:</dd>
                <dd class="detailValue">{{ book.publishId }}</dd>
                <dd></dd>
                <dd class="detailField">Đơn giá:</dd>
                <dd class="detailValue">{{ book.price }}</dd>
                <dd></dd>
                <dd class="detailField">Năm xuất bản:</dd>
                <dd class="detailValue">{{ book.publishYear }}</dd>
                <dd></dd>
                <dd class="detailField">Mã số kệ sách</dd>
                <dd class="detailValue">{{ book.position }}</dd>
                <dd></dd>
                <dd class="detailField">Thể loại</dd>
                <dd class="detailValue">{{ book.genre }}</dd>
            </dl>
        </div>
        <div id="detail-Area">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>TT</th>
                        <th>Mã</th>
                        <th>Số lần mượn</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(i, index) in details">
                        <th>{{ index + 1 }}</th>
                        <th>{{ details[index]._id }}</th>
                        <th>{{ details[index].borrowCount }}</th>
                        <th v-if="details[index].available"><box-icon color="green" type='solid' name='circle'></box-icon></th>
                        <th v-else><box-icon color="red" type='solid' name='circle'></box-icon></th>
                    </tr>
                </tbody>
            </table>
            <div id="detail-Field"></div>
            <div class="detail-Value"></div>
        </div>
        <button @click="onClickButton()">Tổng quan</button>
    </div>
</template>

<script>
import { RouterLink } from "vue-router";
import 'boxicons';

import bookDetailService from "../services/bookDetail.service";

export default {
    data(){
        return{
            details: [],
        }
    },

    components: {
        RouterLink,
    },

    props: {
        book: { type: Object, required: true },
        bookDetail: { type: Array, required: true }
    },

    methods: {
        onClickButton() {
            this.$emit('clicked', '');
        },

        findPosition(pos) {
            this.$router.push({
                name: 'library.map',
                query: { position: pos },
            })
        },

        async getDetail(id){
            this.details =  await bookDetailService.getDetail(id);
        }
    },

    created(){
        this.getDetail(this.book._id);
    }
}
</script>

<style scoped>
.detail-left {
    padding-right: 15px;
}

.detail-left .img-container {
    overflow: hidden;
    height: 180px;
    width: 120px;
}

.detail-left img {
    width: 100px;
    display: block;
    top: 25%;
    left: 25%;
}

.detail-left,
.detail-right {
    display: table-cell;
    vertical-align: top;
}

.detail-right {
    font-size: 14px;
    width: 10000px;
}

.BookSearchDetail-Container,
.detail-right {
    zoom: 1;
    overflow: hidden;
}

.detail-right .dd {
    float: left;
    white-space: pre-line;
}

.detailField {
    width: 30%;
    display: inline-flex;
}

.detailValue {
    width: 70%;
    display: inline;
}

box-icon#search {
    float: right;
}

/* Table */

</style>
