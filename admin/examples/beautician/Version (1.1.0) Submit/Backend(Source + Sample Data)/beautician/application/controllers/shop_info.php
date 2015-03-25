<?php
require_once('permission.php');
class Shop_Info extends Permission
{
	function __construct()
	{
		parent::__construct('shop_info');
		$this->load->library('uploader');
	}
	
	//update
	function index()
	{
		$this->check_access('edit');
		
		if ($this->input->server('REQUEST_METHOD')=='POST') {
			$upload_data = $this->uploader->upload($_FILES);
			
			if (!isset($upload_data['error'])) {
				$shop_data = $this->input->post();
				
				$img_desc = $shop_data['image_desc'];
				unset($shop_data['image_desc']);
				unset($shop_data['images']);
				
				if ($this->shop->save($shop_data)) {
					foreach ($upload_data as $upload) {
						$image = array(
							'parent_id'=>$shop_data['id'],
							'type' => 'shop',
							'description' => $img_desc,
							'path' => $upload['file_name'],
							'width'=>$upload['image_width'],
							'height'=>$upload['image_height']
						);
						$this->image->save($image);
					}
								
					$this->session->set_flashdata('success','Shop Information is successfully updated.');
				} else {
					$this->session->set_flashdata('error','Database error occured.Please contact your system administrator.');
				}
				redirect(site_url('shop_info'));
			} else {
				$data['error'] = $upload_data['error'];
			}
		}
		
		$data['shop'] = $this->shop->get_info();
		
		$content['content'] = $this->load->view('shops/edit',$data,true);
		$this->load->view('template',$content);
	}
	
	function upload($shop_id=0)
	{
		$this->check_access('edit');
		
		$upload_data = $this->uploader->upload($_FILES);
		
		if (!isset($upload_data['error'])) {
			foreach ($upload_data as $upload) {
				$image = array(
								'parent_id'=> $shop_id,
								'type' => 'shop',
								'description' => $this->input->post('image_desc'),
								'path' => $upload['file_name'],
								'width'=>$upload['image_width'],
								'height'=>$upload['image_height']
							);
				$this->image->save($image);
			}
		} else {
			$data['error'] = $upload_data['error'];
		}
		
		$data['shop'] = $this->shop->get_info($shop_id);
		
		$content['content'] = $this->load->view('shops/edit',$data,true);		
		$this->load->view('template',$content);
	}
	
	function edit_image($shop_id, $image_id)
	{
		$this->check_access('edit');
		
		$image = array(
			'description' => $this->input->post('image_desc')
		);
			
		if ($this->image->save($image, $image_id)) {
			$this->session->set_flashdata('success','The image description is successfully updated.');
		} else {
			$this->session->set_flashdata('error','Database error occured.Please contact your system administrator.');
		}
		redirect(site_url('shop_info'));
	}

	//delete image
	function delete_image($shop_id,$image_id,$image_name)
	{
		$this->check_access('edit');
		
		if ($this->image->delete($image_id)) {
			unlink('./uploads/'.$image_name);
			unlink('./uploads/thumbs/'.$image_name);
			$this->session->set_flashdata('success','The image is successfully deleted.');
		} else {
			$this->session->set_flashdata('error','Database error occured.Please contact your system administrator.');
		}
		redirect(site_url('shop_info'));
	}	
}
?>