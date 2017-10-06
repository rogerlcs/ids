<?php

class HouseController extends Controller
{	


	/**
	 * Specifies the access control rules.
	 * This method is used by the 'accessControl' filter.
	 * @return array access control rules
	 */
	public function accessRules()
	{
		return array(
			array('allow',  // allow all users to access 'index' and 'view' actions.
				'actions'=>array('index','view' , "getHouseInicialState" , "update" , "criarTimeout"),
				'users'=>array('*'),
			),
			array('allow', // allow authenticated users to access all actions
			
				'users'=>array('@'),
			),
			array('deny',  // deny all users
				'users'=>array('*'),
			),
		);
	}

	public function actionCriarTimeout(){
		header('Access-Control-Allow-Origin: *');	
		if(isset($_GET['id'])){			
			$model=House::model()->findByPk($_GET['id']);					
			if(isset($_GET['lampada1tempo'])){			
				
				$tempo = $_GET['lampada1tempo'];
				echo date("Y-m-d H:i:s" ,  strtotime('+' . $tempo . ' seconds'));	
				$model->lampada1tempo = date("Y-m-d H:i:s" , strtotime('+' . $tempo . ' seconds'));						
				$model->save();
			}	
			if(isset($_GET['lampada2tempo'])){			
				$tempo = $_GET['lampada2tempo'];
				echo date("Y-m-d H:i:s" ,  strtotime('+' . $tempo . ' seconds'));	
				$model->lampada2tempo = date("Y-m-d H:i:s" , strtotime('+' . $tempo . ' seconds'));										
				$model->save();
			}				
			if(isset($_GET['lampada3tempo'])){			
				$tempo = $_GET['lampada3tempo'];
				echo date("Y-m-d H:i:s" ,  strtotime('+' . $tempo . ' seconds'));	
				$model->lampada3tempo = date("Y-m-d H:i:s" , strtotime('+' . $tempo . ' seconds'));										
				$model->save();
			}				
			if(isset($_GET['lampada4tempo'])){			
				$tempo = $_GET['lampada4tempo'];
				echo date("Y-m-d H:i:s" ,  strtotime('+' . $tempo . ' seconds'));	
				$model->lampada4tempo = date("Y-m-d H:i:s" , strtotime('+' . $tempo . ' seconds'));														
				$model->save();
			}				
			if(isset($_GET['lampada5tempo'])){			
				$tempo = $_GET['lampada5tempo'];
				echo date("Y-m-d H:i:s" ,  strtotime('+' . $tempo . ' seconds'));	
				$model->lampada5tempo = date("Y-m-d H:i:s" , strtotime('+' . $tempo . ' seconds'));										
				$model->save();
			}				
			
			if(isset($_GET['lampada6tempo'])){			
				
				$tempo = $_GET['lampada6tempo'];				
				echo date("Y-m-d H:i:s" ,  strtotime('+' . $tempo . ' seconds'));	
				$model->lampada6tempo = date("Y-m-d H:i:s" , strtotime('+' . $tempo . ' seconds'));										
				$model->save();
			}				
		}
		
	}
	
	public function actionUpdate()
	{
		header('Access-Control-Allow-Origin: *');	
		
		if(isset($_GET['id'])){			
			$model=House::model()->findByPk($_GET['id']);			
			if(isset($_GET['lampada1']))
				$model->lampada1 = $_GET['lampada1'];					
			if(isset($_GET['lampada2']))			
				$model->lampada2 = $_GET['lampada2'];			
			if(isset($_GET['lampada3']))
				$model->lampada3 = $_GET['lampada3'];			
			if(isset($_GET['lampada4']))
				$model->lampada4 = $_GET['lampada4'];			
			if(isset($_GET['lampada5']))
				$model->lampada5 = $_GET['lampada5'];			
			if(isset($_GET['lampada6']))
			$model->lampada6 = $_GET['lampada6'];			
			if(isset($_GET['ventilador']))
				$model->ventilador = $_GET['ventilador'];			
			$model->save();
			echo  CJSON::encode("ok");
			
		}else{			
			echo  CJSON::encode("sem id");			
		}			
		
		Yii::app()->end();
		
	}
	
	
	
	public function actionGetHouseInicialState()
	{
		header('Access-Control-Allow-Origin: *');						
		if(isset($_GET['id'])){					
			$id = $_GET['id'];
			$model=House::model()->findByPk($_GET['id']);			
			//ser for menor que a hora corrente			
			if(!is_null($model->lampada1tempo) &&  $model->lampada1tempo <= date("Y-m-d H:i:s")){
				$model->lampada1tempo = NULL;
				$model->lampada1 = 0; 
				$model->save();
			}
			if(!is_null($model->lampada2tempo) && $model->lampada2tempo <= date("Y-m-d H:i:s")){
				$model->lampada2tempo = NULL;
				$model->lampada2 = 0; 
				$model->save();
			}			
			if(!is_null($model->lampada3tempo) && $model->lampada3tempo <= date("Y-m-d H:i:s")){
				$model->lampada3tempo = NULL;
				$model->lampada3 = 0; 
				$model->save();
			}
			if(!is_null($model->lampada4tempo) && $model->lampada4tempo <= date("Y-m-d H:i:s")){
				$model->lampada4tempo = NULL;
				$model->lampada4 = 0; 
				$model->save();
			}
			
			if(!is_null($model->lampada5tempo) && $model->lampada5tempo <= date("Y-m-d H:i:s")){
				$model->lampada5tempo = NULL;
				$model->lampada5 = 0; 
				$model->save();
			}
			
			if( !is_null($model->lampada6tempo) && $model->lampada6tempo <= date("Y-m-d H:i:s")){
				//echo "entrou aqui";
				$model->lampada6tempo = NULL;
				$model->lampada6 = 0; 
				$model->save();
			}		
		}else{
			$model=new House();						
			$model->save();		
		}						
								
		$item = array('id'=> $model->id ,
		'lampada1'=> $model->lampada1,
		'lampada2'=> $model->lampada2,
		'lampada3'=> $model->lampada3,
		'lampada4'=> $model->lampada4,
		'lampada5'=> $model->lampada5,
		'lampada6'=> $model->lampada6,
		'lampada6tempo'=> $model->lampada6tempo <= date("Y-m-d H:i:s") && is_null($model->lampada6tempo),
		'ventilador'=> $model->ventilador);		
		$json = CJSON::encode($item);
		echo $json;	
		Yii::app()->end();
		
	}
	
	
}
