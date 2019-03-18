// common/123/myhtml.js
var WxParse = require('../lib/wxParse/wxParse.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	detail: { // 属性名
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer(newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
		console.log("wx 组件收到数据")
		console.log(newVal)
		if(newVal){
			this.html_to_view(newVal)
		}
		
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
	content:''
	
  },

  /**
   * 组件的方法列表
   */
  methods: {
	html_to_view(html){
		WxParse.wxParse('content', 'html', html, this,5);
	}
  },
  attached(){
	 
  }
})
