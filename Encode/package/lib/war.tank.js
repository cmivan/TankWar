/*************
 * 坦克对象
 * BY：CM.Ivan
 * EMail：cm.ivan@qq.com
 *************/
function Tank(war){
var _this = new Obstacle(war);
	_this.arrow = 't';
	_this.speed = 2;
	_this.timer = 10;
	_this.shootrate = 100; //发射率
	_this.keyset = [38,40,37,39,32,13,96]; //上下、左右、发射、停车、暂停
	_this.play = 1; //0暂停，1运行
	_this.auto = false; //是否懂得自动寻向
	_this.creat=function(){_this.power=_this.powerMax;_this.body=$('\x3c\x64\x69\x76\x3e\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x70\x6f\x77\x65\x72\x22\x3e\x3c\x73\x70\x61\x6e\x3e'+_this.power+'\x3c\x2f\x73\x70\x61\x6e\x3e\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x62\x61\x72\x22\x3e\x3c\x64\x69\x76\x3e\x26\x6e\x62\x73\x70\x3b\x3c\x2f\x64\x69\x76\x3e\x3c\x2f\x64\x69\x76\x3e\x3c\x2f\x64\x69\x76\x3e\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x61\x73\x6b\x22\x3e\x26\x6e\x62\x73\x70\x3b\x3c\x2f\x64\x69\x76\x3e\x3c\x2f\x64\x69\x76\x3e');_this.body.appendTo('\x62\x6f\x64\x79').attr('\x69\x64',_this.id).css({'\x6c\x65\x66\x74':_this.left,'\x74\x6f\x70':_this.top}).css({'\x77\x69\x64\x74\x68':_this.width+'\x70\x78','\x68\x65\x69\x67\x68\x74':_this.height+'\x70\x78'}).css({'\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2d\x69\x6d\x61\x67\x65':'\x75\x72\x6c\x28'+_this.img+'\x29'}).css({'\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2d\x63\x6f\x6c\x6f\x72':'','\x70\x6f\x73\x69\x74\x69\x6f\x6e':'\x61\x62\x73\x6f\x6c\x75\x74\x65'}).css({'\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2d\x72\x65\x70\x65\x61\x74':'\x6e\x6f\x2d\x72\x65\x70\x65\x61\x74'});_this.obj=$('\x23'+_this.id);if(_this.clas!=null){_this.obj.attr('\x63\x6c\x61\x73\x73',_this.clas)};if(_this.type!=null){_this.obj.attr('\x74\x79\x70\x65',_this.type)};_this.powerBody()};_this.bean=function(){if(war.stop==false){var a=new Bean(war);a.parentID=_this.id;a.attack=_this.attack;a.img=$skin.tank_bean;a.type='\x62\x65\x61\x6e';a.width=0x28;a.height=0x28;a.target=0x0;var b=parseInt(_this.obj.css('\x6c\x65\x66\x74'));var c=parseInt(_this.obj.css('\x74\x6f\x70'));var d=parseInt(_this.obj.css('\x77\x69\x64\x74\x68'));var e=parseInt(_this.obj.css('\x68\x65\x69\x67\x68\x74'));switch(_this.arrow){case'\x74':a.left=b+(d-a.width)/0x2;a.top=c-a.height;a.target=a.top-a.range;break;case'\x62':a.left=b+(d-a.width)/0x2;a.top=c+_this.height;a.target=a.top+a.height+a.range;break;case'\x6c':a.left=b-a.width;a.top=c+(e-a.height)/0x2;a.target=a.left-a.range;break;case'\x72':a.left=b+_this.width;a.top=c+(e-a.height)/0x2;a.target=a.left+a.width+a.range;break};a.creat();a.arrow=_this.arrow;a.move();war.allobj.push(a);if(_this.id=='\x74\x61\x6e\x6b\x5f\x63\x6d'){war.echo.err('\x46\x69\x72\x65\x64\x20\x61\x72\x74\x69\x6c\x6c\x65\x72\x79\x20\x73\x68\x65\x6c\x6c\x73\x21')};delete a}};_this.onScreen=function(){var a=parseInt(_this.obj.css('\x6c\x65\x66\x74'));var b=parseInt(_this.obj.css('\x74\x6f\x70'));var c=parseInt(_this.obj.css('\x77\x69\x64\x74\x68'));var d=parseInt(_this.obj.css('\x68\x65\x69\x67\x68\x74'));var e=parseInt($('\x62\x6f\x64\x79').width());var f=parseInt($('\x62\x6f\x64\x79').height());var g=true;switch(_this.arrow){case'\x74':if(b-_this.speed<=0x0){g=false};break;case'\x62':if(b+d+_this.speed>=f){g=false};break;case'\x6c':if(a-_this.speed<=0x0){g=false};break;case'\x72':if(a+c+_this.speed>=e){g=false};break};if(g==false){_this._auto()};return g};_this._times=0x0;_this.CollisionFocusObj=null;_this.onCollision=function(){var a=false;var b=null;var c=null;var d=null;var e=null;var f=null;var g=null;var h=_this.CollisionFocusObj;var i=war.ScanCollisionObj(_this);if(h!=null){b=h.obj;c=b.attr('\x69\x64');d=b.attr('\x74\x79\x70\x65')};if(i!=null){e=i.obj;f=e.attr('\x69\x64');g=e.attr('\x74\x79\x70\x65')};_this.CollisionFocusObj=i;if(f!=c){$_tank_en1=(_this.type=='\x74\x61\x6e\x6b\x5f\x65\x6e'&&d=='\x74\x61\x6e\x6b\x5f\x63\x6d');$_tank_en2=(_this.type=='\x74\x61\x6e\x6b\x5f\x65\x6e'&&g=='\x74\x61\x6e\x6b\x5f\x63\x6d');$_tank_cm=(_this.type=='\x74\x61\x6e\x6b\x5f\x63\x6d'&&g!='\x74\x61\x6e\x6b\x5f\x63\x6d');if(h!=null&&g!='\x62\x65\x61\x6e'&&($_tank_en1||$_tank_cm)){h.powerHide()};if(i!=null&&g!='\x62\x65\x61\x6e'&&($_tank_en2||$_tank_cm)){i.powerShow()}};if(i!=null&&e!=null){if(_this.auto&&f=='\x74\x61\x6e\x6b\x5f\x63\x6d'){_this._times++;if(_this._times%0x14==0x0){_this.bean()}}else if(_this.auto==false){if(f==null||(f!=c)){if(f!=null){war.echo.out('\x3c\x62\x3e\x46\x6f\x75\x6e\x64\x20\x3a\x3c\x2f\x62\x3e'+f)}}};_x1=parseInt(_this.obj.css('\x6c\x65\x66\x74'));_y1=parseInt(_this.obj.css('\x74\x6f\x70'));_w1=parseInt(_this.obj.css('\x77\x69\x64\x74\x68'));_h1=parseInt(_this.obj.css('\x68\x65\x69\x67\x68\x74'));_x2=parseInt(e.css('\x6c\x65\x66\x74'));_y2=parseInt(e.css('\x74\x6f\x70'));_w2=parseInt(e.css('\x77\x69\x64\x74\x68'));_h2=parseInt(e.css('\x68\x65\x69\x67\x68\x74'));var j=((_x1<=_x2)&&(_x2-_x1<=_w1)||(_x2<=_x1)&&(_x1-_x2<=_w2));var k=((_y1<=_y2)&&(_y2-_y1<=_h1)||(_y2<=_y1)&&(_y1-_y2<=_h2));switch(_this.arrow){case'\x74':if((j&&(_y1-_this.speed<=_y2+_h2)&&(_y1-_this.speed>_y2))){a=true};break;case'\x62':if((j&&(_y1+_h1+_this.speed>=_y2)&&(_y1+_h1+_this.speed-_h2<_y2))){a=true};break;case'\x6c':if((k&&(_x1-_this.speed<=_w2+_x2)&&(_x1-_this.speed>_x2))){a=true};break;case'\x72':if((k&&(_x1+_w1+_this.speed-_x2>=0x0)&&(_x1+_w1+_this.speed-_x2<_w2))){a=true};break}};if(a==true){_this._auto()};return a};_this._auto=function(){if(_this.auto){var a=['\x74','\x62','\x6c','\x72'];var b=_this.arrow;a.remove(b);var c=Math.floor(Math.random()*a.length+0x1)-0x1;setTimeout(function(){_this.reArrow(a[c])},0x64)}};_this.engine=(function(){if(war.stop==false&&_this.play==0x1&&_this.onScreen()&&_this.onCollision()==false){var a=parseInt(_this.obj.css('\x74\x6f\x70'));var b=parseInt(_this.obj.css('\x6c\x65\x66\x74'));switch(_this.arrow){case'\x74':_this.obj.css({'\x74\x6f\x70':a-_this.speed+'\x70\x78'});break;case'\x62':_this.obj.css({'\x74\x6f\x70':a+_this.speed+'\x70\x78'});break;case'\x6c':_this.obj.css({'\x6c\x65\x66\x74':b-_this.speed+'\x70\x78'});break;case'\x72':_this.obj.css({'\x6c\x65\x66\x74':b+_this.speed+'\x70\x78'});break}}});_this.move=function(){_this.moveID=setInterval(function(){_this.engine()},_this.timer)};_this.keyboard=function(){$(window.document).keydown(function(a){if(war.keyControl){switch(a.keyCode){case _this.keyset[0x0]:_this.reArrow('\x74');break;case _this.keyset[0x1]:_this.reArrow('\x62');break;case _this.keyset[0x2]:_this.reArrow('\x6c');break;case _this.keyset[0x3]:_this.reArrow('\x72');break;case _this.keyset[0x4]:_this.bean();break;case _this.keyset[0x5]:if(war.stop==false){_this.play=(_this.play==0x0)?0x1:0x0};break;case _this.keyset[0x6]:war.stop=(war.stop)?false:true;break;default:return false;break}};return false})};_this.display=function(){if(_this.moveID!=null){clearInterval(_this.moveID)};_this.obj.css({'\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2d\x63\x6f\x6c\x6f\x72':'\x23\x30\x36\x30'});_this.obj.fadeOut(0x12c,function(){$(this).remove()});war.allobj.remove(_this);delete _this};
	//返回对象
	return _this;
}