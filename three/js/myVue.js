 Vue.component('timerBtn', {
 	template: '#timerBtn',
 	props: {
 		second: {
 			type: Number,
 			default: 10
 		},
 		disabled: {
 			type: Boolean,
 			default: true
 		}
 	},
 	data: function() {
 		return {
 			time: 0,
 			defi:true
 		}
 	},
 	methods: {
 		timer: function() {
 			if(this.time > 0) {
 				if(this.time>1){
	 				this.time--;
	 				setTimeout(this.timer, 1000);
 				}else{
 					this.time--;
 				}
 			
 			}
 			if(this.time == 0){
 				this.defi = true;
 			}
 		},
 		send: function() {
 			if(this.defi) {
 				this.defi = false;
 				this.time = this.second
 				vm1.success = true;
 				vm1.name = '验证码已发送';
 				vm2.success = true;
 				vm2.name = '验证码已发送';
 				setTimeout(this.sended, 1000);
 			}

 		},
 		sended() {

 			this.timer()
 		}
 	},
 	computed: {
 		text: function() {
 			return this.time > 0 ? this.time + 's 后重新获取' : '获取验证码';
 		},
 		defis:function(){
 			return  this.defi;
 		}
 	}
 });

 var vm1 = new Vue({
 	el: '.myvue',
 	data: {
 		name: '',
 		success: false,
 		moblie: '',
 		time: '获取验证码',
 		disabled: true,
 		second: '',
 		keynum: '',
 		codenum: false,
 	},
 	methods: {
 		validation() {
 			var regs = /^1[34578]\d{9}$/;
 			if(this.moblie.length == 11 && (regs.test(this.moblie))) {
 				this.success = false;
 				this.name = '';
 			} else {
 				this.success = true;
 				this.name = '请输入正确的手机号码';
 			}
 		},
 		code() {
 			this.success = true;
 			this.name = '请填写正确您短信收到的验证码';

 		},
 		keynumval() {
 			if(this.keynum == '') {
 				this.success = true;
 				this.name = '密码不能为空'
 			}
 		},
 		loginbtn() {
 			if(this.codenum) {
 				this.success = true;
 				this.name = '请填写正确您短信收到的验证码';
 			} else {
 				if(this.keynum == '') {
 					this.success = true;
 					this.name = '密码不能为空'
 				} else {
 					this.validation();
 				}
 			}

 		},
 		codenumtu() {
 			this.codenum = true;
 		},
 		codenumfa() {
 			this.codenum = false;
 		},
 	}
 })

 var vm2 = new Vue({
 	el: '.myvue2',
 	data: {
 		name: '',
 		success: false,
 		moblie: '',
 		time: '获取验证码',
 		disabled: '',
 		second: '',
 		keynum: '',
 		codenum: false
 	},
 	methods: {
 		validation() {
 			var regs = /^1[34578]\d{9}$/;
 			if(this.moblie.length == 11 && (regs.test(this.moblie))) {
 				this.success = false;
 				this.name = '';
 			} else {
 				this.success = true;
 				this.name = '请输入正确的手机号码';
 			}
 		},
 		code() {
 			this.success = true;
 			this.name = '请填写正确您短信收到的验证码';

 		},
 		keynumval() {
 			if(this.keynum == '') {
 				this.success = true;
 				this.name = '密码不能为空'
 			}
 		},
 		loginbtn() {
 			if(this.codenum) {
 				this.success = true;
 				this.name = '请填写正确您短信收到的验证码';
 			} else {
 				if(this.keynum == '') {
 					this.success = true;
 					this.name = '密码不能为空'
 				} else {
 					this.validation();
 				}
 			}

 		},
 		codenumtu() {
 			this.codenum = true;
 		},
 		codenumfa() {
 			this.codenum = false;
 		},
 	}
 })