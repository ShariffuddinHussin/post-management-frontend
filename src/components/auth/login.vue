<template>
    <div>
        <h4>Login</h4>
        <form>
            <label for="email" >E-Mail Address</label>
            <div>
                <input id="email" type="email" v-model="email" required autofocus>
            </div>
            <div>
                <label for="password" >Password</label>
                <div>
                    <input id="password" type="password" v-model="password" required>
                </div>
            </div>
            <div>
                <button type="submit" @click="handleSubmit">
                    Login
                </button>
            </div>
        </form>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data(){
        return {
                email : "",
                password : ""
            }

    },
       methods : {
            handleSubmit(e){
                e.preventDefault()
                if (this.password.length > 0) {
                    axios.post('http://post-management-backend.test/api/login', {
                        email: this.email,
                        password: this.password
                    })
                    .then(response => {
                        console.log("success");
                         return response
                    })
                    .catch(function (error) {
                        console.error(error.response);
                    });
                }
            }
        }
    }
</script>

<style>
</style>