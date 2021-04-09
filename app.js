
Vue.createApp({
	data() {
		return {
			inputText: '',
			list_arr: [],
			counter: 0
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
		},
		doCheck(index, type) {
			if(type === 'need') {
				//мы вырезаем элемент из массива и вствляем в массив "Зделано"
				console.log('Нарезаем массив');	
				console.log('index = '+this.index); //выведет undefined
				//что такое индекс
			}
		}
		
	}
}).mount('#app');