<template>
    <div>
        <button @click="toggle">Modal</button>
        <teleport to="body">
        <div v-show="show" class="modal">
            <h1>Titulo</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti accusamus totam id rerum iusto officiis, quibusdam quo? Suscipit, deleniti voluptate est, perspiciatis soluta beatae molestiae vitae recusandae facilis amet accusamus.</p>
            <button @click="toggle">Cerrar</button>
        </div>
    </teleport>
    </div>
</template>
<script>
export default {
    data:()=>({
        show:true
    }),
    methods:{
        toggle(){
            this.show = !this.show
        }
    },
    
    
}
</script>