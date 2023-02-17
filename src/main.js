import { createApp } from 'vue';
import App from './App';
import components from './components/UI'; //Как я понял это компоненты из папки UI, то есть и кнопки и инпуты


const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component);   //Глобальная регистрация UI компонентов
});
app.mount('#app');
