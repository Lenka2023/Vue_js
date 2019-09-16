new Vue ({
	el:'#app',
	data:{
		title:"Hello world!"
	},
	methods:{
		changeText(){
			this.title="какой-либо текст"
		}
	}
});