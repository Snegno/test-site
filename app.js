
Vue.createApp({
	data() {
		return {
			inputText: '',
			list_arr: [],
			list_arr_close: [],
			counter: 0,
			index: 0,
			one_list_count: 0,
			two_list_count: 0
		}
	},
	methods: {
		//получаем значение
		inInput(event) {
			// отлавливаем что записали в инпут
			this.inputText = event.target.value;
		},
		//выводим его при клике в список ТуДу
		addTask(event) {
			//добавляем задачу в массив
			this.list_arr.push(this.inputText);
			//очищаем поле и увеличиваем счетчик
			this.inputText = '';
			this.counter++;
		},
		//проверяем клик по Чекбоксу
		doCheck(item,type) {
			if(type === 'need') {
				//находим элемент по которому кликнули
				this.index=this.list_arr.indexOf(item,0);
				this.list_arr_close[this.list_arr_close.length] = this.list_arr[this.index]; 
				//удаляем из первого массива скопированный эл-нт
				this.list_arr.splice(this.index,1);
			}
			//если нажат чекбокс в другом списке
			else {
				this.index=this.list_arr_close.indexOf(item,0);
				this.list_arr[this.list_arr.length] = this.list_arr_close[this.index]; 
				//удаляем из второго массива скопированный эл-нт
				this.list_arr_close.splice(this.index,1);
			}
		},
		removeTask(item) {
			//находим в каком массиве есть этот элемент
			if(this.list_arr.indexOf(item,0)>=0) {
				this.index=this.list_arr.indexOf(item,0);
				//удаляем из массива
				this.list_arr.splice(this.index,1);
			}
			else {
				this.index=this.list_arr_close.indexOf(item,0);
				this.list_arr_close.splice(this.index,1)
			}	
		}
		
	}
}).mount('#app');