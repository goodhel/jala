<template>
    <div class='wrapper'>
        <app-header />

        <div class="content-wrapper">
            <router-view></router-view>
        </div>

        <app-footer />
    </div>
</template>
<script>
    import Header from './Header.vue'
    import Footer from './Footer.vue'
export default {
    components:{
        'app-header': Header,
        'app-footer': Footer,
    }
}
</script>