const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@unanimous.com',
            gender: 'male',
            picture: 'https://images2.fanpop.com/image/photos/14600000/Random-pics-i-have-for-different-reasons-o_0-hyperness-14640796-317-320.jpg',
        }
    },
    methods: {
        async getUser() {

            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
console.log(results)
            this.firstName =results[0].name.first ,
                this.lastName = results[0].name.last,
                this.email = results[0].email,
                this.gender =results[0].gender,
                this.picture = results[0].picture.large
        }
    }
})
app.mount('#app')




