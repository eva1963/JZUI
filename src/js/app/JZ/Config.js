var ENV = 'pro';
exports.node_modules = 0;   
exports.ENV = ENV;  
exports.Dev = ( ENV == 'dev' );
exports.Production = ( ENV == 'production' );
exports.AjaxUrl = {
	DemoPageData : "DemoPageDataJsonP?"
};
exports.AjaxUrlValueJsonP = {
	"DemoPageDataJsonP?" : "http://tliangl.com/service/api.ashx?action=GetBlogs"
	//"DemoPageDataJsonP?" : "http://localhost:20849/service/api.ashx?action=GetBlogs"
};

var showBody = function(){
	console.log('showBody');
	if(document.body!=null){
		document.body.style.opacity = 1;
		document.body.style.display = 'block';
	}
}; 
var onWindowLoad = function(func){ 
    var oldonload=window.onload; 
    if(typeof window.onload!='function'){ 
        window.onload=func; 
    }else{ 
        window.onload=function(){ 
            oldonload(); 
            func(); 
        } 
    } 
};
exports.onWindowLoad = onWindowLoad;
exports.LoadClock = function (){
	console.log(1);
	onWindowLoad(function (){
		showBody();
	});
};
exports.Base = function(){
	if(document.body!=null && !document.body.hasAttribute("v-cloak")){
		document.body.setAttribute('v-cloak','');
	} 
};