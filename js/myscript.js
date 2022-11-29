// richiamo Vuejs
const {createApp} = Vue;

createApp({
    data () {
        return {
            newAnime: '',
            listAnime: [
                {
                    title: "Made in Abyss",
                    done: false
                },
                {
                    title: "High School DxD",
                    done: false
                },
                {
                    title: "Tokyo Ghoul",
                    done: false
                },
            ]
        }
    }

}).mount("#myapp");