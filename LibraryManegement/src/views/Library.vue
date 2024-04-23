<template>
    <div class="page row">
        <div class="col-md-4">
            <Guide />
        </div>
        <div class="col-md-8">
            <BookSearchCard />
        </div>
    </div>
</template>

<script>
import { RouterLink } from "vue-router";
import Guide from "@/components/Guide.vue";
import BookSearchCard from "@/components/BookSearchCard.vue";
export default {
    components: {
        Guide,
        BookSearchCard,
        RouterLink,
    }
}
</script>

<style scoped>
.page {
    background-color: #FFFFFF;
    padding: 30px;
}
</style>