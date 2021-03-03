const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    nickname: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150,
        }
    },
    gender: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum : 10,
            message: "must be at least 10 digits"
        },        
    }
}

const app =Vue.createApp({
    data() {
        return {
            firstname: null,
            lastname: null,
            nickname: null,
            age: null,
            gender: null,
            email: null,
            phone: null,
            gender_lists: [{gender_id: 1, gender_type:'Male'},
                           {gender_id: 2, gender_type:'Female'},
                           {gender_id: 3, gender_type:'Others..'}],
            errors: null,
        }
    },
    methods: {
        checkForm(){
            this.errors = validate({firstname: this.firstname,
                                    lastname: this.lastname,
                                    nickname: this.nickname,
                                    age: this.age,
                                    gender: this.gender,
                                    email: this.email,
                                    phone: this.phone},
                                    constraints)
            if(!this.errors){
                alert("Your Profile is Update Successfully. :) ")
            }
        }
    }
})

app.mount('#app')
