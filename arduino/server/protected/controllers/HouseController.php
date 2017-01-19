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
				'actions'=>array('index','view' , "getHouseInicialState" , "update"),
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
		'ventilador'=> $model->ventilador);		
		$json = CJSON::encode($item);
		echo $json;	
		Yii::app()->end();
		
	}
	
	
}
