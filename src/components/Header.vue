<script>
export default {
    data() {
        return {
            menuItems: [
                {
                    isClicked: false,
                    label: "Characters",
                    url: "#"
                },
                {
                    isClicked: true,
                    label: "Comics",
                    url: "#"
                },
                {
                    isClicked: false,
                    label: "Movies",
                    url: "#"
                },
                {
                    isClicked: false,
                    label: "Tv",
                    url: "#"
                },
                {
                    isClicked: false,
                    label: "Games",
                    url: "#"
                },
                {
                    isClicked: false,
                    label: "Collectibles",
                    url: "#"
                },
                {
                    isClicked: false,
                    label: "Videos",
                    url: "#"
                },
                {
                    isClicked: false,
                    label: "Fans",
                    url: "#"
                },
                {
                    isClicked: false,
                    label: "News",
                    url: "#"
                },
                {
                    isClicked: false,
                    label: "Shop",
                    url: "#"
                },
            ]
        }
    }

}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-center py-4">
                    <a href="/"><img class="img-fluid" src="../assets/dc-logo.png" alt="DC Comics"></a>
                    <ul class="list-unstyled d-flex ">
                        <li v-for="item, i in menuItems" :key="i" class="px-2 fw-bolder"><a class="text-decoration-none text-uppercase" :class="item.isClicked ? 'active' : ''"  :href="item.url"> {{ item.label }} </a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
header {
    ul {
        .active {
            border-bottom: 5px solid blue;
            padding-bottom: 40px;
            
        }
    }
}
</style>