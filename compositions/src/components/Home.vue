<template>
  <div>
    <h1>{{saludoCompleto }}</h1>
    <div>
        {{ obj.counter}}
    </div>
    <h3>Nombre: {{nombre}}</h3>
    <button ref="btn">click</button>
  </div>
</template>
<script setup>
import { ref,reactive,watch,computed,inject } from "vue";
const props = defineProps(['saludo1','saludo2'])
const obj = reactive({counter:0})
const nombre = inject('nombre')
const btn = ref(null)

console.log(btn);
setInterval(()=>{
    obj.counter++
},1000)

watch(
//     ()=>obj.counter,(valor,anterior)=>{
//     console.log(valor,anterior);
// },
()=>btn.value,(valor,anterior)=>{
    console.log(valor);
}

)
watch(()=>obj.counter,(valor)=>{
    if (valor == 500) {
        obj.counter = 0
    }
})
const saludoCompleto = computed(()=>`${props.saludo1} ${props.saludo2}`)

</script>