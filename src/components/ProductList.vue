<template>
    <ul class="catalog__list">
        <li class="catalog__item" v-for="(oProduct, iIndex) in products" :key="iIndex">
            <ProductItem :product="oProduct"/>
        </li>
    </ul>
</template>

<script>
    import ProductItem from './ProductItem.vue'

    export default {
        props: ["products"],
        components: {
            ProductItem,
        }
    }
</script>