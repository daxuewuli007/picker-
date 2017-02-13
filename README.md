## 通用js库，实现日历订制单列选项、多列日期选择的组件。

####使用说明:
####引入js文件夹下的picker.min.js文件,引入css文件夹下的picker.min.css后即可调用相关api实现想要的效果，不需要引入其他的类似calendar.js等。

####1、picker单列选择器\\
####^参数^数据类型^细节描述^
####|items|array|单列picker的选项用于生成picker的数据，picker的层级自定义，建议最多三层。|
####|options|Object|配置项。|
####|[options.depth]|number|picker深度(也就是有多少列) 取值为1-3。如果为空，则取items第一项的深度。|
####|[options.id]|string|作为picker的唯一标识！这里需要注意，如果页面中需要多个不同的单列picker，这里必须要配置。|
####|[options.className]|string|自定义类名。|
####|[options.defaultValue]|array| 默认选项的value数组。|
####|[options.onChange]|function|在picker选中的值发生变化的时候回调。|
####|[options.onConfirm]|function|在点击"确定"之后的回调，回调返回选中的结果(Array)，数组长度依赖于picker的层级。|

####demo\\
####<code>
####	weui.picker([
####	{
####		label: '飞机票',
####		value: 0,
####		disabled: true // 不可用
####	},
####	{
####		label: '火车票',
####		value: 1
####	},
####	{
####		label: '汽车票',
####		value: 3
####	},
####	{
####		label: '公车票',
####		value: 4,
####	}
####	], {
####	   className: 'custom-classname',
####	   defaultValue: [3],
####	   onChange: function (result) {
####		   console.log(result)
####	   },
####	   onConfirm: function (result) {
####		   console.log(result)
####	   },
####	   id: 'singleLinePicker'
####	});
####</code>	
####ps:多列和单列类似，具体可看api的设置，另外，单列或多列非日期选择的时候页面添加一个css属性，.weui-picker__ld{dispaly:none;}\\

	
####2、如果是要设置多列的联动，可在上例单列数据对象中的加一个children属性，即可设置多列，具体可看demo\\
####<code>
####weui.picker([
####{label:'39岁',value:39,children:[{label:'1',value:1},{label:"2",value:2},{label:'3',value:3}]},
####					{label:'40岁',value:40,children:[{label:'1',value:1},{label:"2",value:2},{label:'3',value:3}]},
####					{label:'41岁',value:41,children:[{label:'1',value:1},{label:"2",value:2},{label:'3',value:3}]},
####					{label:'42岁',value:42,children:[{label:'1',value:1},{label:"2",value:2},{label:'3',value:3}]},
####					{label:'43岁',value:43,children:[{label:'1',value:1},{label:"2",value:2},{label:'3',value:3}]},
####					{label:'44岁',value:44,children:[{label:'1',value:1},{label:"2",value:2},{label:'3',value:3}]},
####					{label:'45岁',value:45,children:[{label:'1',value:1},{label:"2",value:2},{label:'3',value:3}]}],  {
####						defaultValue: [1],
####		            onChange: function (result) {  
####		                //console.log(result);
####		            },  
####		            onConfirm: function (result) {  
####		            	defaultValue=result;
####		            	chkgrade.old=result[0];
####		            	// console.log(chkgrade.old);
####		            	$('#age').removeAttr("style");
####		                $("#age").text(arr_age[result-18]);
####		                return result;  
####		            },
####		            id: 'second_h'    
####           });  
####</code>



####3、多列日期picker选择器\\

####dataPicker 时间选择器，由picker拓展而来，提供年、月、日的选择。

####^参数^类型^细节描述^
####|options|object|配置项|
####|[options.id]|string|"datePicker"作为picker的唯一标识|
####|[options.start]|number|2000起始年份!!!必填!!!|
####|[options.end]|number|2030结束年份!!!必填!!!|
####|[options.className]|string|自定义类名|
####|[options.defaultValue]|array|默认选项的value数组, 如[1991, 6, 9]!!!必填!!!|
####|[options.onChange]|function|在picker选中的值发生变化的时候回调|
####|[options.onConfirm]|function|在点击"确定"之后的回调。回调返回选中的结果(Array)，数组长度依赖于picker的层级。|

####demo\\
####<code>
####weui.datePicker({
 ####   start: 1990,
####    end: 2000,
 ####   defaultValue: [1991, 6, 9],
####    onChange: function(result){
####        console.log(result);
 ####   },
####    onConfirm: function(result){
####        console.log(result);
####    },
####    id: 'datePicker'
####});
####</code>