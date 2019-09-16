new Vue ({
	el:'#app',
	data:{
		title:"Hello world!",
		styleCSS:''
	},
	methods:{
		changeText(){
			this.title="какой-либо текст"
		}
	}
});