// function draw() {
// 				var target = document.getElementById("foot_l");
// 				target.style.color = "white";
// 				target.style.backgroundColor = "#00BEC9";
// 				var untarget = document.getElementById("foot_c");
// 				untarget.style.color = '#00BEC9';
// 				untarget.style.backgroundColor = "white";
// 				var name = window.localStorage.getItem("name");
// 				var myChart = echarts.init(document.getElementById('main_two'));
// 				let myoption = BaseOption;
// 				myoption.title.text = name + ' 新增确诊/疑似趋势';
// 				myoption.legend.data = ['新增确诊', '新增疑似'];
// 				myoption.series = [{
// 							name: '新增确诊',
// 							type: 'line',
// 							stack: '总量',
// 							lineStyle:{
// 								normal:{
// 									color:'#00BEC9',
// 								}
// 							},
// 							data: [1737, 1982, 2102, 2590, 2829, 3235, 3887,3694,3143,3399,2656,3062,2478,2015,5152]
// 						},
// 						{
// 							name: '新增疑似',
// 							type: 'line',
// 							stack: '总量',
// 							data: [4148, 4812, 5019, 4562, 5173, 5072, 3971,5328,4833,4214,3916,4008,3536,3342,2807]
// 						}
// 					];
// 				myChart.setOption(myoption);
//
// 			}
//
// 			function drawSec() {
// 				var target = document.getElementById("foot_c");
// 				target.style.color = "white";
// 				target.style.backgroundColor = "#00BEC9";
// 				var untarget = document.getElementById("foot_l");
// 				untarget.style.color = '#00BEC9';
// 				untarget.style.backgroundColor = "white";
// 				var myChart = echarts.init(document.getElementById('main_two'));
// 				let myoption = option;
// 				myoption.title.text = name + ' 累计治愈/累计死亡';
// 				myoption.legend.data = ['新增确诊', '新增疑似'];
// 				myoption.series = [{
// 							name: '累计治愈',
// 							type: 'line',
// 							stack: '总量',
// 							data: [124, 171, 243, 328, 475, 632, 892,1153,1540,2050,2649,3281,3996,4740,5911],
// 						},
// 						{
// 							name: '累计死亡',
// 							type: 'line',
// 							stack: '总量',
// 							data: [170, 213, 259, 304, 361, 425, 490,563,636,722,908,1016,1113,1367,1380],
// 						}
// 					];
// 				myChart.setOption(myoption);
//
// 			}