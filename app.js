
Vue.createApp({
	data() {
		return {
			inputText: '',
			list_arr: [],
			counter: 0,
			index: 0
		}
	},
	methods: {
		//получаем значение
		inInput(event) {
			this.inputText = event.target.value;
		},
		//выводим его при клике в список ТуДу
		addTask(event) {
			console.log('click ' + this.inputText);
			this.list_arr.push(this.inputText);
			console.log('li_1 = '+this.list_arr[this.counter])
			this.inputText = '';
			this.counter++;
			console.log('index ' + this.index)
		},
		doCheck(item,type) {
			if(type === 'need') {
				this.index=this.list_arr.indexOf(item,0);
				console.log('ты нажал на '+this.list_arr[this.index])
			}
		}
		
	}
}).mount('#app');