

			function draw() {
				var name = window.localStorage.getItem("name");
				let data = getData(name);
				var target = document.getElementById("foot_l");
				target.style.color = "white";
				target.style.backgroundColor = "#00BEC9";
				var untarget = document.getElementById("foot_c");
				untarget.style.color = '#00BEC9';
				untarget.style.backgroundColor = "white";
				var myChart = echarts.init(document.getElementById('main'));
				let myoption = BaseOption;

				myoption.title.text = name + ' 新增确诊/疑似趋势';
				myoption.legend.data = ['新增确诊', '新增疑似'];
				myoption.series = data;
				myChart.setOption(myoption);

			}

			function drawSec() {
				var name = window.localStorage.getItem("name");
				let data = getDataSec(name);
				var target = document.getElementById("foot_c");
				target.style.color = "white";
				target.style.backgroundColor = "#00BEC9";
				var untarget = document.getElementById("foot_l");
				untarget.style.color = '#00BEC9';
				untarget.style.backgroundColor = "white";
				var myChart = echarts.init(document.getElementById('main'));
				let myoption = BaseOption;
				myoption.title.text = name + ' 累计治愈/累计死亡';
				myoption.legend.data = ['累计治愈', '累计死亡'];
				myoption.series = data;
				myChart.setOption(myoption);

			}
			function goBack(){
				window.location.href ='index.html';
			}