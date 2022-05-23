import Vue from 'vue';
import App from './App.vue';

import {
	sMessage,
	oData
} from "./data";
import Data from "./data_mes";
import AlertMessage from "./data_func";

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount('#app');

alert("Первый алерт: " + sMessage);
alert("Второй алерт: " + oData.message);
alert("Третий алерт: " + Data.message);

var sFirstMessage = "Знакомимся с модулями.";
var sSecondMessage = "Выводим второе сообщение в функции.";

AlertMessage(sFirstMessage);
AlertMessage(sSecondMessage);