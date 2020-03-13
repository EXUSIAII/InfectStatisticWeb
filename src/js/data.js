let mydata = [{
		name: '北京',
		value: '429'
	}, {
		name: '天津',
		value: '136'
	},
	{
		name: '上海',
		value: '344'
	}, {
		name: '重庆',
		value: '576'
	},
	{
		name: '河北',
		value: '318'
	}, {
		name: '河南',
		value: '1272'
	},
	{
		name: '云南',
		value: '174'
	}, {
		name: '辽宁',
		value: '125'
	},
	{
		name: '黑龙江',
		value: '481'
	}, {
		name: '湖南',
		value: '1018'
	},
	{
		name: '安徽',
		value: '990'
	}, {
		name: '山东',
		value: '758'
	},
	{
		name: '新疆',
		value: '76'
	}, {
		name: '江苏',
		value: '631'
	},
	{
		name: '浙江',
		value: '1216'
	}, {
		name: '江西',
		value: '935'
	},
	{
		name: '湖北',
		value: '67760'
	}, {
		name: '广西',
		value: '252'
	},
	{
		name: '甘肃',
		value: '124'
	}, {
		name: '山西',
		value: '344'
	},
	{
		name: '内蒙古',
		value: '75'
	}, {
		name: '陕西',
		value: '245'
	},
	{
		name: '吉林',
		value: '93'
	}, {
		name: '福建',
		value: '296'
	},
	{
		name: '贵州',
		value: '146'
	}, {
		name: '广东',
		value: '1353'
	},
	{
		name: '青海',
		value: '18'
	}, {
		name: '西藏',
		value: '1'
	},
	{
		name: '四川',
		value: '539'
	}, {
		name: '宁夏',
		value: '75'
	},
	{
		name: '海南',
		value: '1018'
	}, {
		name: '台湾',
		value: '47'
	},
	{
		name: '香港',
		value: '119'
	}, {
		name: '澳门',
		value: '10'
	}
];

let BaseOption = {
	title: {
		text: '堆叠区域图'
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
	legend: {
		// type: 'scroll',
		orient: 'vertical',
		right: 10,
		top: 20,
		bottom: 20,
		data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
	},
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
			name: '新增确证',
			type: 'line',
			stack: '总量',
			data: [120, 132, 101, 134, 90, 230, 210]
		},
		{
			name: '新增疑似',
			type: 'line',
			stack: '总量',
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
							stack: '总量',
							data: [2, 1, 3, 4, 2, 3, 4, 7, 5, 6, 5, 6, 8, 5, 7]
						},
						{
							name: '新增疑似',
							type: 'line',
							stack: '总量',
							data: [10, 13, 22, 20, 22, 18, 20, 32, 40, 32, 39, 43, 45, 46, 49]
						}
					]
			break;
			case "湖北":
			data = [{
							name: '新增确诊',
							type: 'line',
							stack: '总量',
							data: [23, 19, 34, 47, 29, 35, 47, 75, 56, 67, 56, 67, 80, 59, 77]
						},
						{
							name: '新增疑似',
							type: 'line',
							stack: '总量',
							data: [101, 132, 227, 239, 248, 267, 273,282, 291, 308, 318, 418, 458,558,588]
						}
					]
			break;
			case "广东":
			data = [{
							name: '新增确诊',
							type: 'line',
							stack: '总量',
							data: [15, 18, 20, 21, 23, 27,29, 31, 35, 44, 52, 58, 61, 68, 72]
						},
						{
							name: '新增疑似',
							type: 'line',
							stack: '总量',
							data: [65, 72, 79, 81, 89, 91, 97,105, 115, 135, 153, 159, 168,171,179]
						}
					]
			break;
			case "浙江":
			data = [{
							name: '新增确诊',
							type: 'line',
							stack: '总量',
							data: [10, 19, 20,18, 17, 19, 19, 21, 18, 22, 32, 44, 45, 46, 47]
						},
						{
							name: '新增疑似',
							type: 'line',
							stack: '总量',
							data: [101, 132, 227, 239, 248, 267, 273,282, 291, 358, 388, 418, 458,558,588]
						}
					]
			break;
		default:
		data = [{
						name: '新增确诊',
						type: 'line',
						stack: '总量',
						data: [2, 1, 3, 4, 2, 3, 4, 7, 5, 6, 5, 6, 8, 5, 7]
					},
					{
						name: '新增疑似',
						type: 'line',
						stack: '总量',
						data: [10, 13, 22, 20, 22, 18, 20, 32, 40, 32, 39, 43, 45, 46, 49]
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
							stack: '总量',
							data: [0, 1, 2, 3, 5, 7, 8,11,12,14,19,22,23,24,27],
						},
						{
							name: '累计死亡',
							type: 'line',
							stack: '总量',
							data: [0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0]
						}
					]
			break;
			case "湖北":
			data = [{
							name: '累计治愈',
							type: 'line',
							stack: '总量',
							data: [10, 12, 14, 16, 17, 19, 21,22,23,25,27,31,32,34,38],
						},
						{
							name: '累计死亡',
							type: 'line',
							stack: '总量',
							data: [2, 3, 5, 8, 10, 13, 14,15,15,17,18,19,21,21,23]
						}
					]
			break;
			case "广东":
			data = [{
							name: '累计治愈',
							type: 'line',
							stack: '总量',
							data: [4, 5, 7, 8, 10, 13, 15,16,18,23,26,29,31,32,33],
						},
						{
							name: '累计死亡',
							type: 'line',
							stack: '总量',
							data: [0, 0, 0, 0, 0, 1, 1,1,1,2,2,2,2,2,2]
						}
					]
			break;
			case "浙江":
			data = [{
							name: '累计治愈',
							type: 'line',
							stack: '总量',
							data: [5, 7, 9, 13, 17, 22, 28,35,42,51,59,65,71,82,91],
						},
						{
							name: '累计死亡',
							type: 'line',
							stack: '总量',
							data: [0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0]
						}
					]
			break;
		default:
		data =[{
							name: '累计治愈',
							type: 'line',
							stack: '总量',
							data: [0, 1, 2, 3, 5, 7, 8,11,12,14,19,22,23,24,27],
						},
						{
							name: '累计死亡',
							type: 'line',
							stack: '总量',
							data: [0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0]
						}
					]
			break;
	}
	return data;
}