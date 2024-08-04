<script>
import BlueSection from '../components/partials/Blue-section.vue';
import Hero from '../components/partials/Hero.vue';
import ComicsSection from '../components/partials/ComicSection.vue';

import comics from '../components/data/comicList';
export default {
    components: {
        Hero,
        ComicsSection,
        BlueSection
    }
}
</script>
<template>
    <main>
        <Hero />
        <div class="bg-color">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <ComicsSection v-for="thumb, index in comics" :key="`t-${index}`" :cover="thumb"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg_blue">
            <div class="container">
                 <div class="row">
                    <div class="col-12">
                        <BlueSection />
                    </div>
                </div>
            </div>
        </div>
        
    </main>
</template>
<style lang="scss" scoped>
    @use "../components/styles/partials/variables.scss";
    main {
        .bg-color {
            background-color: variables.$main_bg;
        }
        .bg_blue {
            background-color: variables.$primary_color;
        }
    }
</style>