<template>
  <div>
    <Layout>
      <template #header>
        <Header></Header>
      </template>
      <template #resume>
        <Resume :label="label" :totalAmount="motrarAmount" :amount="amount">
          <template #graphic>
            <Graphic :amounts="amounts" />
          </template>
          <template #action>
            <Action @create="create" />
          </template>
        </Resume>
      </template>
      <template #movements>
        <Movements :movements="movements" @remove="remove"></Movements>
      </template>
    </Layout>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Layout from "./Layout.vue";
import Resume from "@/components/Resume/Index.vue";
import Movements from "./Movements/index.vue";
import Action from "./Action.vue";
import Graphic from "./Resume/Graphic.vue";
export default {
  components: { Layout, Header, Resume, Movements, Action, Graphic },
  data: () => ({
    amount: null,
    label: null,
    //amounts:[1000,500,-500,300,-100,900,-15,0,500],
    movements: [],
  }),
  computed: {
    amounts() {
      const lastDay = this.movements
        .filter((m) => {
          const today = new Date();
          const oldDate = today.setDate(today.getDay() - 335);
          return m.time > oldDate;
        })
        .map((m) => m.amount);
      return lastDay.map((m, i) => {
        const lastMovenments = lastDay.slice(0, i);
        return lastMovenments.reduce((suma, movement) => {
          return suma + movement;
        }, 0);
      });
    },
    totalAmount (){
        return this.movements.reduce((suma,movement)=>{
            return suma +movement.amount
        },0)
    },
    motrarAmount(){
        return this.totalAmount?this.totalAmount:0
    }
  },
  methods: {
    getdata() {
      const data = JSON.parse(localStorage.getItem("movements"));
      if (Array.isArray(data)) {
        this.movements = data.map((m) => {
          return { ...m, time: new Date(m.time) };
        });
      }
    },
    create(movement) {
      this.movements.push(movement);
      this.saveData();
    },
    remove(id) {
      //this.movements = this.movements.filter(m=>m.id!==id)
      const index = this.movements.findIndex((m) => m.id === id);
      this.movements.splice(index, 1);
      this.saveData();
    },
    saveData() {
      localStorage.setItem("movements", JSON.stringify(this.movements));
    },
  },
  mounted() {
    this.getdata();
  },
};
</script>