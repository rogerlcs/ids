
var domain = "http://46.101.131.51/server/index.php/house";

var lampada1 = "";
var lampada2= "";
var lampada3= "";
var lampada4= "";
var lampada5= "";
var lampada6= "";

var updateServiceRunning;

var ventilador= "";
ventiladorAnimation= "";
var id= "";

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


function inserir(){
	
	var id_inserir = $("#session_id").val();	
	initObjets(id_inserir);
	
}


function updateService(){
		
	initObjets($("#session_id").val());
}


function initObjets(id_inserir){	    
    try{    	
		//showLoading(true);

		var url  = "" ;		
		var url = domain + '/gethouseinicialstate';				
		
		
		
		if(id_inserir != "" ){
			url += "/id/" + id_inserir;			
		}		
		callback = $.getJSON(url,function(data){		    			
			if(data){			
				$("#session_id").val(data.id);
				if(data.lampada1 == 1) lampada1.opacity = 1;
				else lampada1.opacity = 0.5;				
				if(data.lampada2 == 1) lampada2.opacity = 1;
				else lampada2.opacity = 0.5;				
				if(data.lampada3 == 1) lampada3.opacity = 1;
				else lampada3.opacity = 0.5;				
				if(data.lampada4 == 1) lampada4.opacity = 1;
				else lampada4.opacity = 0.5;				
				if(data.lampada5 == 1) lampada5.opacity = 1;
				else lampada5.opacity = 0.5;				
				
				if(data.lampada6 == 1) lampada6.opacity = 1;
				else lampada6.opacity = 0.5;											
				if(data.ventilador == 1){
					
					ventiladorAnimation.play("walk", "loop");    
					
				}else ventiladorAnimation.stop();																
			}
		  }
		);						
		callback.always(function() {			
			//hideLoading();			
		});
		callback.error(function() {			
            Materialize.toast('Sem Conexão', 4000); 
        });
		
	}catch(ex){
		alert(ex);
		Materialize.toast('Sem Conexão', 4000); 
	}		
}


function update(){
		
    try{    	
	
		//comentado pois o servidor free utilizando não aguenta tanta requisição	
		//clearInterval(updateServiceRunning);
		//updateServiceRunning= null;
	
		//showLoading(true);	
		var id = $("#session_id").val();		
		var url = domain + '/update/id/' + id;						
		if(lampada1.opacity == 1) url += "/lampada1/1"; 
		else url += "/lampada1/0";
		if(lampada2.opacity == 1) url += "/lampada2/1"; 
		else url += "/lampada2/0";
		if(lampada3.opacity == 1) url += "/lampada3/1"; 
		else url += "/lampada3/0";
		if(lampada4.opacity == 1) url += "/lampada4/1"; 
		else url += "/lampada4/0";
		if(lampada5.opacity == 1) url += "/lampada5/1"; 
		else url += "/lampada5/0";
		
		if(lampada6.opacity == 1) url += "/lampada6/1"; 
		else url += "/lampada6/0";
		
		
		//dando pau no ventilador animation
		if(ventiladorAnimation.isStopped())
			url += "/ventilador/0"; 
		else  		
			url += "/ventilador/1"; 				
		var callback = $.getJSON(url,function(data){
			if(data){
				if(data == "sem id"){
					Materialize.toast('O idendificaor está definido?', 4000); 		
				}
			}
		  }
		);						
		callback.always(function() {	
			//comentado pois o servidor free utilizando não aguenta tanta requisição	
			//hideLoading();		
			//if(!updateServiceRunning)
				//updateServiceRunning = setInterval(function(){ updateService(); }, 3000);
			
		});
		callback.error(function() {			
            Materialize.toast('Sem Conexão', 4000); 
        });
		
	}catch(ex){
		
		Materialize.toast('Sem Conexão', 4000); 
	}		
}



function showLoading(modal){
	//$("#loading").addClass("active");
	if(modal)
		$.mobile.loading( 'show', {text: "",textVisible: false,theme: 'b',textonly: false,html: "<div id='modal_loading' class='modal'><span style='width:70px;' class='ui-bar ui-overlay-a ui-corner-all'><img src='images/ajax-loader.gif' /></span><div class='modal-content'></div>"});	
	else
		$.mobile.loading( 'show', {text: "",textVisible: false,theme: 'b',textonly: false,html: "<span style='width:70px;' class='ui-bar ui-overlay-a ui-corner-all'><img src='images/ajax-loader.gif' /></span>"});
}



function hideLoading(){
	//$("#loading").removeClass("active");
	// $.mobile.loading( "hide" );	
}



