import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import App from './App.vue'
import router from './router'
import { createApp } from "vue";


// Vue Toast Notification
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';


const app = createApp(App)

app.use(router)
app.use(ToastPlugin, {
    position: 'top-right'  // Podesite poziciju na 'top-right'
});
  
app.mount('#app')
