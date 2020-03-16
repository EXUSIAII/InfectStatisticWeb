window.onload = function(){
				draw();
				draw_map();
			};


			function draw_map(){
			    var target = document.getElementById("foot_cc");
				target.style.color = "white";
				target.style.backgroundColor = "#10aeb5";
				var untarget = document.getElementById("foot_cf");
				untarget.style.color = '#10aeb5';
				untarget.style.backgroundColor = "white";
			    var myChart = echarts.init(document.getElementById('main'));
			    var option = {
				backgroundColor: '#EFEFEF',
				// title: {
				//     text: '全国地图大数据',
				//     subtext: '',
				//     x:'center'
				// },
				tooltip: {
					trigger: 'item'
				},
				//左侧小导航图标
				visualMap: {
					show: true,
					x: 'left',
					y: 'bottom',
					splitList: [{
							start: 10000
						}, {
							start: 1000,
							end: 10000
						},
						{
							start: 500,
							end: 999
						}, {
							start: 100,
							end: 499
						},
						{
							start: 10,
							end: 99
						}, {
							start: 1,
							end: 9
						}, {
							end: 0
						}
					],
					color: ['#660208', '#8C0D0D', '#CC2929', '#FF7B69', '#FFAA85', '#FACD91', '#F2F2F2']
				},

				//配置属性
				series: [{
					name: '数据',
					type: 'map',
					mapType: 'china',
					roam: true,
					label: {
						normal: {
							show: true //省份名称
						},
						emphasis: {
							show: false
						}
					},
					data: mydata //数据
				}],

				scaleLimit: {
					min: 1,
					max: 1.5,
				},
			};

			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);
			myChart.on('click', function(params) {
				// 控制台打印数据的名称
				console.log(params.name);
				window.localStorage.setItem("name", params.name);
				window.location.href = '/detail';
			});
            }
			// 指定图表的配置项和数据
            function drawSec_map(){
			    var target = document.getElementById("foot_cf");
				target.style.color = "white";
				target.style.backgroundColor = "#10aeb5";
				var untarget = document.getElementById("foot_cc");
				untarget.style.color = '#10aeb5';
				untarget.style.backgroundColor = "white";
			    var myChart = echarts.init(document.getElementById('main'));
			    var option = {
				backgroundColor: '#EFEFEF',
				// title: {
				//     text: '全国地图大数据',
				//     subtext: '',
				//     x:'center'
				// },
				tooltip: {
					trigger: 'item'
				},
				//左侧小导航图标
				visualMap: {
					show: true,
					x: 'left',
					y: 'bottom',
					splitList: [{
							start: 10000
						}, {
							start: 1000,
							end: 10000
						},
						{
							start: 500,
							end: 999
						}, {
							start: 100,
							end: 499
						},
						{
							start: 10,
							end: 99
						}, {
							start: 1,
							end: 9
						}, {
							end: 0
						}
					],
					color: ['#660208', '#8C0D0D', '#CC2929', '#FF7B69', '#FFAA85', '#FACD91', '#F2F2F2']
				},

				//配置属性
				series: [{
					name: '数据',
					type: 'map',
					mapType: 'china',
					roam: true,
					label: {
						normal: {
							show: true //省份名称
						},
						emphasis: {
							show: false
						}
					},
					data: mydataSec //数据
				}],

				scaleLimit: {
					min: 1,
					max: 1.5,
				},
			};

			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);
			myChart.on('click', function(params) {
				// 控制台打印数据的名称
				console.log(params.name);
				window.localStorage.setItem("name", params.name);
				window.location.href = '/detail';
			});
            }


			function draw() {
				var target = document.getElementById("foot_l");
				target.style.color = "white";
				target.style.backgroundColor = "#10aeb5";
				var untarget = document.getElementById("foot_c");
				untarget.style.color = '#10aeb5';
				untarget.style.backgroundColor = "white";
				var name = window.localStorage.getItem("name");
				var myChart1 = echarts.init(document.getElementById('main_two'));
				let myoption = BaseOption;
				myoption.title.text =  '全国新增确诊/疑似趋势';
				// {#myoption.legend.data = ['新增确诊', '新增疑似'];#}
					myoption.series = [{
							name: '新增确诊',
							type: 'line',
							// stack: '总量',
							data: [1737, 1982, 2102, 2590, 2829, 3235, 3887, 3694, 3143, 3399, 2656, 3062, 2478, 2015, 5152],
							symbol: 'none',
							smooth: 'none',
							itemStyle: {
								normal: {
									color: '#ff3232', //改变折线点的颜色
									lineStyle: {
										color: '#ff3232' //改变折线颜色
									}
								}
							},
						},
						{
							name: '新增疑似',
							type: 'line',
							// stack: '总量',
							data: [4148, 4812, 5019, 4562, 5173, 5072, 3971, 5328, 4833, 4214, 3916, 4008, 3536, 3342, 2807],
							symbol: 'none',
							smooth: 'none',
							itemStyle: {
								normal: {
									color: '#ca833a', //改变折线点的颜色
									lineStyle: {
										color: '#ca833a' //改变折线颜色
									}
								}
							},
						}
					];
				myChart1.setOption(myoption);

			}

			function drawSec() {
				var target = document.getElementById("foot_c");
				target.style.color = "white";
				target.style.backgroundColor = "#10aeb5";
				var untarget = document.getElementById("foot_l");
				untarget.style.color = '#10aeb5';
				untarget.style.backgroundColor = "white";
				var myChart1 = echarts.init(document.getElementById('main_two'));
				let myoption = BaseOption;
				myoption.title.text =  '全国累计治愈/累计死亡';
				// myoption.legend.data = ['累计治愈', '累计死亡'];
					myoption.series = [{
							name: '累计治愈',
							type: 'line',
							// stack: '总量',
							data: [124, 171, 243, 328, 475, 632, 892, 1153, 1540, 2050, 2649, 3281, 3996, 4740, 5911],
							symbol: 'none',
							smooth: 'none',
							itemStyle: {
								normal: {
									color: '#10aeb5', //改变折线点的颜色
									lineStyle: {
										color: '#10aeb5' //改变折线颜色
									}
								}
							},
						},
						{
							name: '累计死亡',
							type: 'line',
							// stack: '总量',
							data: [170, 213, 259, 304, 361, 425, 490, 563, 636, 722, 908, 1016, 1113, 1367, 1380],
							symbol: 'none',
							smooth: 'none',
							itemStyle: {
								normal: {
									color: '#00329c', //改变折线点的颜色
									lineStyle: {
										color: '#00329c' //改变折线颜色
									}
								}
							},
						}
					];
				myChart1.setOption(myoption);

			}