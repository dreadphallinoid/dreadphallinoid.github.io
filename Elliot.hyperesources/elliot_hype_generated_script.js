//	HYPE.documents["Elliot"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="Elliot.hyperesources",c="Elliot",e="elliot_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/elliot_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_601","HYPE_dtl_601",!0==(null!=a&&10>a||false==!0)?"HYPE-601.full.min.js":"HYPE-601.thin.min.js"),true==!0&&(a=a||l("HYPE_w_601","HYPE_wdtl_601","HYPE-601.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"fadeintrack1",source:"function(hypeDocument, element, event) {\t\nwindow.sound1 = new Howl({\n  src: ['Elliot.hyperesources/2022_10_21_002d_01.ogg'],\n  autoplay: true,\n  loop: true,\n  volume: 1,\n  onend: function() {\n    console.log('Finished!');\n    \n  }\n});\n\nwindow.sound1.play();\n\n// fade in sound 1 from 0 to 1 over 5 seconds. Comment the line below to disable fade. \nwindow.sound1.fade(0, 1, 2000);\n\n\n}",identifier:"48"},{name:"fadeouttrack1",source:"function(hypeDocument, element, event) {\twindow.sound1.fade(1, 0, 2000);\n}",identifier:"49"},{name:"scene1words",source:"function(hypeDocument, element, event) {\t\tscene1.innerHTML = '<font style=\"color:white\"><b>' + myData[\"myText2\"] + '</b></font>';\n\telement.style.backgroundColor = myData[\"myColor\"];\n\t\n}",identifier:"50"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_601(c,e,{"3":{n:"howler.min.js"},"-2":{n:"blank.gif"},"4":{n:"scene1words.js"},"0":{n:"2022_10_21_002d_01.ogg",g:"24",t:"application/ogg"},"1":{p:2,n:"silence.mp3",g:"40",t:"audio/mpeg"},"2":{p:1,n:"cat.jpg",g:"46",t:"@1x"},"-1":{n:"PIE.htc"}},h,[],d,[{n:"Intro",o:"1",X:[0]},{n:"Scene 1",o:"31",X:[1]}],[{o:"3",A:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"2"}]},p:"600px",a:100,Y:640,Z:480,b:100,cA:false,c:"#D42016",L:[],bY:1,d:640,U:{},T:{"11":{i:"11",n:"Location 1",z:0,b:[],a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"40",q:false}]},o:"kTimelineDefaultIdentifier"}],f:30}},bZ:180,O:["53","51","52"],n:"Untitled Layout","_":0,v:{"53":{c:640,bS:36,d:480,I:"None",J:"None",K:"None",g:"#FFFFF0",L:"None",M:0,N:0,bF:"51",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"52":{aU:8,G:"#000000",bS:36,aV:8,r:"inline",s:"'Andale Mono',Monaco,Monospace",t:16,Z:"break-word",aP:"pointer",w:"Begin",bF:"51",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"31"},{p:12,o:"40",q:false}]},x:"visible",yy:"nowrap",j:"absolute",y:"preserve",k:"div",dB:"button",z:2,aS:8,aT:8,a:287,b:221},"51":{k:"div",x:"visible",c:640,d:480,z:1,a:0,j:"absolute",bS:45,b:0}}},{o:"35",p:"600px",a:100,Y:640,Z:480,b:100,cA:false,c:"#D42016",L:[],bY:1,d:640,U:{},T:{"34":{i:"34",n:"Location 1",z:0,b:[],a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:9.29,b:[],a:[{f:"c",p:2,y:0,z:0.01,i:"ActionHandler",e:{a:[{p:4,h:"48"}]},s:{a:[{}]},o:"kTimelineDefaultIdentifier"},{f:"c",p:2,y:0.01,z:9.28,i:"ActionHandler",e:{a:[{p:4,h:"49"}]},s:{a:[{p:4,h:"48"}]},o:"kTimelineDefaultIdentifier"},{f:"c",p:2,y:9.29,z:0,i:"ActionHandler",s:{a:[{p:4,h:"49"}]},o:"kTimelineDefaultIdentifier"}],f:30}},bZ:180,O:["57","54","55","56"],n:"Untitled Layout","_":1,v:{"54":{k:"div",x:"visible",c:640,d:480,z:1,a:0,j:"absolute",bS:45,b:0},"57":{c:640,bS:36,d:480,I:"None",J:"None",K:"None",g:"#FFFFF0",L:"None",M:0,N:0,bF:"54",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"56":{G:"#51514D",aU:8,c:516,d:98,aV:8,r:"inline",s:"'Andale Mono',Monaco,Monospace",bD:"none",t:16,Z:"break-word",v:"normal",i:"scene1",w:"",bF:"54",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:54,cW:{a:[{p:4,h:"50"}]},b:350},"55":{c:530,d:273,I:"Solid",J:"Solid",K:"Solid",g:"#D42016",L:"Solid",M:1,N:1,bF:"54",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:1,C:"#D8DDE4",z:3,P:1,D:"#D8DDE4",a:54,b:35}}}],{},g,{},
(function (shouldShow, mainContentContainer) {
	var loadingPageID = mainContentContainer.id + "_loading";
	var loadingDiv = document.getElementById(loadingPageID);

	if(shouldShow == true) {
		if(loadingDiv == null) {	
			loadingDiv = document.createElement("div");
			loadingDiv.id = loadingPageID;
			loadingDiv.style.cssText = "overflow:hidden;position:absolute;width:150px;top:40%;left:0;right:0;margin:auto;padding:2px;border:3px solid #BBB;background-color:#EEE;border-radius:10px;text-align:center;font-family:Helvetica,Sans-Serif;font-size:13px;font-weight:700;color:#AAA;z-index:100000;";
			loadingDiv.innerHTML = "Loading";
			mainContentContainer.appendChild(loadingDiv);
		}
 
		loadingDiv.style.display = "block";
		loadingDiv.removeAttribute("aria-hidden");
		mainContentContainer.setAttribute("aria-busy", true);
	} else {
		loadingDiv.style.display = "none";
		loadingDiv.setAttribute("aria-hidden", true);
		mainContentContainer.removeAttribute("aria-busy");
	}
})

,false,false,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
