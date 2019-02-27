<template>
    <div>
		<Header-com/>
    </div>
</template>
<script>

import Header from "./components/header";
export default {
	components:{
		"Header-com":Header
	},
//     created(){
//         this.handleHomeData();
//     },
//     methods:{
//         ...Vuex.mapActions({
//             handleHomeData:"home/handleHomeData",
//         })
//     },
}
</script>
<style scoped lang="scss">

</style>



