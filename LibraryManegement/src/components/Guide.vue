<template>
    <div class="guide-container">
        <div class="head-panel">
            <span>Quy định thư viện</span>
        </div>
        <div class="guide-content">
            <ul>
                <li>Bạn đọc có thể đọc sách, báo, tạp chí, tập san các loại tại chỗ không cần đăng ký mượn.</li>
                <li>Mỗi lần mượn không quá 2 cuốn</li>
                <li>Sách mượn quá hạn quy định: Người mượn có nghĩa vụ trả sách đúng thời hạn quy định, nếu không sẽ mất quyền mượn sách trong khoảng thời gian 6 tháng.</li>
                <li>Mất sách: Người mượn hoặc cơ quan bảo lãnh của người mượn phải bồi hoàn bằng nguyên bản mới hoặc đền tiền 100% bằng giá trị của sách.</li>
                <li>Hư hại sách: Sách bị ướt, rách, mất trang, cháy xém, bôi bẩn, ghi chép, sửa chữa… khiến cho sách không còn giá trị sử dụng thì người mượn phải bồi hoàn bằng nguyên bản mới.</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .guide-container{
        border: 2px solid #ddd;
        margin-bottom: 30px;
    }
    .head-panel{
        background-color: #F5F5F5;
        color: black;
        padding: 10px 15px;
        margin-bottom: 10px;
        font-size: 14px;
    }

    .guide-content{
        padding: 10px 15px;
    }

    .guide-content ul{
        list-style-type: decimal;
        list-style-position: inside;
        padding-left: 5px !important;
    }

    .guide-content ul li {
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: 500;
    }


</style>