function getElementById(id){
	return document.getElementById(id);
}
//根据id获取元素
var input_tag=getElementById("input-tag"),
	input_hobby=getElementById("input-hobby"),
	tag_area=getElementById("tag-area"),
	hobby_area=getElementById("hobby-area"),
	submit_hobby=getElementById("submit-hobby");

function createItem(classname,html){
	var newItem=document.createElement("div");
	newItem.className=classname;
	newItem.innerHTML=html;
	newItem.onmouseover=function(){
		newItem.innerHTML="删除"+newItem.innerHTML;
	}
	newItem.onmouseout=function(){
		newItem.innerHTML=newItem.innerHTML.substring(2);
	}
	newItem.onclick=function(e){
		var t=e.target;
		t.parentNode.removeChild(t);
	}
	return newItem;
}
//添加tag
function addTag(txt){
	
	for(let i=0;i<tag_area.childNodes.length;i++){//是否与之前相同
		if(tag_area.childNodes[i].innerHTML==txt||txt==''){
			input_tag.value="";
			alert("输入重复了");
			return ;
		}
	}
	var atag=createItem("tag",txt.trim());
	tag_area.appendChild(atag);
	if(tag_area.childNodes.length>10){
		tag_area.removeChild(tag_area.childNodes[0]);//大于十个就删掉第一个
	}
	input_tag.value="";
}
function addhobby(txt){
	
	for(let i=0;i<hobby_area.childNodes.length;i++){//是否与之前相同
		if(hobby_area.childNodes[i].innerHTML==txt||txt==''){
			return ;
		}
	}
	var ahobby=createItem("hobby",txt.trim());
	hobby_area.appendChild(ahobby);
	if(hobby_area.childNodes.length>10){
		hobby_area.removeChild(hobby_area.childNodes[0]);//大于十个就删掉第一个
	}
	
}
input_tag.addEventListener('keydown',function(event){
	var e=event||window.event;
	if(e&&e.keyCode==32||e.keyCode==188||e.keyCode==13){
		var txt=input_tag.value;
		addTag(txt);
	}
})



submit_hobby.addEventListener('click',function(e){
	var hobbys=input_hobby.value.split(/[,\s\n、，]+/);//把hobbys进行分割
	// console.log(hobbys);
	for(var i=0;i<hobbys.length;i++){
		addhobby(hobbys[i]);
	}
	input_hobby.value="";
})