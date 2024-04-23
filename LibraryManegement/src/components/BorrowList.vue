<script>
import "boxicons";
export default {
    props: {
        borrows: { type: Array, default: [] },
    },
};
</script>

<template>
    <div class="borrowBox" v-for="(borrow, index) in borrows">
        <dl>
            <dd></dd>
            <dd class="detailField">Mã số sách mượn:</dd>
            <dd class="detailValue">{{ borrow._id }} </dd>
            <dd></dd>
            <dd class="detailField">Số lần mượn của sách:</dd>
            <dd class="detailValue">{{ borrow.borrowCount }}</dd>
            <dd></dd>
            <dd class="detailField">Tên tài khoản người mượn:</dd>
            <dd class="detailValue">{{ borrow.username }}</dd>
            <dd></dd>
            <dd class="detailField">Trạng thái trả:</dd>
            <dd class="detailValue" v-if="borrow.available"><box-icon color="green" type='solid' name='circle'></box-icon></dd>
            <dd class="detailValue" v-else><box-icon color="red" type='solid' name='circle'></box-icon></dd>
            <dd></dd>
        </dl>
    </div>
</template>

<style scoped>

.borrowBox{ 
    border-radius: 30px;
    padding-top: 20px;
    padding-left: 30px;
    padding-bottom: 5px;
    margin-bottom: 30px;
    
    background-color: #F2E9E4;
}
.detailField {
    width: 30%;
    display: inline-flex;
    font-weight: 700;
}

.detailValue {
    width: 70%;
    display: inline;
}

.detailField, .detailValue {
    align-content: center;
}
</style>