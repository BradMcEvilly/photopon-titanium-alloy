<?php 
require_once(APPPATH.'/libraries/REST_Controller.php');

class Shops extends REST_Controller
{
	function __construct()
	{
		parent::__construct();	
	}
	
	function index_get()
	{
		$shop = $this->shop->get_info();
		$shop->images = $this->image->get_all_by_type(1, 'shop')->result();
		$this->response($shop);
	}
	
	function contactus_post()
	{
		$data = $this->post();
		
		if ($data == null) {
			$this->response(array('error' => array('message' => 'invalid_json')));
		}
		
		if (!array_key_exists('name', $data)) {
			$this->response(array('error' => array('message' => 'require_name')));
		}
			
		if (!array_key_exists('email', $data)) {
			$this->response(array('error' => array('message' => 'require_email')));
		}
		
		if (!array_key_exists('message', $data)) {
			$this->response(array('error' => array('message' => 'require_message')));
		}
		
		$data = array(
			'name' => $data['name'],
			'email' => $data['email'],
			'message' => $data['message']
		);
		
		$this->contact->save($data);
		$this->response(array('success'=>'Inquiry is saved successfully!'));
	}
	
	
}
?>