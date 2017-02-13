/*!
 * weui.js v1.0.0 (https://weui.io)
 * Copyright 2016, wechat ui team
 * MIT license
 */
//calendar的引入
var calendar = {

    /**
      * 农历1900-2100的润大小信息表
      * @Array Of Property
      * @return Hex 
      */
	lunarInfo: [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,//1900-1909
		0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,//1910-1919
		0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,//1920-1929
		0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,//1930-1939
		0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,//1940-1949
		0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0,//1950-1959
		0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,//1960-1969
		0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6,//1970-1979
		0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,//1980-1989
		0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0,//1990-1999
		0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,//2000-2009
		0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,//2010-2019
		0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,//2020-2029
		0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,//2030-2039
		0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0,//2040-2049
		/**Add By JJonline@JJonline.Cn**/
		0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0,//2050-2059
		0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4,//2060-2069
		0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0,//2070-2079
		0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160,//2080-2089
		0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252,//2090-2099
		0x0d520],//2100

    /**
      * 公历每个月份的天数普通表
      * @Array Of Property
      * @return Number 
      */
	solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],

    /**
      * 天干地支之天干速查表
      * @Array Of Property trans['甲','乙','丙','丁','戊','己','庚','辛','壬','癸']
      * @return Cn string 
      */
	Gan: ['\u7532', '\u4e59', '\u4e19', '\u4e01', '\u620a', '\u5df1', '\u5e9a', '\u8f9b', '\u58ec', '\u7678'],

    /**
      * 天干地支之地支速查表
      * @Array Of Property 
      * @trans['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥']
      * @return Cn string 
      */
	Zhi: ['\u5b50', '\u4e11', '\u5bc5', '\u536f', '\u8fb0', '\u5df3', '\u5348', '\u672a', '\u7533', '\u9149', '\u620c', '\u4ea5'],

    /**
      * 数字转中文速查表
      * @Array Of Property 
      * @trans ['日','一','二','三','四','五','六','七','八','九','十']
      * @return Cn string 
      */
	nStr1: ['\u65e5', '\u4e00', '\u4e8c', '\u4e09', '\u56db', '\u4e94', '\u516d', '\u4e03', '\u516b', '\u4e5d', '\u5341'],

    /**
      * 日期转农历称呼速查表
      * @Array Of Property 
      * @trans ['初','十','廿','卅']
      * @return Cn string 
      */
	nStr2: ['\u521d', '\u5341', '\u5eff', '\u5345'],

    /**
      * 月份转农历称呼速查表
      * @Array Of Property 
      * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
      * @return Cn string 
      */
	nStr3: ['\u6b63', '\u4e8c', '\u4e09', '\u56db', '\u4e94', '\u516d', '\u4e03', '\u516b', '\u4e5d', '\u5341', '\u51ac', '\u814a'],

    /**
      * 返回农历y年一整年的总天数
      * @param lunar Year
      * @return Number
      * @eg:var count = calendar.lYearDays(1987) ;//count=387
      */
	lYearDays: function (y) {
		var i, sum = 348;
		for (i = 0x8000; i > 0x8; i >>= 1) {
			sum += (calendar.lunarInfo[y - 1900] & i) ? 1 : 0;
		}
		return (sum + calendar.leapDays(y));
	},

    /**
      * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
      * @param lunar Year
      * @return Number (0-12)
      * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
      */
	leapMonth: function (y) { //闰字编码 \u95f0
		return (calendar.lunarInfo[y - 1900] & 0xf);
	},

    /**
      * 返回农历y年闰月的天数 若该年没有闰月则返回0
      * @param lunar Year
      * @return Number (0',29',30)
      * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
      */
	leapDays: function (y) {
		if (calendar.leapMonth(y)) {
			return ((calendar.lunarInfo[y - 1900] & 0x10000) ? 30 : 29);
		}
		return (0);
	},

    /**
      * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
      * @param lunar Year
      * @return Number (-1',29',30)
      * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
      */
	monthDays: function (y, m) {
		if (m > 12 || m < 1) {
			return -1;
		}//月份参数从1至12，参数错误返回-1
		return ((calendar.lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29);
	},

    /**
      * 返回公历(!)y年m月的天数
      * @param solar Year
      * @return Number (-1',28',29',30',31)
      * @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
      */
	solarDays: function (y, m) {
		if (m > 12 || m < 0) {
			return -1;
		} //若参数错误 返回-1
		var ms = m;
		if (ms == 1) { //2月份的闰平规律测算后确认返回28或29
			return (((y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0)) ? 29 : 28);
		}
		else {
			return (calendar.solarMonth[ms]);
		}
	},

    /**
     * 农历年份转换为干支纪年
     * @param  lYear 农历年的年份数
     * @return Cn string
     */
	toGanZhiYear: function (lYear) {
		var ganKey = (lYear - 3) % 10;
		var zhiKey = (lYear - 3) % 12;
		if (ganKey == 0) ganKey = 10;//如果余数为0则为最后一个天干
		if (zhiKey == 0) zhiKey = 12;//如果余数为0则为最后一个地支
		return calendar.Gan[ganKey - 1] + calendar.Zhi[zhiKey - 1];

	},



    /**
      * 传入offset偏移量返回干支
      * @param offset 相对甲子的偏移量
      * @return Cn string
      */
	toGanZhi: function (offset) {
		return calendar.Gan[offset % 10] + calendar.Zhi[offset % 12];
	},


    /**
      * 传入农历数字月份返回汉语通俗表示法
      * @param lunar month
      * @return Cn string
      * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
      */
	toChinaMonth: function (m) { // 月 => \u6708
		if (m > 12 || m < 1) {
			return -1;
		} //若参数错误 返回-1
		var s = calendar.nStr3[m - 1];
		s += '\u6708';//加上月字
		return s;
	},

    /**
      * 传入农历日期数字返回汉字表示法
      * @param lunar day
      * @return Cn string
      * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
      */
	toChinaDay: function (d) { //日 => \u65e5
		var s;
		switch (d) {
			case 10:
				s = '\u521d\u5341'; break;
			case 20:
				s = '\u4e8c\u5341'; break;
			case 30:
				s = '\u4e09\u5341'; break;
			default:
				s = calendar.nStr2[Math.floor(d / 10)];
				s += calendar.nStr1[d % 10];
		}
		return (s);
	},

 
	
	//返回一种的第几周
	getYearWeek: function (a, b, c) {
		var d1 = new Date(a, b, c), d2 = new Date(a, 0, 1),
			d = calendar.dayOfYear(d1);
		var num = Math.ceil((d + ((d2.getDay() + 1) - 1)) / 7);
		if (num > 1 && b === 11) {
			var nextYearDate = new Date(a + 1, 0, 1);
			var interval = nextYearDate.getDay();
			if (interval > 0 && calendar.getIntervalDays(d1, nextYearDate) <= interval) {
				num = 1;
			}
		}
		return num;
	},
	isEaster: function (y, m, d) {
		var C = Math.floor(y / 100);
		var N = y - 19 * Math.floor(y / 19);
		var K = Math.floor((C - 17) / 25);
		var I = C - Math.floor(C / 4) - Math.floor((C - K) / 3) + 19 * N + 15;
		I = I - 30 * Math.floor((I / 30));
		I = I - Math.floor(I / 28) * (1 - Math.floor(I / 28) * Math.floor(29 / (I + 1)) * Math.floor((21 - N) / 11));
		var J = y + Math.floor(y / 4) + I + 2 - C + Math.floor(C / 4);
		J = J - 7 * Math.floor(J / 7);
		var L = I - J;
		var M = 3 + Math.floor((L + 40) / 44);
		var D = L + 28 - 31 * Math.floor(M / 4);
		return m === M && d === D;
	},

	/**
	  * 传入阳历年月日获得详细的公历',农历object信息 <=>JSON
	  * @param y  solar year
	  * @param m  solar month
	  * @param d  solar day
	  * @return JSON object
	  * @eg:console.log(calendar.solar2lunar(1987,11,01));
	  */
	solar2lunar: function (y, m, d) { //参数区间1900.1.31~2100.12.31
		if (y < 1900 || y > 2100) {//年份限定',上限
			return -1;
		}
		if (y == 1900 && m == 0 && d < 31) {//下限
			return -1;
		}
		m=m-1;
		var objDate = new Date();
		if (!y) { //未传参  获得当天
			objDate = new Date();
		}
		else {
			objDate = new Date(y, parseInt(m), d);
		}
		var i, leap = 0, temp = 0;
		//修正ymd参数
		y = objDate.getFullYear(), m = objDate.getMonth(), d = objDate.getDate();
		m++;
		var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;
		for (i = 1900; i < 2101 && offset > 0; i++) {
			temp = calendar.lYearDays(i); offset -= temp;
		}
		if (offset < 0) {
			offset += temp; i--;
		}
		//是否今天
		var isTodayObj = new Date(), isToday = false;
		if (isTodayObj.getFullYear() == y && isTodayObj.getMonth() + 1 == m && isTodayObj.getDate() == d) {
			isToday = true;
		}
		//星期几
		var nWeek = objDate.getDay(), cWeek = calendar.nStr1[nWeek];
		//农历年
		var year = i;
		leap = calendar.leapMonth(i); //闰哪个月
		var isLeap = false;

		//效验闰月
		for (i = 1; i < 13 && offset > 0; i++) {
			//闰月
			if (leap > 0 && i == (leap + 1) && isLeap == false) {
				--i;
				isLeap = true; temp = calendar.leapDays(year); //计算农历闰月天数
			}
			else {
				temp = calendar.monthDays(year, i);//计算农历普通月天数
			}
			//解除闰月
			if (isLeap == true && i == (leap + 1)) {
				isLeap = false;
			}
			offset -= temp;
		}

		if (offset == 0 && leap > 0 && i == leap + 1)
			if (isLeap) {
				isLeap = false;
			}
			else {
				isLeap = true; --i;
			}
		if (offset < 0) {
			offset += temp; --i;
		}
		//农历月
		var month = i;
		//农历日
		var day = offset + 1;
		//天干地支处理
		var sm = m - 1;

		return { 'lYear': year, 'lMonth': month, 'lDay': day,'IMonthCn': (isLeap ? '\u95f0' : '') + calendar.toChinaMonth(month), 'IDayCn': calendar.toChinaDay(day), 'cYear': y, 'cMonth': m, 'cDay': d,  'isToday': isToday, 'isLeap': isLeap, 'nWeek': nWeek, 'ncWeek': '\u661f\u671f' + cWeek};
	},

	/**
	  * 传入农历年月日以及传入的月份是否闰月获得详细的公历',农历object信息 <=>JSON
	  * @param y  lunar year
	  * @param m  lunar month
	  * @param d  lunar day
	  * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]
	  * @return JSON object
	  * @eg:console.log(calendar.lunar2solar(1987,9,10));
	  */
	lunar2solar: function (y, m, d, isLeapMonth) {   //参数区间1900.1.31~2100.12.1
		isLeapMonth = !!isLeapMonth;
		// var leapOffset = 0;
		var leapMonth = calendar.leapMonth(y);
		// var leapDay = calendar.leapDays(y);
		if (isLeapMonth && (leapMonth != m)) {//传参要求计算该闰月公历 但该年得出的闰月与传参的月份并不同
			return -1;
		}
		if (y == 2100 && m == 12 && d > 1 || y == 1900 && m == 1 && d < 31) {//超出了最大极限值 
			return -1;
		}
		var day = calendar.monthDays(y, m);
		var _day = day;
		//bugFix 2016-9-25 
		//if month is leap, _day use leapDays method 
		if (isLeapMonth) {
			_day = calendar.leapDays(y, m);
		}
		if (y < 1900 || y > 2100 || d > _day) {//参数合法性效验 
			return -1;
		}
		//计算农历的时间差
		var offset = 0;
		for (var i = 1900; i < y; i++) {
			offset += calendar.lYearDays(i);
		}
		var leap = 0, isAdd = false;
		for (i = 1; i < m; i++) {
			leap = calendar.leapMonth(y);
			if (!isAdd) {//处理闰月
				if (leap <= i && leap > 0) {
					offset += calendar.leapDays(y); isAdd = true;
				}
			}
			offset += calendar.monthDays(y, i);
		}
		//转换闰月农历 需补充该年闰月的前一个月的时差
		if (isLeapMonth) {
			offset += day;
		}
		//1900年农历正月一日的公历时间为1900年1月30日0时0分0秒(该时间也是本农历的最开始起始点)
		var stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
		var calObj = new Date((offset + d - 31) * 86400000 + stmap);
		var cY = calObj.getUTCFullYear();
		var cM = calObj.getUTCMonth();
		var cD = calObj.getUTCDate();
		return calendar.solar2lunar(cY, cM, cD);
	},

	
	//JS判断闰年代码
	isLeapYear: function (Year) {
		if (((Year % 4) == 0) && ((Year % 100) != 0) || ((Year % 400) == 0)) {
			return true;
		}
		else {
			return false;
		}
	},
	dayCountOfMonth: function (month, isLeap) {
		switch (month + 1) {
			case 1:
				return 31;
			case 2:
				if (!isLeap) {
					return 28;
				}
				return 29;
			case 3:
				return 31;
			case 4:
				return 30;
			case 5:
				return 31;
			case 6:
				return 30;
			case 7:
				return 31;
			case 8:
				return 31;
			case 9:
				return 30;
			case 10:
				return 31;
			case 11:
				return 30;
			case 12:
				return 31;
			default:
				break;
		}
		return 0;
	},
	
	/*
	 * 获取干支计时
	 *
	 * @param _date
	 * @param lunarHour
	 * @return
	*/
	
	//小时获取时辰
	getLunarHourIndex: function (hour) {
		return (Math.floor(hour / 2) + hour % 2) % 12;
	},
	getStemBranchHour: function (_date, lunarHour) {
		var dayOffset = calendar.getIntervalDays(calendar.BASE_STEMS_DATE, _date);
		var dt = parseInt((dayOffset + 9) % 10);
		var hb = lunarHour;
		var ht = (hb + ((dt > 4) ? (dt - 5) : dt) * 2) % 10;
		var termHour = ((6 * ht - 5 * hb) + 60) % 60;
		return termHour;
	},
	formatStemsBranchString: function (index) {
		if (index < 0) {
			return '';
		}
		return calendar.Gan[index % 10] + calendar.Zhi[index % 12];
	},
	getIntervalDays: function (base_date, _date) {
		_date.setHours(0);
		_date.setMinutes(0);
		_date.setSeconds(0);
		_date.setMilliseconds(0);
		return Math.floor((_date - base_date) / (1000 * 60 * 60 * 24));
	},
	
	dayOfYear: function (date) {
		var dateArr = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
		var day = date.getDate();
		var month = date.getMonth(); //getMonth()是从0开始
		var year = date.getFullYear();
		var result = 0;
		for (var i = 0; i < month; i++) {
			result += dateArr[i];
		}
		result += day;
		//判断是否闰年
		if (month > 1 && (year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
			result += 1;
		}
		return result;
	}

};

//picker的修改版
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["weui"] = factory();
	else
		root["weui"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	

	var _picker = __webpack_require__(24);

	var _gallery = __webpack_require__(29);

	var _gallery2 = _interopRequireDefault(_gallery);

	var _slider = __webpack_require__(31);

	var _slider2 = _interopRequireDefault(_slider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    
	    picker: _picker.picker,
	    datePicker: _picker.datePicker,
	    gallery: _gallery2.default,
	    slider: _slider2.default
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _dialog = __webpack_require__(6);

	var _dialog2 = _interopRequireDefault(_dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _sington = void 0;

	/**
	 * dialog，弹窗，alert和confirm的父类
	 *
	 * @param {object=} options 配置项
	 * @param {string=} options.title 弹窗的标题
	 * @param {string=} options.content 弹窗的内容
	 * @param {string=} options.className 弹窗的自定义类名
	 * @param {array=} options.buttons 按钮配置项
	 *
	 * @param {string} [options.buttons[].label=确定] 按钮的文字
	 * @param {string} [options.buttons[].type=primary] 按钮的类型 [primary, default]
	 * @param {function} [options.buttons[].onClick=$.noop] 按钮的回调
	 *
	 * @example
	 * weui.dialog({
	 *     title: 'dialog标题',
	 *     content: 'dialog内容',
	 *     className: 'custom-classname',
	 *     buttons: [{
	 *         label: '取消',
	 *         type: 'default',
	 *         onClick: function () { alert('取消') }
	 *     }, {
	 *         label: '确定',
	 *         type: 'primary',
	 *         onClick: function () { alert('确定') }
	 *     }]
	 * });
	 */
	
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	__webpack_require__(3);

	var _objectAssign = __webpack_require__(4);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _balajs = __webpack_require__(5);

	var _balajs2 = _interopRequireDefault(_balajs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 其实，$ 的原型就是一个数组，拥有数组的各种方法
	// 这里只是库内部使用，所以通过文档约束，不做容错校验，达到代码最小化

	/* 判断系统 */
	function _detect(ua) {
	    var os = this.os = {},
	        android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
	    if (android) {
	        os.android = true;
	        os.version = android[2];
	    }
	}
	_detect.call(_balajs2.default, navigator.userAgent);

	(0, _objectAssign2.default)(_balajs2.default.fn, {
	    /**
	     * 只能是一个 HTMLElement 元素或者 HTMLElement 数组，不支持字符串
	     * @param {Element|Element[]} $child
	     * @returns {append}
	     */
	    append: function append($child) {
	        if (!($child instanceof HTMLElement)) {
	            $child = $child[0];
	        }
	        this.forEach(function ($element) {
	            $element.appendChild($child);
	        });
	        return this;
	    },
	    /**
	     *
	     * @returns {remove}
	     */
	    remove: function remove() {
	        this.forEach(function ($element) {
	            $element.parentNode.removeChild($element);
	        });
	        return this;
	    },
	    /**
	     *
	     * @param selector
	     * @returns {HTMLElement}
	     */
	    find: function find(selector) {
	        return (0, _balajs2.default)(selector, this);
	    },
	    /**
	     *
	     * @param {String} className
	     * @returns {addClass}
	     */
	    addClass: function addClass(className) {
	        this.forEach(function ($element) {
	            // http://caniuse.com/#search=classList
	            $element.classList.add(className);
	        });
	        return this;
	    },
	    /**
	     *
	     * @param {String} className
	     * @returns {removeClass}
	     */
	    removeClass: function removeClass(className) {
	        this.forEach(function ($element) {
	            // http://caniuse.com/#search=classList
	            $element.classList.remove(className);
	        });
	        return this;
	    },
	    /**
	     *
	     * @param index
	     * @returns {*|jQuery|HTMLElement}
	     */
	    eq: function eq(index) {
	        return (0, _balajs2.default)(this[index]);
	    },
	    /**
	     *
	     * @returns {show}
	     */
	    show: function show() {
	        this.forEach(function ($element) {
	            $element.style.display = 'block';
	        });
	        return this;
	    },
	    /**
	     *
	     * @returns {hide}
	     */
	    hide: function hide() {
	        this.forEach(function ($element) {
	            $element.style.display = 'none';
	        });
	        return this;
	    },
	    /**
	     *
	     * @param html 目前只能接受字符串
	     * @returns {html}
	     */
	    html: function html(_html) {
	        this.forEach(function ($element) {
	            $element.innerHTML = _html;
	        });
	        return this;
	    },
	    /**
	     *
	     * @param {Object} obj 目前只能接受object
	     * @returns {css}
	     */
	    css: function css(obj) {
	        var _this = this;

	        Object.keys(obj).forEach(function (key) {
	            _this.forEach(function ($element) {
	                $element.style[key] = obj[key];
	            });
	        });
	        return this;
	    },
	    /**
	     *
	     * @param eventType
	     * @param selector
	     * @param handler
	     */
	    on: function on(eventType, selector, handler) {
	        var isDelegate = typeof selector === 'string' && typeof handler === 'function';
	        if (!isDelegate) {
	            handler = selector;
	        }
	        this.forEach(function ($element) {
	            eventType.split(' ').forEach(function (event) {
	                $element.addEventListener(event, function (evt) {
	                    if (isDelegate) {
	                        // http://caniuse.com/#search=closest
	                        if (this.contains(evt.target.closest(selector))) {
	                            handler.call(evt.target, evt);
	                        }
	                    } else {
	                        handler.call(this, evt);
	                    }
	                });
	            });
	        });
	        return this;
	    },
	    /**
	     *
	     * @param {String} eventType
	     * @param {String|Function} selector
	     * @param {Function=} handler
	     * @returns {off}
	     */
	    off: function off(eventType, selector, handler) {
	        if (typeof selector === 'function') {
	            handler = selector;
	            selector = null;
	        }

	        this.forEach(function ($element) {
	            eventType.split(' ').forEach(function (event) {
	                if (typeof selector === 'string') {
	                    $element.querySelectorAll(selector).forEach(function ($element) {
	                        $element.removeEventListener(event, handler);
	                    });
	                } else {
	                    $element.removeEventListener(event, handler);
	                }
	            });
	        });
	        return this;
	    },
	    /**
	     *
	     * @returns {Number}
	     */
	    index: function index() {
	        var $element = this[0];
	        var $parent = $element.parentNode;
	        return Array.prototype.indexOf.call($parent.children, $element);
	    },
	    /**
	     * @desc 因为off方法目前不可以移除绑定的匿名函数，现在直接暴力移除所有listener
	     * @returns {offAll}
	     */
	    offAll: function offAll() {
	        var _this2 = this;

	        this.forEach(function ($element, index) {
	            var clone = $element.cloneNode(true);
	            $element.parentNode.replaceChild(clone, $element);

	            _this2[index] = clone;
	        });
	        return this;
	    },
	    /**
	     *
	     * @returns {*}
	     */
	    val: function val() {
	        var _arguments = arguments;
	        if (arguments.length) {
	            this.forEach(function ($element) {
	                $element.value = _arguments[0];
	            });
	            return this;
	        }
	        return this[0].value;
	    },
	    /**
	     *
	     * @returns {*}
	     */
	    attr: function attr() {
	        var _arguments2 = arguments,
	            _this3 = this;

	        if (_typeof(arguments[0]) == 'object') {
	            var _ret = function () {
	                var attrsObj = _arguments2[0];
	                var that = _this3;
	                Object.keys(attrsObj).forEach(function (attr) {
	                    that.forEach(function ($element) {
	                        $element.setAttribute(attr, attrsObj[attr]);
	                    });
	                });
	                return {
	                    v: _this3
	                };
	            }();

	            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	        }

	        if (typeof arguments[0] == 'string' && arguments.length < 2) {
	            return this[0].getAttribute(arguments[0]);
	        }

	        this.forEach(function ($element) {
	            $element.setAttribute(_arguments2[0], _arguments2[1]);
	        });
	        return this;
	    }
	});

	(0, _objectAssign2.default)(_balajs2.default, {
	    extend: _objectAssign2.default,
	    /**
	     * noop
	     */
	    noop: function noop() {},
	    /**
	     * render
	     * 取值：<%= variable %>
	     * 表达式：<% if {} %>
	     * 例子：
	     *  <div>
	     *    <div class="weui-mask"></div>
	     *    <div class="weui-dialog">
	     *    <% if(typeof title === 'string'){ %>
	     *           <div class="weui-dialog__hd"><strong class="weui-dialog__title"><%=title%></strong></div>
	     *    <% } %>
	     *    <div class="weui-dialog__bd"><%=content%></div>
	     *    <div class="weui-dialog__ft">
	     *    <% for(var i = 0; i < buttons.length; i++){ %>
	     *        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_<%=buttons[i]['type']%>"><%=buttons[i]['label']%></a>
	     *    <% } %>
	     *    </div>
	     *    </div>
	     *  </div>
	     * A very simple template engine
	     * @param {String} tpl
	     * @param {Object=} data
	     * @returns {String}
	     */
	    render: function render(tpl, data) {
	        var code = 'var p=[],print=function(){p.push.apply(p,arguments);};with(this){p.push(\'' + tpl.replace(/[\r\t\n]/g, ' ').split('<%').join('\t').replace(/((^|%>)[^\t]*)'/g, '$1\r').replace(/\t=(.*?)%>/g, '\',$1,\'').split('\t').join('\');').split('%>').join('p.push(\'').split('\r').join('\\\'') + '\');}return p.join(\'\');';
	        return new Function(code).apply(data);
	    },
	    /**
	     * getStyle 获得元素计算后的样式值
	     */
	    getStyle: function getStyle(el, styleProp) {
	        var value,
	            defaultView = (el.ownerDocument || document).defaultView;
	        // W3C standard way:
	        if (defaultView && defaultView.getComputedStyle) {
	            // sanitize property name to css notation
	            // (hypen separated words eg. font-Size)
	            styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase();
	            return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
	        } else if (el.currentStyle) {
	            // IE
	            // sanitize property name to camelCase
	            styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
	                return letter.toUpperCase();
	            });
	            value = el.currentStyle[styleProp];
	            // convert other units to pixels on IE
	            if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
	                return function (value) {
	                    var oldLeft = el.style.left,
	                        oldRsLeft = el.runtimeStyle.left;
	                    el.runtimeStyle.left = el.currentStyle.left;
	                    el.style.left = value || 0;
	                    value = el.style.pixelLeft + 'px';
	                    el.style.left = oldLeft;
	                    el.runtimeStyle.left = oldRsLeft;
	                    return value;
	                }(value);
	            }
	            return value;
	        }
	    }
	});

	exports.default = _balajs2.default;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	// element-closest | CC0-1.0 | github.com/jonathantneal/closest

	(function (ElementProto) {
		if (typeof ElementProto.matches !== 'function') {
			ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
				var element = this;
				var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
				var index = 0;

				while (elements[index] && elements[index] !== element) {
					++index;
				}

				return Boolean(elements[index]);
			};
		}

		if (typeof ElementProto.closest !== 'function') {
			ElementProto.closest = function closest(selector) {
				var element = this;

				while (element && element.nodeType === 1) {
					if (element.matches(selector)) {
						return element;
					}

					element = element.parentNode;
				}

				return null;
			};
		}
	})(window.Element.prototype);


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, $) {
		$ = (function(document, s_addEventListener, s_querySelectorAll) {
			function $(s, context, bala) {
				bala = Object.create($.fn);

				s && bala.push.apply(bala, // if s is truly then push the following
					s[s_addEventListener] // if arg is node or window,
						? [s] // then pass [s]
						: "" + s === s // else if arg is a string
							? /</.test(s) // if the string contains "<" (if HTML code is passed)
								// then parse it and return node.children
								// use 'addEventListener' (HTMLUnknownElement) if content is not presented
								? ((context = document.createElement(context || s_addEventListener)).innerHTML = s
									, context.children)
								: context // else if context is truly
									? ((context = $(context)[0]) // if context element is found
										? context[s_querySelectorAll](s) // then select element from context
										: bala) // else pass [] (context isn't found)
									: document[s_querySelectorAll](s) // else select elements globally
							: typeof s == 'function' // else if function is passed
								// if DOM is ready
								// readyState[7] means readyState value is "interactive" or "complete" (not "loading")
								? document.readyState[7]
									? s() // then run given function
									: document[s_addEventListener]('DOMContentLoaded', s) // else wait for DOM ready
								: s); // else guessing that s variable is array-like Object

				return bala;
			}

			$.fn = [];

			$.one = function(s, context) {
				return $(s, context)[0] || null;
			};

			return $;
		})(document, 'addEventListener', 'querySelectorAll');


		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return $;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module == 'object' && module.exports) {
			module.exports = $;
		} else {
			root.$ = $;
		}
	})(this);


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<div class=\"<%=className%>\"> <div class=weui-mask></div> <div class=\"weui-dialog <% if(isAndroid){ %> weui-skin_android <% } %>\"> <% if(title){ %> <div class=weui-dialog__hd><strong class=weui-dialog__title><%=title%></strong></div> <% } %> <div class=weui-dialog__bd><%=content%></div> <div class=weui-dialog__ft> <% for(var i = 0; i < buttons.length; i++){ %> <a href=javascript:; class=\"weui-dialog__btn weui-dialog__btn_<%=buttons[i]['type']%>\"><%=buttons[i]['label']%></a> <% } %> </div> </div> </div> ";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _dialog = __webpack_require__(1);

	var _dialog2 = _interopRequireDefault(_dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * alert 警告弹框，功能类似于浏览器自带的 alert 弹框，用于提醒、警告用户简单扼要的信息，只有一个“确认”按钮，点击“确认”按钮后关闭弹框。*/
	
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _dialog = __webpack_require__(1);

	var _dialog2 = _interopRequireDefault(_dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 确认弹窗
	
	 */
	


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _toast = __webpack_require__(10);

	var _toast2 = _interopRequireDefault(_toast);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _sington = void 0;

	/**
	 * toast 一般用于操作成功时的提示场景
	 
	 */
	

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div class=\"<%= className %>\"> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class=\"weui-icon_toast weui-icon-success-no-circle\"></i> <p class=weui-toast__content><%=content%></p> </div> </div> ";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _loading = __webpack_require__(12);

	var _loading2 = _interopRequireDefault(_loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _sington = void 0;

	/**
	 * loading
	
	 */
	

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div class=\"weui-loading_toast <%= className %>\"> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class=\"weui-loading weui-icon_toast\"></i> <p class=weui-toast__content><%=content%></p> </div> </div> ";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _actionSheet = __webpack_require__(14);

	var _actionSheet2 = _interopRequireDefault(_actionSheet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _sington = void 0;

	/**
	 * actionsheet 弹出式菜单
	
	 */

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<div class=\"<% if(isAndroid){ %>weui-skin_android <% } %><%= className %>\"> <div class=weui-mask></div> <div class=weui-actionsheet> <div class=weui-actionsheet__menu> <% for(var i = 0; i < menus.length; i++){ %> <div class=weui-actionsheet__cell><%= menus[i].label %></div> <% } %> </div> <div class=weui-actionsheet__action> <% for(var j = 0; j < actions.length; j++){ %> <div class=weui-actionsheet__cell><%= actions[j].label %></div> <% } %> </div> </div> </div> ";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _topTips = __webpack_require__(16);

	var _topTips2 = _interopRequireDefault(_topTips);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _toptips = null;

	/**
	 * toptips 顶部报错提示
	
	 */
	

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<div class=\"weui-toptips weui-toptips_warn <%= className %>\" style=display:block><%= content %></div> ";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * searchbar 搜索框，主要实现搜索框组件一些显隐逻辑
	 */
/***/ },
/* 18 */
/***/function(module, exports, __webpack_require__) {
	'use strict';
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * tab tab导航栏
	 
	 */
	

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _topTips = __webpack_require__(15);

	var _topTips2 = _interopRequireDefault(_topTips);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _item = __webpack_require__(21);

	var _item2 = _interopRequireDefault(_item);

	var _image = __webpack_require__(22);

	var _upload = __webpack_require__(23);

	var _upload2 = _interopRequireDefault(_upload);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _id = 0;

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<li class=\"weui-uploader__file weui-uploader__file_status\" data-id=\"<%= id %>\"> <div class=weui-uploader__file-content> <i class=weui-loading style=width:30px;height:30px></i> </div> </li> ";

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.detectVerticalSquash = detectVerticalSquash;
	exports.dataURItoBlob = dataURItoBlob;
	exports.compress = compress;

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = upload;
	

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	__webpack_require__(25);

	var _util3 = __webpack_require__(26);

	var util = _interopRequireWildcard(_util3);

	var _picker = __webpack_require__(27);

	var _picker2 = _interopRequireDefault(_picker);

	var _group = __webpack_require__(28);

	var _group2 = _interopRequireDefault(_group);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _sington = void 0;

	var destroy = function destroy($picker) {
	    if ($picker) {
	        $picker.remove();
	        _sington = false;
	    }
	};

	var show = function show($picker) {
	    (0, _util2.default)('body').append($picker);

	    // 这里获取一下计算后的样式，强制触发渲染. fix IOS10下闪现的问题
	    _util2.default.getStyle($picker[0], 'transform');

	    $picker.find('.weui-mask').addClass('weui-animate-fade-in');
	    $picker.find('.weui-picker').addClass('weui-animate-slide-up');
	};

	var hide = function hide($picker) {
	    $picker.find('.weui-mask').addClass('weui-animate-fade-out');
	    $picker.find('.weui-picker').addClass('weui-animate-slide-down').on('animationend webkitAnimationEnd', function () {
	        destroy($picker);
	    });
	};

	// temp 存在上一次滑动的位置
	var temp = {};

	/**
	 * picker 多列选择器。
	 * @param {array} items picker的数据，即用于生成picker的数据，picker的层级可以自己定义，但建议最多三层。数据格式参考example。
	 * @param {Object} options 配置项
	 * @param {number=} [options.depth] picker深度(也就是picker有多少列) 取值为1-3。如果为空，则取items第一项的深度。
	 * @param {string=} [options.id=default] 作为picker的唯一标识
	 * @param {string=} [options.className] 自定义类名
	 * @param {array=} [options.defaultValue] 默认选项的value数组
	 * @param {function=} [options.onChange] 在picker选中的值发生变化的时候回调
	 * @param {function=} [options.onConfirm] 在点击"确定"之后的回调。回调返回选中的结果(Array)，数组长度依赖于picker的层级。
	 *
	 * @example
	 * // 单列picker
	 * weui.picker([
	 * {
	 *     label: '飞机票',
	 *     value: 0,
	 *     disabled: true // 不可用
	 * },
	 * {
	 *     label: '火车票',
	 *     value: 1
	 * },
	 * {
	 *     label: '汽车票',
	 *     value: 3
	 * },
	 * {
	 *     label: '公车票',
	 *     value: 4,
	 * }
	 * ], {
	 *    className: 'custom-classname',
	 *    defaultValue: [3],
	 *    onChange: function (result) {
	 *        console.log(result)
	 *    },
	 *    onConfirm: function (result) {
	 *        console.log(result)
	 *    },
	 *    id: 'singleLinePicker'
	 * });
	 *
	 * @example
	 * // 多列picker
	 * weui.picker([
	 *     {
	 *         label: '1',
	 *         value: '1'
	 *     }, {
	 *         label: '2',
	 *         value: '2'
	 *     }, {
	 *         label: '3',
	 *         value: '3'
	 *     }
	 * ], [
	 *     {
	 *         label: 'A',
	 *         value: 'A'
	 *     }, {
	 *         label: 'B',
	 *         value: 'B'
	 *     }, {
	 *         label: 'C',
	 *         value: 'C'
	 *     }
	 * ], {
	 *     defaultValue: ['3', 'A'],
	 *     onChange: function (result) {
	 *         console.log(result);
	 *     },
	 *     onConfirm: function (result) {
	 *         console.log(result);
	 *     },
	 *     id: 'multiPickerBtn'
	 * });
	 *
	 * @example
	 * // 级联picker
	 * weui.picker([
	 * {
	 *     label: '飞机票',
	 *     value: 0,
	 *     children: [
	 *         {
	 *             label: '经济舱',
	 *             value: 1
	 *         },
	 *         {
	 *             label: '商务舱',
	 *             value: 2
	 *         }
	 *     ]
	 * },
	 * {
	 *     label: '火车票',
	 *     value: 1,
	 *     children: [
	 *         {
	 *             label: '卧铺',
	 *             value: 1,
	 *             disabled: true // 不可用
	 *         },
	 *         {
	 *             label: '坐票',
	 *             value: 2
	 *         },
	 *         {
	 *             label: '站票',
	 *             value: 3
	 *         }
	 *     ]
	 * },
	 * {
	 *     label: '汽车票',
	 *     value: 3,
	 *     children: [
	 *         {
	 *             label: '快班',
	 *             value: 1
	 *         },
	 *         {
	 *             label: '普通',
	 *             value: 2
	 *         }
	 *     ]
	 * }
	 * ], {
	 *    className: 'custom-classname',
	 *    defaultValue: [1, 3],
	 *    onChange: function (result) {
	 *        console.log(result)
	 *    },
	 *    onConfirm: function (result) {
	 *        console.log(result)
	 *    },
	 *    id: 'doubleLinePicker'
	 * });
	 */

	 //  !!!有几个注意事项这里说明一下：1、代码的核心是picker中定义的scroll事件和until2中定义的scroll事件多看就能看懂了；
	 //  !!!                           2、改进的代码的核心在ssh自执行事件中，这里是参考的海大爷的小程序然后改进的；
	 //  !!!                           3、calendar里面solar2lunar方法中增加了一条m=m-1的语句，斟酌看一下吧；
	 //  !!!                          4、此外，改进的代码的总闸门在 on("click",".fu_confirm"）中，认真看一下吧； 
	var date2;
	var ssh;
	var year_start;
	var tear_end;
	var w_result=[];
	function picker() {
	    if (_sington) return _sington;
	    var isMulti = false; // 是否多列的类型
	    // 数据
	    var items = void 0;
	    if (arguments.length > 2) {
	        var i = 0;
	        items = [];
	        while (i < arguments.length - 1) {
	            items.push(arguments[i++]);
	        }
	        isMulti = true;
	    } else {
	        items = arguments[0];
	    }
	    //配置项
	    var options = arguments[arguments.length - 1];
	    
	    var defaults = _util2.default.extend({
	        id: 'default',
	        className: '',
	        onChange: _util2.default.noop,
	        onConfirm: _util2.default.noop
	    }, options);
        w_result=defaults.defaultValue;
	    // 获取缓存
	    temp[defaults.id] = temp[defaults.id] || [];
	    var result = [];
	    var lineTemp = temp[defaults.id];
	    var $picker = (0, _util2.default)(_util2.default.render(_picker2.default, defaults));
	    var depth = options.depth || (isMulti ? items.length : util.depthOf(items[0])),
	        groups = '';

	    while (depth--) {
	        groups += _group2.default;
	    }

	    $picker.find('.weui-picker__bd').html(groups);
	    show($picker);

	    // 初始化滚动
	    function scroll(items, level) {
	    	
	        if (lineTemp[level] === undefined && defaults.defaultValue && defaults.defaultValue[level] !== undefined) {
	            // 没有缓存选项，而且存在defaultValue
	            var defaultVal = defaults.defaultValue[level];
	            var index = 0,
	                len = items.length;

	            for (; index < len; ++index) {
	                if (defaultVal == items[index].value) break;
	            }
	            if (index < len) {
	                lineTemp[level] = index;
	            } else {
	                console.warn('Picker has not match defaultValue: ' + defaultVal);
	            }
	        }
	        $picker.find('.weui-picker__group').eq(level).scroll({
	            items: items,
	            temp: lineTemp[level],
	            onChange: function onChange(item, index) {            
	                //为当前的result赋值。
	                if (item) {
	                    result[level] = item.value;
	                } else {
	                    result[level] = null;
	                }
	                lineTemp[level] = index;
                    w_result=result; 
                    console.log(w_result);                  
	                if (isMulti) {
	                    defaults.onChange(result);
	                } else {
	                    /**
	                     * @子列表处理
	                     * 1. 在没有子列表，或者值列表的数组长度为0时，隐藏掉子列表。
	                     * 2. 滑动之后发现重新有子列表时，再次显示子列表。
	                     *
	                     * @回调处理
	                     * 1. 因为滑动实际上是一层一层传递的：父列表滚动完成之后，会call子列表的onChange，从而带动子列表的滑动。
	                     * 2. 所以，使用者的传进来onChange回调应该在最后一个子列表滑动时再call
	                     */
	                    if (item.children && item.children.length > 0) {
	                        $picker.find('.weui-picker__group').eq(level + 1).show();
	                        !isMulti && scroll(item.children, level + 1); // 不是多列的情况下才继续处理children
	                    } else {
	                        //如果子列表test不通过，子孙列表都隐藏。
	                        var $items = $picker.find('.weui-picker__group');
	                        $items.forEach(function (ele, index) {
	                            if (index > level) {
	                                (0, _util2.default)(ele).hide();
	                            }
	                        });

	                        result.splice(level + 1);

	                        defaults.onChange(result);
	                    }
	                }
	              
	            },
	            onConfirm: defaults.onConfirm
	        });
	    }
	    if (isMulti) {
	        items.forEach(function (item, index) {	        	
	            scroll(item, index);
	        });
	    } else {
	        scroll(items, 0);
	    }

	    $picker.on('click', '.weui-mask', function () { 
	        hide($picker);
	    }).on('click', '.weui-picker__action', function () {
	        hide($picker);
	    }).on('click', '#weui-picker-confirm', function () {
	        defaults.onConfirm(result);
	    });
        var data_A={"first":$picker[0],
         'second':items  
        }

	    _sington = data_A;
	        _sington.hide = function () {
	        hide($picker);
	    };
	   
    	$('.weui-picker__ld').on("click","img.last_confirm",function(){
	        // $(data_A.first).find(".weui-picker__group").eq(0).find(".weui-picker__content .weui-picker__item").eq(0).text(1234);
                  if($("img.last_confirm").data('confirm')=="not_touch"){
                  	  var trans=calendar.solar2lunar(w_result[0],w_result[1],w_result[2]);
		          	  console.log(w_result,trans);
		          	  if(trans.isLeap){
		          	  	defaults.defaultValue=[trans.lYear,trans.lMonth*100,trans.lDay];
		          	  }else{
		          	  	defaults.defaultValue=[trans.lYear,trans.lMonth,trans.lDay];
		          	  }          	  
		          	  lineTemp=[];	          	    	  
		          	  scroll(ssh, 0);
		          	  $("img.last_confirm").attr('src','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACpElEQVR4Ae3bA4zbURzA8UZtcLbjxTZmb3HSC7dYC2Y7ThbOtq3wbDOcGc/22/clx7q/4v1fe00+cfE9ProS9RicOTMbi7ANl9CJV/gMNeIzXqELl7Bt5DnZLgseOrICa9GGP1BCf9CGtahyYugM3AsbKY+/h5lOCJ2FZqgkacYsE6GlOA9lyHmUJivWiw9Qhn2AN5GhbuyDcph98MQ7NhO1UA7VhLx4xRaiF8rhBlEYj8FDH5Ql+pEtjXWjDsoydXBLgg9AWeqA5F+Pslx1pLHleG978EhDRSTBN6FSxM1wsbOhUszcUMEtKRjcEmqKp1LUjEDB96As8B0D+BzFc+75xhbhtwWxTzBtwhT1YYTP021FE4NXWRJb5fON2hnF81eZ/2MliPUJPhn1H6+RCcIfC2OX4W+Ua2PZ+omLbYwVfpMW6ydvtSx2uTBW265f4HKaxGqX9Yt0pUms1qVf6FWUT/qHPViKoxbFaq9dUY5YtHM+H2azJbHaJ5fgSTtdPATRZmNHSIIfIk8QbTwWPyU/0lqfINp0rPZW8kdLFm0+Vnsu+bfkG50riDYRq3UJBh6CaMOxvgOPbVBJiDYdq20XTh4E0eZjtcWi6aEgeoUDYv8gR7YAIIg2HKu1CJd4BNHmY7VVwkU8QbT5WN1W5PtB7kMlItpwrHY/mQvxT7Eb5/DP1EL81FbLSPDcFAyeN7Vd6hNckVYb4iPR1elw5ME3+qDFsQelx5YaLIxtglt6VisfwxbFDiNf0uo77BywJLYoXucts1Dv4Nhm5MX7RK0H+x0YewCedDgg/hHeZF4BuGAw9iJKTV3yaEliaCtmO+F2y0zcx98ERP7Ffcx04v2lKqxDexwuarVjndmLWvKreFfQjad4h18j3uEpunElGVfx/gOOjXvngcAePQAAAABJRU5ErkJggg==');
		          	  $("img.last_confirm").data('confirm','touching');
                  }else if($("img.last_confirm").data('confirm')=="touching"){
                        var transt=calendar.lunar2solar(w_result[0],w_result[1]>100 ? w_result[1]/100 : w_result[1],w_result[2],w_result[1]>100 ? 1 : 0);
	                    console.log(transt);
	          	        defaults.defaultValue=[transt.cMonth+1 > 12 ? transt.cYear+1 : transt.cYear,transt.cMonth+1 > 12? 1 : transt.cMonth+1,transt.cDay];	          	          	  
	          	        lineTemp=[];	          	    	  
	          	        scroll(items, 0);	 
                         $("img.last_confirm").data('confirm','not_touch');
                         $("img.last_confirm").attr('src','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAADhElEQVR4AeXbA2wtWRzH8bPmxfOrGXttM06qaBE1WCOqY7VBFXNt3LvR2rbtDevVnZ3mt9+X/JPUvJg5c5LP40F/xeDAlap8dPHFGVyDPjyAt/ArFiCzgF/xttXpszYZF/ViIWtxF15HCO1QiNetr/ooBr0IuRUhQ7yLEdyI81GP9JJ2adTb/91gdd9do58cLo5C0EvwCmQCPI0uZHfRb9b6eAoBZF7BJZUIWoV7ITOFIRwswVgHre8pyNyLqnKF7cAshL8xgFQZxk1hwMYUZtFRygGPxxhknkFTBb67mmxsmTGcUIrP7nMQ/sUtOKqC146jcDP+hfAy9har8wN4D8LvOCNCd4cz8DuEj3CgGA8P70P4CvURvCXW4UsIHyCzm5/Z5yF8jUMRfuA5hK8gPI/jd9LJBIRfURuTp7xfIUzs5NYjFHC6i0k58rGiAKFzq41qMAPhFhezYncQWYbarTR4HELOxbTYs7fw+GYVL4WwgNoYB661DMLlG1V8FUKfi3khQy+EVzd6xROmkfIgcMqyCBdt9H0/6Dwp9pYl5NZ6BfsPAQ54FPggAst2cOl/3A7hKedZsUkE4fa1LlYdHgZuh/Dq0heEEAFSHgY+FQWEyDh+uRbC687TQrbXIFy79H414nHgEQj9jl8ehNDtceBuCA86m/UXLvQ48IUQ3nZL3iHrPQ5cD+E3t+QhO+1x4BSEeWd/kPO8WE4lIrDNzwmFpHxL74MwlZSLViOEnxJ5W0rcg0dfAh4thyH0J/LlIYMQBZzq6evhvwiRXTkB0O79BEBSp3h8ncQ7sOYknv1n3sNp2kEI+Y0m4qdwqicXqykIF2221NLvQeB+CK9uVOlyCH+hKebPzn9BuGKry6X5GAfOQ3h8q0uNMxBujmHYm7e1IG6NOpOy5WFp40kIf6A1BmFb8TuEyZ1Oi7wI4dsYbFv6FsLLOH43UyOfQPgSdRHfmPYJ9hVjjfXDGGw9/AQHi9VxGi9A+DcKV+8Vm0tfwd5iD3ACxiGTQ1OFHipykJnACeXcIN5fxg3ifTamMIeOch4BuA8yUxjAwRK94g1gCjL3o6pShzxehUyAJ9FZhEMeHdZXAJnXcGkUrpYXI49FyIR4B8O4HuehDqdYm+OwB8041+oMW5sQMovI4+KoLkvejTeKcFDrDdwdmxWRFUfxHsI7+AHTCMy0/ds7eKgcR/H+B1jgUZr3AfJHAAAAAElFTkSuQmCC');
                  }
	          	  	          	   
	          	     
        });	   
        $('.weui-picker__hd').on("click",".zh_confirm",function(){
	        // $(data_A.first).find(".weui-picker__group").eq(0).find(".weui-picker__content .weui-picker__item").eq(0).text(1234);

	          	  var transt=calendar.lunar2solar(w_result[0],w_result[1]>100 ? w_result[1]/100 : w_result[1],w_result[2],w_result[1]>100 ? 1 : 0);

	               console.log(transt);
	          	  defaults.defaultValue=[transt.cMonth+1 > 12 ? transt.cYear+1 : transt.cYear,transt.cMonth+1 > 12? 1 : transt.cMonth+1,transt.cDay];
	          	          	  
	          	  lineTemp=[];	          	    	  
	          	  scroll(items, 0);	          	   
	          	     
        });	  
	    return _sington;
	}

	/**
	 * dataPicker 时间选择器，由picker拓展而来，提供年、月、日的选择。
	 * @param options 配置项
	 * @param {string=} [options.id=datePicker] 作为picker的唯一标识
	 * @param {number=} [options.start=2000] 起始年份
	 * @param {number=} [options.end=2030] 结束年份
	 * @param {function=} [options.onChange] 在picker选中的值发生变化的时候回调
	 * @param {function=} [options.onConfirm] 在点击"确定"之后的回调。回调返回选中的结果(Array)，数组长度依赖于picker的层级。
	 *
	 *@example
	 * weui.datePicker({
	 *     start: 2010,
	 *     end: 2016,
	 *     onChange: function(result){
	 *         console.log(result);
	 *     },
	 *     onConfirm: function(result){
	 *         console.log(result);
	 *     },
	 *     id: 'datePicker'
	 * });
	 */
	function datePicker(options) {
	    var defaults = _util2.default.extend({
	        id: 'datePicker',
	        onChange: _util2.default.noop,
	        onConfirm: _util2.default.noop	        
	    }, options);

        // var getLunarCalendar = function(date){  
        //     var cc  = new CalendarConverter;  
        //     var result = cc.solar2lunar(date);  
        //     return result.cYear + "（" + result.lunarYear + "）年" + (result.isLeap?"闰":"") + result.lunarMonth + "月" + result.lunarDay + " " + result.lunarFestival + " 星期" + result.week;  
        // };    
	    var date = [];
	       date2 = [];
	          ssh=[];
	    var daysTotal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //所有月份的天数
	    for (var i = defaults.start; i <= defaults.end; i++) {
	        var months  = [];
	        var months2 = [];
	        var is_true =0;
	        var cache_year;
	        var cache_lmonth;
	        var cache_IMonthCn;
	        var cache_lastmonth;
	        var cache_nextmonth;
	        var cache_lastdate=[];
	        var cache_nextdate=[];
	        if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) {
	            //判定为闰年
	            daysTotal[1] = 29;
	        } else {
	            daysTotal[1] = 28;
	        }
	        for (var j = 0; j < 12; j++) {
	            var dates  = [];
	            var dates2 = [];
	            for (var k = 1; k < daysTotal[j] + 1; k++) {
	                var _date = {
	                    label: k + '日',
	                    value: k
	                };
	                dates.push(_date);
	                var nong_li=calendar.solar2lunar(i,(j+1)<10 ? "0"+j : j,k<10 ? "0"+k : k);
	                
	                	dates2.push({
                    	label:nong_li.IDayCn,
                    	value:k
                        });
	                             
	            }
	            months.push({
	                label: j + 1 + '月',
	                value: j + 1,
	                children: dates
	            });
	            months2.push({
	                label: nong_li.IMonthCn,
	                value: j + 1,
	                children: dates2
	            });
	        }

	        var year = {
	            label: i + '年',
	            value: i,
	            children: months
	        };
	        var year2 = {
	            label: nong_li.lYear + '年',
	            value: i,
	            children: months2
	        };

	        date.push(year);
	        date2.push(year2);
	    }
 ssh=(function (year, lastyear) {
		var lunarObj = calendar.solar2lunar(year, 0, 1);
		var lunarlastObj = calendar.solar2lunar(lastyear, 11, 31);
        var transt;
		//console.log(lunarObj,lunarlastObj);
        
		var yearList = [];
		for (var k = lunarObj.lYear; k <= lunarlastObj.lYear; k++) {
			// if (lunarObj.lYear === k) {
			// 	yearToView = k - this.minLDate[0];
			// }
			var leapMonth = calendar.leapMonth(k);
			var monthList = [];
			var	monthToView = 0,
				monthCount = 11;
			if (leapMonth > 0) {
				monthCount++;
			}
           
			for (var i = 0; i <= monthCount; i++) {
			
				var dayList = [];	
				  var solarObj = {};
				var dayCount;
				if (leapMonth > 0) {
					if (i < leapMonth) {
						dayCount=calendar.monthDays(k, i+1);
						for (var j = 1; j <= dayCount; j++) {
							// if (lunarObj.lDay === j) {
							// 	dayToView = j - 1;
							// }
							transt= calendar.lunar2solar(k, i+1, j, false);
							solarObj=calendar.solar2lunar(transt.cMonth+1 > 12 ? transt.cYear+1 : transt.cYear,transt.cMonth+1 > 12? 1 : transt.cMonth+1,transt.cDay);								
							dayList.push({
								label:calendar.toChinaDay(j) + '周' + calendar.nStr1[solarObj.nWeek],
								value:j
							});			
			            }
			             monthList.push({
			                label: calendar.toChinaMonth(i + 1),
			                value: i+1,
			                children: dayList
		                });
					}else if (i === leapMonth) {
						dayCount= calendar.leapDays(k);

						for (var j = 1; j <= dayCount; j++) {
							// if (lunarObj.lDay === j) {
							// 	dayToView = j - 1;
							// }
							transt= calendar.lunar2solar(k, i+1, j, false);
							solarObj=calendar.solar2lunar(transt.cMonth+1 > 12 ? transt.cYear+1 : transt.cYear,transt.cMonth+1 > 12? 1 : transt.cMonth+1,transt.cDay);								
							dayList.push({
								label:calendar.toChinaDay(j) + '周' + calendar.nStr1[solarObj.nWeek],
								value:j
							});			
			            }
			             monthList.push({
			                label: '闰' + calendar.toChinaMonth(i),
			                value: i*100,
			                children: dayList
		                });

					}else if(i > leapMonth){
						dayCount=calendar.monthDays(k, i);

						for (var j = 1; j <= dayCount; j++) {
							// if (lunarObj.lDay === j) {
							// 	dayToView = j - 1;
							// }
							transt= calendar.lunar2solar(k, i+1, j, false);
							solarObj=calendar.solar2lunar(transt.cMonth+1 > 12 ? transt.cYear+1 : transt.cYear,transt.cMonth+1 > 12? 1 : transt.cMonth+1,transt.cDay);									
							dayList.push({
								label:calendar.toChinaDay(j) + '周' + calendar.nStr1[solarObj.nWeek],
								value:j
							});			
			            }
			             monthList.push({
			               label: calendar.toChinaMonth(i),
			                value: i,
			                children: dayList
		                });
					}
				}else {
					dayCount=calendar.monthDays(k, i+1);
					for (var j = 1; j <= dayCount; j++) {
							// if (lunarObj.lDay === j) {
							// 	dayToView = j - 1;
							// }
							transt= calendar.lunar2solar(k, i+1, j, false);
							solarObj=calendar.solar2lunar(transt.cMonth+1 > 12 ? transt.cYear+1 : transt.cYear,transt.cMonth+1 > 12? 1 : transt.cMonth+1,transt.cDay);									
							dayList.push({
								label:calendar.toChinaDay(j) + '周' + calendar.nStr1[solarObj.nWeek],
								value:j
							});			
			            }
			             monthList.push({
			                label: calendar.toChinaMonth(i+1),
			                value: i+1,
			                children: dayList
		                });
			             // console.log(monthList);
				}

			}
		yearList.push({
            label: k + '年',
            value: k,
            children: monthList
        });
        //console.log(leapMonth,yearList);
	}
	return yearList;
})(defaults.start,defaults.end);	
        
	    return picker(date, defaults);
	}    
	exports.default = {
	    picker: picker,
	    datePicker: datePicker
	};
	module.exports = exports['default'];
},
		

		//   (leapMonth === lunarObj.lMonth ? calendar.leapDays(lunarObj.lYear) : calendar.monthDays(lunarObj.lYear, lunarObj.lMonth));
		
		// for (let i = 1; i <= dayCount; i++) {
		// 	if (lunarObj.lDay === i) {
		// 		dayToView = i - 1;
		// 	}
		// 	solarObj = calendar.lunar2solar(lunarObj.lYear, lunarObj.lMonth, i, lunarObj.isLeap);
		// 	// if (solarObj.cYear === this.dateNow.getFullYear() && solarObj.cMonth - 1 === this.dateNow.getMonth() && solarObj.cDay === this.dateNow.getDate()) {
		// 	// 	dayList.push('今天');
		// 	// }			
		// 	dayList.push({
		// 		label:calendar.toChinaDay(i) + '周' + calendar.nStr1[solarObj.nWeek],
		// 		value:solarObj.cDay
		// 	});			
		// }
		// this.dateSelectProps.dataState1.defaultList = yearList;
		// this.dateSelectProps.dataState2.defaultList = monthList;
		// this.dateSelectProps.dataState3.defaultList = dayList;
		// this.dateSelectProps.dataState1.defaultIndex = yearToView;
		// this.dateSelectProps.dataState2.defaultIndex = monthToView;
		// this.dateSelectProps.dataState3.defaultIndex = dayToView;
		// this.setData({
		// 	pickerDataList1: yearList,
		// 	pickerDataList2: monthList,
		// 	pickerDataList3: dayList
		// });
	




/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * set transition
	 * @param $target
	 * @param time
	 */
	var setTransition = function setTransition($target, time) {
	    return $target.css({
	        '-webkit-transition': 'all ' + time + 's',
	        'transition': 'all ' + time + 's'
	    });
	};

	/**
	 * set translate
	 */
	var setTranslate = function setTranslate($target, diff) {
	    return $target.css({
	        '-webkit-transform': 'translate3d(0, ' + diff + 'px, 0)',
	        'transform': 'translate3d(0, ' + diff + 'px, 0)'
	    });
	};

	/**
	 * @desc get index of middle item
	 * @param items
	 * @returns {number}
	 */
	var getDefaultIndex = function getDefaultIndex(items) {
	    var current = Math.floor(items.length / 2);
	    var count = 0;
	    while (!!items[current] && items[current].disabled) {
	        current = ++current % items.length;
	        count++;

	        if (count > items.length) {
	            throw new Error('No selectable item.');
	        }
	    }

	    return current;
	};

	var getDefaultTranslate = function getDefaultTranslate(offset, rowHeight, items) {
	    var currentIndex = getDefaultIndex(items);

	    return (offset - currentIndex) * rowHeight;
	};

	/**
	 * get max translate
	 * @param offset
	 * @param rowHeight
	 * @returns {number}
	 */
	var getMax = function getMax(offset, rowHeight) {
	    return offset * rowHeight;
	};

	/**
	 * get min translate
	 * @param offset
	 * @param rowHeight
	 * @param length
	 * @returns {number}
	 */
	var getMin = function getMin(offset, rowHeight, length) {
	    return -(rowHeight * (length - offset - 1));
	};

	_util2.default.fn.scroll = function (options) {
	    var _this = this;
	    
	    var defaults = _util2.default.extend({
	        items: [], // 数据
	        scrollable: '.weui-picker__content', // 滚动的元素
	        offset: 3, // 列表初始化时的偏移量（列表初始化时，选项是聚焦在中间的，通过offset强制往上挪3项，以达到初始选项是为顶部的那项）
	        rowHeight: 34, // 列表每一行的高度
	        onChange: _util2.default.noop, // onChange回调
	        temp: null, // translate的缓存
	        bodyHeight: 7 * 34 // picker的高度，用于辅助点击滚动的计算
	    }, options);
	    var items = defaults.items.map(function (item) {
	        return '<div class="weui-picker__item' + (item.disabled ? ' weui-picker__item_disabled' : '') + '">' + item.label + '</div>';
	    }).join('');
	    (0, _util2.default)(this).find('.weui-picker__content').html(items);

	    var $scrollable = (0, _util2.default)(this).find(defaults.scrollable); // 可滚动的元素
	    var start = void 0; // 保存开始按下的位置
	    var end = void 0; // 保存结束时的位置
	    var startTime = void 0; // 开始触摸的时间
	    var translate = void 0; // 缓存 translate
	    var points = []; // 记录移动点
	    var windowHeight = window.innerHeight; // 屏幕的高度

	    // 首次触发选中事件
	    // 如果有缓存的选项，则用缓存的选项，否则使用中间值。
	    if (defaults.temp !== null && defaults.temp < defaults.items.length) {
	        var index = defaults.temp;
	        defaults.onChange.call(this, defaults.items[index], index);
	        translate = (defaults.offset - index) * defaults.rowHeight;
	    } else {
	        var _index = getDefaultIndex(defaults.items);
	        defaults.onChange.call(this, defaults.items[_index], _index);
	        translate = getDefaultTranslate(defaults.offset, defaults.rowHeight, defaults.items);
	    }
	    setTranslate($scrollable, translate);

	    var stop = function stop(diff) {
	        translate += diff;

	        // 移动到最接近的那一行
	        translate = Math.round(translate / defaults.rowHeight) * defaults.rowHeight;
	        var max = getMax(defaults.offset, defaults.rowHeight);
	        var min = getMin(defaults.offset, defaults.rowHeight, defaults.items.length);
	        // 不要超过最大值或者最小值
	        if (translate > max) {
	            translate = max;
	        }
	        if (translate < min) {
	            translate = min;
	        }

	        // 如果是 disabled 的就跳过
	        var index = defaults.offset - translate / defaults.rowHeight;
	        while (!!defaults.items[index] && defaults.items[index].disabled) {
	            diff > 0 ? ++index : --index;
	        }
	        translate = (defaults.offset - index) * defaults.rowHeight;
	        setTransition($scrollable, .3);
	        setTranslate($scrollable, translate);

	        // 触发选择事件
	        defaults.onChange.call(_this, defaults.items[index], index);
	    };

	    /**
	     * 因为现在没有移除匿名函数的方法，所以先暴力移除（offAll），并且改变$scrollable。
	     */
	    $scrollable = (0, _util2.default)(this).offAll().on('touchstart', function (evt) {
	        start = evt.changedTouches[0].pageY;
	        startTime = +new Date();
	    }).on('touchmove', function (evt) {
	        end = evt.changedTouches[0].pageY;
	        var diff = end - start;

	        setTransition($scrollable, 0);
	        setTranslate($scrollable, translate + diff);
	        startTime = +new Date();
	        points.push({ time: startTime, y: end });
	        if (points.length > 40) {
	            points.shift();
	        }

	        evt.preventDefault();
	    }).on('touchend', function (evt) {
	        /**
	         * 思路:
	         * 0. touchstart 记录按下的点和时间
	         * 1. touchmove 移动时记录前 40个经过的点和时间
	         * 2. touchend 松开手时, 记录该点和时间. 如果松开手时的时间, 距离上一次 move时的时间超过 100ms, 那么认为停止了, 不执行惯性滑动
	         *    如果间隔时间在 100ms 内, 查找 100ms 内最近的那个点, 和松开手时的那个点, 计算距离和时间差, 算出速度
	         *    速度乘以惯性滑动的时间, 例如 300ms, 计算出应该滑动的距离
	         */
	        var endTime = new Date().getTime();
	        end = evt.changedTouches[0].pageY;
	        var relativeY = windowHeight - defaults.bodyHeight / 2;

	        // 如果上次时间距离松开手的时间超过 100ms, 则停止了, 没有惯性滑动
	        if (endTime - startTime > 100) {
	            //如果end和start相差小于10，则视为
	            if (Math.abs(end - start) > 10) {
	                stop(end - start);
	            } else {
	                stop(relativeY - end);
	            }
	        } else {
	            if (Math.abs(end - start) > 10) {
	                var endPos = points.length - 1;
	                var startPos = endPos;
	                for (var i = endPos; i > 0 && startTime - points[i].time < 100; i--) {
	                    startPos = i;
	                }

	                if (startPos !== endPos) {
	                    var ep = points[endPos];
	                    var sp = points[startPos];
	                    var t = ep.time - sp.time;
	                    var s = ep.y - sp.y;
	                    var v = s / t; // 出手时的速度
	                    var diff = v * 150 + (end - start); // 滑行 150ms,这里直接影响“灵敏度”
	                    stop(diff);
	                } else {
	                    stop(0);
	                }
	            } else {
	                stop(relativeY - end);
	            }
	        }
	    }).find(defaults.scrollable);
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var depthOf = exports.depthOf = function depthOf(object) {
	    var depth = 1;
	    if (object.children && object.children[0]) {
	        depth = depthOf(object.children[0]) + 1;
	    }
	    return depth;
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<div class=\"<%= className %>\"> <div class=weui-mask></div> <div class=weui-picker> <div class=weui-picker__hd> <a href=javascript:; data-action=cancel class=weui-picker__action><img class=no_confirm src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAA+ElEQVR4Ac3YgQbDMBDG8dI+w2r0LTYYe47LXi2Ps5eaIXQXLkxxir9cwsd2DfeDanJTXTnnRfPQXKegVXubYWmFWfPW7JqvJgWgxHrvZplr8WaFlmK4nqhyMNzrg1XzQXAAyixr25A0pRfOQRWNHDe+fByP8nphOB7F43jUCZyEoWx5L4QEoAAcgAJwGIrHgSgeB6J4HIjicRCKx0EoHsejeFwcymDiwGQIFIfjUcUC4FhUsvA44tvXE3f6XgDgeBSB41E8jkfxOB7F43wUf8EFUTwOR/E4HsXjgJMnj9MflyHHUCMP7oYcdf4Ph5+aLfA0vJlhqf9/bT/UHZSDJEwAAAAASUVORK5CYII=\" /></a><a href=javascript:; data-action=select class=weui-picker__action id=weui-picker-confirm><img class=yes_confirm src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAjCAYAAADbqynIAAAAxklEQVR4AWIY6kB/1X1Ae3aAwTAQBWEYyR0i9BYthJ5jtwA9ai4VQWkHWwoWDH/3efgRZPiEWHZVm5ojYIo61Vvtahod82qYb7dImEMtITDtuUTC1MQkJjGJiYbpD8xqU2sEzKT29uKp6rCYNnLtDwyEaUOLOkiUDfMzWA2DAKY//Ogf+liM+0sVAgOgAAyAAjAACvj5GFAABkABGAMKwAAoHmNE8RgjiscYUTzGj/JjyGN/DzM0yo/hUc+8q/lD1EXdydu0DzLab8YssjhjAAAAAElFTkSuQmCC\" /></a> </div> <div class=weui-picker__bd></div><div class=weui-picker__ld><img class=last_confirm data-confirm=\"not_touch\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAADhElEQVR4AeXbA2wtWRzH8bPmxfOrGXttM06qaBE1WCOqY7VBFXNt3LvR2rbtDevVnZ3mt9+X/JPUvJg5c5LP40F/xeDAlap8dPHFGVyDPjyAt/ArFiCzgF/xttXpszYZF/ViIWtxF15HCO1QiNetr/ooBr0IuRUhQ7yLEdyI81GP9JJ2adTb/91gdd9do58cLo5C0EvwCmQCPI0uZHfRb9b6eAoBZF7BJZUIWoV7ITOFIRwswVgHre8pyNyLqnKF7cAshL8xgFQZxk1hwMYUZtFRygGPxxhknkFTBb67mmxsmTGcUIrP7nMQ/sUtOKqC146jcDP+hfAy9har8wN4D8LvOCNCd4cz8DuEj3CgGA8P70P4CvURvCXW4UsIHyCzm5/Z5yF8jUMRfuA5hK8gPI/jd9LJBIRfURuTp7xfIUzs5NYjFHC6i0k58rGiAKFzq41qMAPhFhezYncQWYbarTR4HELOxbTYs7fw+GYVL4WwgNoYB661DMLlG1V8FUKfi3khQy+EVzd6xROmkfIgcMqyCBdt9H0/6Dwp9pYl5NZ6BfsPAQ54FPggAst2cOl/3A7hKedZsUkE4fa1LlYdHgZuh/Dq0heEEAFSHgY+FQWEyDh+uRbC687TQrbXIFy79H414nHgEQj9jl8ehNDtceBuCA86m/UXLvQ48IUQ3nZL3iHrPQ5cD+E3t+QhO+1x4BSEeWd/kPO8WE4lIrDNzwmFpHxL74MwlZSLViOEnxJ5W0rcg0dfAh4thyH0J/LlIYMQBZzq6evhvwiRXTkB0O79BEBSp3h8ncQ7sOYknv1n3sNp2kEI+Y0m4qdwqicXqykIF2221NLvQeB+CK9uVOlyCH+hKebPzn9BuGKry6X5GAfOQ3h8q0uNMxBujmHYm7e1IG6NOpOy5WFp40kIf6A1BmFb8TuEyZ1Oi7wI4dsYbFv6FsLLOH43UyOfQPgSdRHfmPYJ9hVjjfXDGGw9/AQHi9VxGi9A+DcKV+8Vm0tfwd5iD3ACxiGTQ1OFHipykJnACeXcIN5fxg3ifTamMIeOch4BuA8yUxjAwRK94g1gCjL3o6pShzxehUyAJ9FZhEMeHdZXAJnXcGkUrpYXI49FyIR4B8O4HuehDqdYm+OwB8041+oMW5sQMovI4+KoLkvejTeKcFDrDdwdmxWRFUfxHsI7+AHTCMy0/ds7eKgcR/H+B1jgUZr3AfJHAAAAAElFTkSuQmCC\"><p>农历</p></div></div> </div> ";

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<div class=weui-picker__group> <div class=weui-picker__mask></div> <div class=weui-picker__indicator></div> <div class=weui-picker__content></div> </div>";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _gallery = __webpack_require__(30);

	var _gallery2 = _interopRequireDefault(_gallery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _sington = void 0;

	/**
	 * gallery 带删除按钮的图片预览，主要是配合图片上传使用
	 */
	
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "<div class=\"weui-gallery <%= className %>\"> <span class=weui-gallery__img style=\"background-image:url(<%= url %>)\"><%= url %></span> <div class=weui-gallery__opr> <a href=javascript: class=weui-gallery__del> <i class=\"weui-icon-delete weui-icon_gallery-delete\"></i> </a> </div> </div> ";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * slider slider滑块，单位是百分比。注意，因为需要获取slider的长度，所以必须要在slider可见的情况下来调用。
	 */	
 }
])
});
;