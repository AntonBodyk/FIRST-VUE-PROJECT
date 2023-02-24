import { createStore } from "vuex";

export default createStore({
    state: {
        likes: 2,
        isAuth: false
    },
    getters: {
        doubleLikes(state) {
            return state.likes * 2;   // Геттеры- должны обязательно что-то возвращать 
        }
    },
    mutations: {
        incrementLikes(state) {
            state.likes += 1;
        },
        decrementLikes(state) {
            state.likes -= 1;
        }
    }
});