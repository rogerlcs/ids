<?php

/**
 * The followings are the available columns in table 'house':
 * @property integer $id
 * @property string $lampada1
 * @property string $lampada2
 * @property string $lampada3
 * @property string $lampada4
 * @property string $lampada5
 * @property string $lampada6
 * @property string $ventilador1
 */
class House extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @return static the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return '{{house}}';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(					
			array('lampada1,lampada2,lampada3,lampada4,lampada5,lampada6,ventilador,profile', 'safe'),
		);
	}

	
	
}