function initAnimation(){

var canvas = CE.defines("canvas_id").extend(Animation).
		ready(function() {
			canvas.Scene.call("MyScene");						
        });		
		
canvas.Scene.new({
	name: "MyScene",
	materials: {
        // Usually put relatives links
		images: {
            // For CanvasEngine load "bar" first, we add index property
            "bar": {path: "images/background.jpg", index: -1},                        
			"lamp1": {path: "images/lamp.png", index: -1},       
			"lamp2": {path: "images/lamp.png", index: -1},       
			"lamp3": {path: "images/lamp.png", index: -1},       
			"lamp4": {path: "images/lamp.png", index: -1},       
			"lamp5": {path: "images/lamp.png", index: -1},			
			"lamp6": {path: "images/lamp.png", index: -1},			
			"ventilador": {path: "images/vent_roda.png", index: -1},
			"numero1": {path: "images/numero1.png", index: -1},
			"numero2": {path: "images/numero2.png", index: -1},
			"numero3": {path: "images/numero3.png", index: -1},
			"numero4": {path: "images/numero4.png", index: -1},
			"numero5": {path: "images/numero5.png", index: -1},
			"numero6": {path: "images/numero6.png", index: -1},
			"numero7": {path: "images/numero7.png", index: -1},
			
		}
	},
	called: function(stage) {
        // Initialize an element
		this.el = this.createElement();
		stage.append(this.el);
	},
	preload: function(stage, pourcent, material) {
		
		this.el.drawImage("bar", 0, 0, pourcent + "%");
		
	},
	ready: function(stage) {
        // use stage.empty() for clear stage
		
		//segundo quarto
		lampada1 = this.createElement();
		lampada1.drawImage("lamp1", 310, 330);
		lampada1.on("click", function(e) { // or el.click(function(e) {
            this.opacity = this.opacity < 1 ? 1 : 0.5 ;
			update();
        });
		stage.append(lampada1);
		//segundo quarto
		numero1 = this.createElement();
		numero1.drawImage("numero1", 300, 330);
		numero1.on("click", function(e) { // or el.click(function(e) {
            						
        });
		stage.append(numero1);
		
		//cozinha
		lampada2 = this.createElement();
		lampada2.drawImage("lamp2", 300, 100);
		lampada2.on("click", function(e) { // or el.click(function(e) {
            this.opacity = this.opacity < 1 ? 1 : 0.5 ;
			update();
        });
		stage.append(lampada2);
		
		
		numero2 = this.createElement();
		numero2.drawImage("numero2", 290, 100);
		numero2.on("click", function(e) { // or el.click(function(e) {
            
        });
		stage.append(numero2);
		
		
		//banheiro
		lampada3 = this.createElement();
		lampada3.drawImage("lamp3", 170, 250);
		lampada3.on("click", function(e) { // or el.click(function(e) {
            this.opacity = this.opacity < 1 ? 1 : 0.5 ;
			update();
        });
		stage.append(lampada3);
		
		
		numero3 = this.createElement();
		numero3.drawImage("numero3", 160, 250);
		numero3.on("click", function(e) { // or el.click(function(e) {
            
        });
		stage.append(numero3);
		
		//primeiro quarto
		lampada4 = this.createElement();
		lampada4.drawImage("lamp4", 120, 120);
		lampada4.on("click", function(e) { // or el.click(function(e) {
            this.opacity = this.opacity < 1 ? 1 : 0.5 ;
			update();
        });
		stage.append(lampada4);
		
		//primeiro quarto
		numero4 = this.createElement();
		numero4.drawImage("numero4", 110, 120);
		numero4.on("click", function(e) { // or el.click(function(e) {
            
        });
		stage.append(numero4);
						
		//varanda
		lampada5 = this.createElement();
		lampada5.drawImage("lamp5", 420, 440);
		lampada5.on("click", function(e) { // or el.click(function(e) {
            this.opacity = this.opacity < 1 ? 1 : 0.5 ;
			update();
        });
		stage.append(lampada5);
		
		
		//varanda
		numero5 = this.createElement();
		numero5.drawImage("numero5", 410, 440);
		numero5.on("click", function(e) { // or el.click(function(e) {
            
        });
		stage.append(numero5);
		
		//sala
		lampada6 = this.createElement();
		lampada6.drawImage("lamp6", 550, 200);
		lampada6.on("click", function(e) { // or el.click(function(e) {
            this.opacity = this.opacity < 1 ? 1 : 0.5 ;
			update();
        });
		stage.append(lampada6);
		
		numero6 = this.createElement();
		numero6.drawImage("numero6", 540, 200);
		numero6.on("click", function(e) { // or el.click(function(e) {
            
        });
		stage.append(numero6);
		
		
		//ventilador segundo quarto
		
		var ventilador = this.createElement();
		
		ventiladorAnimation = canvas.Animation.new({
				images: "ventilador",
				animations: {
					walk: {
						frames: [0, 10],
						size: {
							width: 600/12,
							height: 63 
						},
						frequence: 5
					}
				}
		});
		ventilador.x = 370;
		ventilador.y = 350;
		ventiladorAnimation.add(ventilador);
		ventiladorAnimation.play("walk", "loop");    
		
		
		ventilador.on("click", function(e) { // or el.click(function(e) {
        
			if(ventiladorAnimation.isStopped()){			
				ventiladorAnimation.play("walk", "loop");    
				
			}else{
				ventiladorAnimation.stop();
			}
			update();
        });
						
		stage.append(ventilador);
		
		numero7 = this.createElement();
		numero7.drawImage("numero7", 410, 350);
		numero7.on("click", function(e) { // or el.click(function(e) {
            
        });
		stage.append(numero7);
		
		
		/*
		this.ventilador = this.createElement();
		this.ventilador.drawImage("ventilador", 500, 175);
		this.ventilador.on("click", function(e) { // or el.click(function(e) {
            this.opacity = this.opacity < 1 ? 1 : 0.5 ;
        });
		stage.append(this.ventilador);
		*/
		
		
		
		
		
	}
});	

}

function ligar(element){
	element.opacity = 1;
}

function desligar(element){
	element.opacity = 0.5;
}
