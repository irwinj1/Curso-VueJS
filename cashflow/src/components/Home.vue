<template>
    <div>
        
        <Layout>
            <template #header>
                <Header></Header>
            </template>
            <template #resume>
                <Resume :label="label" :totalAmount="100000" :amount="amount" >
                    <template #graphic>Graphic:</template>
                    <template #action>Action:</template>
                </Resume>
            </template>
            <template #movements>
                <Movements :movements="movements"></Movements>
            </template>
        </Layout>
    </div>
</template>

<script>
import Header from './Header.vue'
import Layout from './Layout.vue';
import Resume from '@/components/Resume/Index.vue'
import Movements from './Movements/index.vue';
export default {
    components:{Layout,Header,Resume,Movements},
    data:()=>({
        amount:null,
        label:null,
        movements:[
            {
                id:1,
                title:"Movimiento",
                description:"Deposito de salario",
                amount:1000
            },
            {
                id:2,
                title:"Movimiento 2",
                description:"Deposito de honorarios",
                amount:500
            },
            {
                id:3,
                title:"Movimiento 3",
                description:"Comida",
                amount:-100
            },
            {
                id:4,
                title:"Movimiento 4",
                description:"Colegiatura",
                amount:1000
            },
            {
                id:1,
                title:"Movimiento 5",
                description:"Reaparación de equipo",
                amount:1000
            },
        ]
    })
}
</script>