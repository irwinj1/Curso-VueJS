import {reactive} from 'vue';

const store = reactive({
    username:'irwin.guardado',
    updateUsername(username){
        this.username = username
    }
})


export default store