
<script>
import { dcComicsList, shopList, dcList, sitesList, socials } from "../components/data/menuLists"; 
export default {
    data() {
        return {
            dcComicsList,
            shopList,
            dcList,
            sitesList,
            socials
        };
    }
}
</script>

<template>
    <footer class="position-relative">
        <div class="bg-image">
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        <div class="d-flex py-4">
                            <div class="me-5">
                                <h4 class="py-3 text-white fw-bolder text-uppercase">DC Comics</h4>
                                <ul class="list-unstyled">
                                    <li v-for="link, index in dcComicsList" :key="`c-${index}`"><a class="text-decoration-none" :href="link.path">{{link.label}}</a></li>
                                </ul>
                                <h4 class="py-3 text-white fw-bolder text-uppercase">Shop</h4>
                                <ul class="list-unstyled">
                                    <li v-for="link, index in shopList" :key="`sh-${index}`"><a class="text-decoration-none" :href="link.path">{{link.label}}</a></li>
                                </ul>
                            </div>
                            <div class="me-5">
                                <h4 class="py-3 text-white fw-bolder text-uppercase">DC</h4>
                                <ul class="list-unstyled">
                                    <li v-for="link, index in dcList" :key="`dc-${index}`"><a class="text-decoration-none" :href="link.path">{{link.label}}</a></li>
                                </ul>
                            </div>
                            <div class="me-5">
                                <h4 class="py-3 text-white fw-bolder text-uppercase">Sites</h4>
                                <ul class="list-unstyled">
                                    <li v-for="link, index in sitesList" :key="`s-${index}`"><a class="text-decoration-none" :href="link.path">{{link.label}}</a></li>
                                </ul>
                            </div>
                            <div class="offset-2 col-6">
                            <img class="img-fluid position-absolute" src="../assets/dc-logo-bg.png" alt="DC Logo">
                        </div>
                        </div>
        
                    </div>
                </div>
            </div>
                <div class="position-relative z-3">
                    <div class="bg-dark">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="py-4 d-flex justify-content-between">
                                        <button class="btn text-white border-blue rounded-0">Sign-up Now!</button>
                                        <div class="d-flex">
                                            <h4 class="text-primary text-uppercase me-4">Follow us</h4>
                                            <a v-for="img, index in socials" :key="index" class="mx-2" href="#"><img :src="img.path" :alt="img.alt"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </footer>
</template>
<style lang="scss">
footer {
    .bg-image {
        background-image: url("../assets/footer-bg.jpg");
        background-size: cover;
        z-index: 2;
    }
    .col-6 {
        img {
            top: -30px;
        }
    }

    .border-blue{
        border: 3px solid rgb(50, 50, 238);
    }
}
</style>