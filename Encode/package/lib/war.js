/*************
 * 战场
 * BY：CM.Ivan
 * EMail：cm.ivan@qq.com
 *************/
function War(){
	var war = new Object(); 
	war.level = 1;
	war.keyControl = true;
	war.stop = false; //是否暂停
	war.width = parseInt($(window).width());
	war.height = parseInt($(window).height());
	//Record all objects
	war.allobj = [];
	//The scor
	war.scor = function(){}
	//The end of the war
	war.end = function(){war.keyControl=false;setTimeout(function(){war.echo.errB('\x54\x68\x65\x20\x68\x65\x72\x6f\x20\x69\x73\x20\x64\x65\x61\x64\x21');war.echo.errB('\x41\x6e\x64\x20\x74\x68\x65\x20\x67\x61\x6d\x65\x20\x69\x73\x20\x6f\x76\x65\x72\x21');setTimeout(function(){war.stop=true},0x1f4)},0x5dc)}
	//Initialize the Mask
	war.mask_cm=function(){var a=new Obstacle(war);a.id='\x74\x61\x6e\x6b\x5f\x68\x6f\x6d\x65';a.img=$skin.tank_home;a.width=0x10e;a.height=0x80;a.left=parseInt(war.width/0x2);a.top=parseInt(war.height-(a.height/0x2));a.creat();war.allobj.push(a);return a}
	//Loading random obstacles
	war.obstacle=function(a){if(a!=parseInt(a)){a=0x5};var b=new Array();for(var c=0x0;c<a;c++){b[c]=new Obstacle(war);b[c].img=$skin.obstacle;b[c].powerMax=parseInt(Math.random()*0xa)*0x32+0x50;b[c].left=Math.random()*war.width;b[c].top=Math.random()*(war.height-0xeb);b[c].creat();var d=parseInt(Math.random()*0x5)*(-0xaf);b[c].obj.css({'\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2d\x70\x6f\x73\x69\x74\x69\x6f\x6e':d+'\x70\x78\x20\x30'});war.allobj.push(b[c])};return b}
	//The initialization Hero tank
	war.tank_cm=function(){var a=new Tank(war);a.id='\x74\x61\x6e\x6b\x5f\x63\x6d';a.type='\x74\x61\x6e\x6b\x5f\x63\x6d';a.img=$skin.tank_cm;a.powerMax=0x3e8;a.attack=0x64;a.width=0x3c;a.height=0x3c;a.left=parseInt((war.width-a.width)/0x2);a.top=parseInt(war.height-a.height);a.creat();a.move();a.keyboard();war.allobj.push(a);return a}
	//Randomly to create a villain tank
	war.tank_en=function(a){if(a!=parseInt(a)){a=0x5};var b=new Array();for(var c=0x0;c<a;c++){b[c]=new Tank(war);b[c].id='\x74\x61\x6e\x6b\x5f'+parseInt(Math.random()*0x3b9aca00);b[c].type='\x74\x61\x6e\x6b\x5f\x65\x6e';b[c].powerMax=parseInt(Math.random()*0x5)*0x32+0x96;b[c].width=0x3c;b[c].height=0x3c;b[c].left=Math.random()*war.width;b[c].top=Math.random()*(war.height-0x78);b[c].img=$skin.tank_en;b[c].auto=true;b[c].creat();b[c].move();war.allobj.push(b[c])};return b}
	//Radar scan, detect obstacles in front of
	war.ScanCollisionObj=function(a){var b=null;var c=null;var d=a.obj;var e=a.arrow;var f=a.type;var g=parseInt(d.css('\x6c\x65\x66\x74'));var h=parseInt(d.css('\x74\x6f\x70'));var i=parseInt(d.css('\x77\x69\x64\x74\x68'));var j=parseInt(d.css('\x68\x65\x69\x67\x68\x74'));var k=null;var l=null;var m=null;var n=null;for(coll in war.allobj){var o=false;if(coll==parseInt(coll)){var p=war.allobj[coll];var q=p.obj;var r=q.attr('\x74\x79\x70\x65');if(((f=='\x74\x61\x6e\x6b\x5f\x63\x6d'||f=='\x74\x61\x6e\x6b\x5f\x65\x6e')&&r!='\x62\x65\x61\x6e')||f=='\x62\x65\x61\x6e'){k=parseInt(q.css('\x6c\x65\x66\x74'));l=parseInt(q.css('\x74\x6f\x70'));m=parseInt(q.css('\x77\x69\x64\x74\x68'));n=parseInt(q.css('\x68\x65\x69\x67\x68\x74'));var s=(g<k)&&(g+i>k)&&(g+i<k+m);var t=(k<g)&&(g-k<m);var u=(h<=l)&&(h+j>l)&&(h+j<l+n);var v=(l<=h)&&(h-l<n);var w=((g<=k)&&(k-g<=i)||(k<=g)&&(g-k<=m));var x=((h<=l)&&(l-h<=j)||(l<=h)&&(h-l<=n));switch(e){case'\x74':$y2=l+n;if(w&&(h>=$y2)){o=true;if(c==null||c<$y2){c=$y2;b=p}}else if(w&&(h<$y2)&&(h>l)){o=true;if(c==null||c<l){c=l;b=p}};break;case'\x62':$y2=l+n;if(w&&(h+j<=l)){o=true;if(c==null||c>l){c=l;b=p}}else if(w&&(h>=l)&&(h+j<$y2)){o=true;if(c==null||c>$y2){c=$y2;b=p}};break;case'\x6c':$x2=k+m;if(x&&(g>=$x2)){o=true;if(c==null||c<$x2){c=$x2;b=p}}else if(x&&(g<$x2)&&(g>k)){o=true;if(c==null||c<k){c=k;b=p}};break;case'\x72':$x2=k+m;if(x&&(g+i<=k)){o=true;if(c==null||c>k){c=k;b=p}}else if(x&&(g>=k)&&(g+i<$x2)){o=true;if(c==null||c>$x2){c=$x2;b=p}};break}}}};return b}
	//Output
	war.echo=function(){this.id='\x65\x63\x68\x6f\x5f\x64\x69\x76';this.max=0x14;this.obj=null;this.echoobj=null;this.creat=function(){$('\x3c\x64\x69\x76\x20\x69\x64\x3d\x22'+this.id+'\x5f\x62\x6f\x78\x22\x3e\x3c\x64\x69\x76\x20\x69\x64\x3d\x22'+this.id+'\x22\x3e\x26\x6e\x62\x73\x70\x3b\x3c\x2f\x64\x69\x76\x3e\x3c\x2f\x64\x69\x76\x3e').appendTo('\x62\x6f\x64\x79').css({'\x6c\x65\x66\x74':'\x31\x30\x70\x78','\x74\x6f\x70':'\x31\x30\x70\x78','\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2d\x63\x6f\x6c\x6f\x72':'\x23\x33\x33\x33','\x70\x6f\x73\x69\x74\x69\x6f\x6e':'\x61\x62\x73\x6f\x6c\x75\x74\x65','\x62\x6f\x72\x64\x65\x72':'\x23\x30\x36\x30\x20\x31\x70\x78\x20\x73\x6f\x6c\x69\x64','\x62\x6f\x72\x64\x65\x72\x2d\x72\x61\x64\x69\x75\x73':'\x35\x70\x78','\x7a\x2d\x69\x6e\x64\x65\x78':'\x39\x39\x39\x39','\x6f\x70\x61\x63\x69\x74\x79':'\x30\x2e\x36\x35','\x6f\x76\x65\x72\x66\x6c\x6f\x77':'\x68\x69\x64\x64\x65\x6e'});this.obj=$('\x23'+this.id+'\x5f\x62\x6f\x78');this.echoobj=$('\x23'+this.id);this.echoobj.css({'\x6d\x61\x72\x67\x69\x6e':'\x31\x32\x70\x78','\x70\x61\x64\x64\x69\x6e\x67\x2d\x6c\x65\x66\x74':'\x36\x30\x70\x78','\x77\x69\x64\x74\x68':'\x32\x35\x30\x70\x78','\x68\x65\x69\x67\x68\x74':'\x31\x30\x36\x70\x78','\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2d\x69\x6d\x61\x67\x65':'\x75\x72\x6c\x28'+$skin.logo+'\x29','\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2d\x72\x65\x70\x65\x61\x74':'\x6e\x6f\x2d\x72\x65\x70\x65\x61\x74','\x6f\x76\x65\x72\x66\x6c\x6f\x77':'\x68\x69\x64\x64\x65\x6e'})};this.echoNum=0x0;this.err=function(a){this.out(a,'\x63\x6f\x6c\x6f\x72\x3a\x23\x66\x30\x30\x3b')};this.errB=function(a){this.out(a,'\x63\x6f\x6c\x6f\x72\x3a\x23\x66\x30\x30\x3b\x66\x6f\x6e\x74\x2d\x77\x65\x69\x67\x68\x74\x3a\x62\x6f\x6c\x64\x3b')};this.outB=function(a){this.out(a,'\x66\x6f\x6e\x74\x2d\x77\x65\x69\x67\x68\x74\x3a\x62\x6f\x6c\x64\x3b\x74\x65\x78\x74\x2d\x64\x65\x63\x6f\x72\x61\x74\x69\x6f\x6e\x3a\x75\x6e\x64\x65\x72\x6c\x69\x6e\x65')};this.outG=function(a){this.out(a,'\x63\x6f\x6c\x6f\x72\x3a\x23\x30\x43\x30\x3b\x66\x6f\x6e\x74\x2d\x77\x65\x69\x67\x68\x74\x3a\x62\x6f\x6c\x64\x3b')};this.out=function(a,b){var c='\x74\x69\x70\x5f'+parseInt(Math.random()*0xf4240);a='\x3c\x64\x69\x76\x20\x69\x64\x3d\x22'+c+'\x22\x20\x73\x74\x79\x6c\x65\x3d\x22'+b+'\x22\x3e'+a+'\x3c\x2f\x64\x69\x76\x3e';this.echoNum++;if(this.echoNum>this.max){this.echoNum=0x0;this.echoobj.html(a)}else{this.echoobj.prepend(a)};$('\x23'+c).writer(0x14)};return this}
	war.creat=function(){$('\x62\x6f\x64\x79').css({'\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2d\x69\x6d\x61\x67\x65':'\x75\x72\x6c\x28'+$skin.war_bg+'\x29'});war.echo=war.echo();_echo=war.echo;_echo.creat();_echo_w=parseInt(_echo.obj.width());_echo_h=parseInt(_echo.obj.height());_echo_l=(war.width-_echo_w)/0x2;_echo_t=(war.height-_echo_h)/0x2;_echo.obj.css({'\x6c\x65\x66\x74':_echo_l+'\x70\x78','\x74\x6f\x70':_echo_t+'\x70\x78'});_echo.obj.fadeOut(0x0).fadeIn(0x1f4,function(){war.echo.errB('\x57\x65\x6c\x63\x6f\x6d\x65\x20\x54\x6f\x20\x54\x68\x65\x20\x47\x61\x6d\x65\x21')}).delay(0x1f4).fadeIn(0x1f4,function(){war.echo.out('\x47\x61\x6d\x65\x20\x4e\x61\x6d\x65\x3a\x20\x43\x4d\x2e\x57\x61\x72\x20\x76\x31\x2e\x30')}).delay(0x1f4).fadeIn(0x1f4,function(){war.echo.out('\x44\x65\x76\x65\x6c\x6f\x70\x6d\x65\x6e\x74\x3a\x20\x32\x30\x31\x32\x2f\x35\x2f\x31\x32')}).delay(0x1f4).fadeIn(0x1f4,function(){war.echo.outB('\x47\x61\x6d\x65\x20\x44\x65\x73\x69\x67\x6e\x3a\x20\x43\x4d\x2e\x49\x76\x61\x6e')}).delay(0x1f4).fadeIn(0x1f4,function(){war.echo.out('\x43\x6f\x6e\x74\x61\x63\x74\x3a\x20\x63\x6d\x2e\x69\x76\x61\x6e\x40\x71\x71\x2e\x63\x6f\x6d')}).delay(0x3e8).fadeIn(0x1f4,function(){war.echo.outG('\x4c\x6f\x61\x64\x69\x6e\x67\x2e\x2e\x2e\x2e')}).delay(0x3e8).fadeIn(0x1f4,function(){war.echo.errB('\x4e\x6f\x77\x21\x6c\x65\x74\x60\x73\x20\x77\x61\x72\x2e')}).delay(0x320).animate({'\x6c\x65\x66\x74':'\x31\x30\x70\x78','\x74\x6f\x70':'\x31\x30\x70\x78'},0x1f4,function(){var a=war.obstacle(0xa);var b=war.tank_cm();var c=war.mask_cm();var d=war.tank_en(0x6)});$('\x62\x6f\x64\x79').mousedown(function(){})}
	return war;
}