<script>
    export default {
    data() {
        return {
            shopItems: [
                {
                    href: "#",
                    src: "./src/assets/buy-comics-digital-comics.png",
                    text: "Digital Comics"
                },
                {
                    href: "#",
                    src: "./src/assets/buy-comics-merchandise.png",
                    text: "DC Merchandise"
                },
                {
                    href: "#",
                    src: "./src/assets/buy-comics-subscriptions.png",
                    text: "Subscription"
                },
                {
                    href: "#",
                    src: "./src/assets/buy-comics-shop-locator.png",
                    text: "Comic Shop Locator"
                },
                {
                    href: "#",
                    src: "./src/assets/buy-dc-power-visa.svg",
                    text: "DC Power Visa"
                },
            ]
        }
    }
}
</script>
<template>
    <main>
        <div class="bg-dark py-5 ">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 class="text-light"> --> Content goes here <--</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-blue position-relative z-3 ">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="py-5">
                            <div class="d-flex align-items-center justify-content-around">
                                <div v-for="item, index in shopItems" :key="`shop-${index}`" class="d-flex align-items-center ms-4">
                                    <a class="w_square me-3" :href="item.href">
                                        <img :src="item.src" :alt="item.text">
                                    </a>
                                    <p class="m-0 text-uppercase text-white">{{ item.text }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
 .d-flex {
    a {
        img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            object-position: center
        }
    }
}
    .bg-blue{
        background-color: blue;
    }
</style>
