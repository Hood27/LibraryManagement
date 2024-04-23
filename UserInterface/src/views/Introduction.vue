<!-- Trang giới thiệu được dẫn bởi đường link trên thanh điều hướng -->
<template>
    <b id="intro_headline">
        <p>QUY ĐỊNH MƯỢN TRẢ SÁCH TẠI THƯ VIỆN</p>
    </b>
    <hr>
    <div class="img-box">
        <img id="img-1" src="@/img/library-2.jpg" alt="Ảnh thư viện 2">
    </div>
    <hr>
    <ul class="quyDinh">
        <li><b>Mượn sách đọc tại thư viện:</b>
            <ul class="content">
                <li>Bạn đọc có thể đọc sách, báo, tạp chí, các loại tại chỗ không cần đăng ký mượn.</li>
                <li>Bạn đọc không được mượn báo chí mang về nhà. Báo chí đọc xong để lại vào kệ hoặc tập trung lại một chỗ để thủ
            thư cất.</li>
            </ul>


        </li>
        <li><b>Mượn sách, tài liệu, báo chí đi photo:</b>
            <ul class="content">
                <li>Bạn đọc phải xuất trình thẻ để làm thủ tục mang sách đi photo.</li>
                <li>Phải thế chân bẳng giá tiền cuốn sách, thấp nhất là 100.000đ/ 1 quyển.</li>
                <li>Trả lại thế chân khi bạn đọc trả sách.</li>
                <li>Thời hạn mượn sách là trong ngày, nếu bạn đọc mang sách về sẽ bị xử lý theo qui định của thư viện.</li>
            </ul>
            </li>
        <li><b>Mượn sách về đọc:</b>
            <ul class="content">
                <li>Bạn đọc phải xuất trình thẻ bạn đọc để làm thủ tục mượn sách về đọc.</li>
                <li>Chỉ phục vụ mượn về đối với tài liệu có trên 3 bản.</li>
                <li>Phải thế chấp giá tiền cuốn sách, thấp nhất là 100.000đ/ 1 quyển.</li>
                <li>Thư viện sẽ trả lại thế chân khi bạn đọc trả sách và không mượn sách nữa (trả thẻ).</li>
                <li>Thời hạn mượn sách là 10 ngày.</li>
                <li>Bạn đọc phải đến Thư viện gia hạn sách khi hết hạn mượn sách.</li>
            </ul></li>
    </ul>
    <hr>
    <div class="img-box">
        <img id="img-1" src="@/img/library-1.jpg" alt="Ảnh thư viện">
    </div>
    <hr>
</template>

<style scoped>
    .img-box{
        height: 500px;
        width: auto;
        overflow: hidden;
    }

    #img-1,#img-2{
        height: 700px;
    }
    b#intro_headline{
        font-size: 34px;
        color: #0000FF;
        text-align: center;
    }
    ul.quyDinh{
        list-style-type: decimal;
    }

    ul.quyDinh b{
        color: #0000FF;
    }

    ul li {
        margin-bottom: 10px;
        font-size: 20px;
    }
</style>
