<template>
    <div>
        
        <Layout>
            <template #header>
                <Header></Header>
            </template>
            <template #resume>
                <Resume :label="label" :totalAmount="100000" :amount="amount" >
                    <template #graphic>
                        <Graphic :amounts="amounts"/>
                    </template>
                    <template #action>
                        <Action />
                    </template>
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
import Action from './Action.vue';
import Graphic from './Resume/Graphic.vue';
export default {
    components:{ Layout, Header, Resume, Movements, Action, Graphic },
    data:()=>({
        amount:null,
        label:null,
        //amounts:[1000,500,-500,300,-100,900,-15,0,500],
        movements:[
            {
                id:1,
                title:"Movimiento",
                description:"Deposito de salario",
                amount:1000,
                time: new Date("01/05/2022")
            },
            {
                id:2,
                title:"Movimiento 2",
                description:"Deposito de honorarios",
                amount:500,
                time: new Date("01/15/2022")
            },
            {
                id:3,
                title:"Movimiento 3",
                description:"Comida",
                amount:-100,
                time: new Date("01/25/2022")
            },
            {
                id:4,
                title:"Movimiento 4",
                description:"Colegiatura",
                amount:1000,
                time: new Date("02/01/2022")
            },
            {
                id:5,
                title:"Movimiento 5",
                description:"Reaparación de equipo",
                amount:1000,
                time: new Date("02/01/2022")
            },
            {
                id:6,
                title:"Movimiento 6",
                description:"Reaparación de equipo",
                amount:1000,
                time: new Date("02/01/2022")
            },
            {
                id:7,
                title:"Movimiento 7",
                description:"Reaparación de equipo",
                amount:1000,
                time: new Date("02/01/2022")
            },
        ]
    }),
    computed:{
        amounts(){
            return this.movements.filter(m =>{
                const today = new Date()
                const oldDate = today.setDate(today.getDay() -30)
                return m.time <= oldDate
            })
            .map(m=>m.amount)
        }
    }
}
</script>