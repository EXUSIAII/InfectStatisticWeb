

let BaseOption = {
	title: {
		text: '折线图'
	},
	// tooltip: {
	//     trigger: 'axis',
	//     axisPointer: {
	//         type: 'cross',
	//         label: {
	//             backgroundColor: '#6a7985'
	//         }
	//     }
	// },
	// legend: {
	// 	// type: 'scroll',
	// 	orient: 'vertical',
	// 	right: 10,
	// 	top: 20,
	// 	bottom: 20,
	// 	data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
	// },
	// toolbox: {
	//     feature: {
	//         saveAsImage: {}
	//     }
	// },
	grid: {
		left: '3%',
		right: '4%',
		bottom: '3%',
		width: '650px',
		containLabel: true
	},
	xAxis: [{
		type: 'category',
		boundaryGap: false,
		data: ['1.29', '1.30', '1.31', '2.1', '2.2', '2.3', '2.4','2.5','2.6','2.7','2.8','2.9','2.10','2.11','2.12']

	}],
	yAxis: [{
		type: 'value'
	}],
	series: [{
			name: '新增确诊',
			type: 'line',
			// stack: '总量',
			data: [120, 132, 101, 134, 90, 230, 210]
		},
		{
			name: '新增疑似',
			type: 'line',
			// stack: '总量',
			data: [220, 182, 191, 234, 290, 330, 310]
		}
	]
};


function getData(name){
	let data ='';
	switch (name){
		case "福建":
			data = [{
						name: '新增确诊',
						type: 'line',
						// stack: '总量',
						data: [2, 1, 3, 4, 2, 3, 4, 7, 5, 6, 5, 6, 8, 5, 7],
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
						data: [10, 13, 22, 20, 22, 18, 20, 32, 40, 32, 39, 43, 45, 46, 49],
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
					]

			break;
			case "湖北":
			data = [{
							name: '新增确诊',
							type: 'line',
							// stack: '总量',
							data: [23, 19, 34, 47, 29, 35, 47, 75, 56, 67, 56, 67, 80, 59, 77],
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
							data: [101, 132, 227, 239, 248, 267, 273,282, 291, 308, 318, 418, 458,558,588],
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
					]
			break;
			case "广东":
			data = [{
							name: '新增确诊',
							type: 'line',
							// stack: '总量',
							data: [15, 18, 20, 21, 23, 27,29, 31, 35, 44, 52, 58, 61, 68, 72],
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
							data: [65, 72, 79, 81, 89, 91, 97,105, 115, 135, 153, 159, 168,171,179],
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
					]
			break;
			case "浙江":
			data = [{
							name: '新增确诊',
							type: 'line',
							// stack: '总量',
							data: [10, 19, 20,18, 17, 19, 19, 21, 18, 22, 32, 44, 45, 46, 47],
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
							data: [101, 132, 227, 239, 248, 267, 273,282, 291, 358, 388, 418, 458,558,588],
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
					]
			break;
		default:
		data = [{
						name: '新增确诊',
						type: 'line',
						// stack: '总量',
						data: [2, 1, 3, 4, 2, 3, 4, 7, 5, 6, 5, 6, 8, 5, 7],
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
						data: [10, 13, 22, 20, 22, 18, 20, 32, 40, 32, 39, 43, 45, 46, 49],
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
				]
			break;
	}
	return data;
}

function getDataSec(name){
	let data ='';
	switch (name){
		case "福建":
			data = [{
							name: '累计治愈',
							type: 'line',
							// stack: '总量',
							data: [0, 1, 2, 3, 5, 7, 8,11,12,14,19,22,23,24,27],
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
							data: [0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0],
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
					]
			break;
			case "湖北":
			data = [{
							name: '累计治愈',
							type: 'line',
							// stack: '总量',
							data: [10, 12, 14, 16, 17, 19, 21,22,23,25,27,31,32,34,38],
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
							data: [2, 3, 5, 8, 10, 13, 14,15,15,17,18,19,21,21,23],symbol: 'none',
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
					]
			break;
			case "广东":
			data = [{
							name: '累计治愈',
							type: 'line',
							// stack: '总量',
							data: [4, 5, 7, 8, 10, 13, 15,16,18,23,26,29,31,32,33],
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
							data: [0, 0, 0, 0, 0, 1, 1,1,1,2,2,2,2,2,2],
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
					]
			break;
			case "浙江":
			data = [{
							name: '累计治愈',
							type: 'line',
							// stack: '总量',
							data: [5, 7, 9, 13, 17, 22, 28,35,42,51,59,65,71,82,91],
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
							data: [0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0],symbol: 'none',
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
					]
			break;
		default:
		data =[{
							name: '累计治愈',
							type: 'line',
							// stack: '总量',
							data: [0, 1, 2, 3, 5, 7, 8,11,12,14,19,22,23,24,27],
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
							data: [0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,1,1,1],symbol: 'none',
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
					]
			break;
	}
	return data;
}
function getNowFormatDate() {
            var date = new Date();
            var seperator1 = "-";
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            return year + seperator1 + month + seperator1 + strDate;
        }