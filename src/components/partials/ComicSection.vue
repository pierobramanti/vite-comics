<script>
export default {
    props: {
        cover: Object
    }   
}
</script>
<template>
    <div class="col-2">
        <div class="cover-box p-3">
            <img :src="cover.thumb" :alt="cover.series" class="img-fluid">
        </div>
        <p class="text-uppercase text-white mt-3">{{ cover.series }}</p>
    </div>
</template>

<style lang="scss" scoped>
div.cover-box {
   min-width: 200px;
    aspect-ratio: 1 / 1;
    cursor: pointer;
    overflow: hidden;
    img {
        min-width: 100%;
        max-height: 100%;
        object-fit: cover;
        object-position: top;
        transition: all 0.7s ease;
        &:hover {
            opacity: 0.5;
            transform: scale(1.2)
        }
    }
}
</style>