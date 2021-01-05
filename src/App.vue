<template>
    <div id="app">
        <!--    方式一：通过路由组件实现路由-->
        <router-link to="/home">首页</router-link>
        <router-link to="/about">关于</router-link>


        <!--    方式二：通过html标签并绑定函数实现路由-->
        <button @click="firstPageClick()">首页</button>
        <button @click="aboutPageClick()">关于</button>
        <button @click="userPageClick()">用户</button>
        <router-link tag="button" :to="{name:'user',params:{userId:123}}">用户ID</router-link>
        <router-link tag="button" :to="{path:'/query',query:{name:'xiaoming',age:'18'}}">用户信息</router-link>
        <button @click="userPageClick()">用户ID</button>
        <button @click="userGetParamsClick()">query传参</button>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                userId: 'zhangsan'
            }
        },
        methods: {
            firstPageClick() {
                this.$router.push("/home");
            },
            aboutPageClick() {
                this.$router.push("/about");
            },
            userPageClick() {
                this.$router.push("/user/" + this.userId);
            },
            userGetParamsClick() {
                this.$router.push({
                    path: '/query',
                    query: {name: 'xiaohong', age: '20'}
                });
            }
        }
    }
</script>
<style>
</style>
