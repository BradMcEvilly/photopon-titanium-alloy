<?php 
require_once(APPPATH.'/libraries/REST_Controller.php');

class Categories extends REST_Controller
{
	
	function index_get()
	{
		$cats = $this->category->get_only_publish()->result();
		$data = array();
		
		
		foreach ($cats as $cat) {
			$cat->items = $this->item->get_all_by_cat($cat->id,3)->result();
			
			$i = 0;
			foreach ($cat->items as $item) {
			//print_r($this->image->get_all_by_item($item->id)->result());die;
				$cat->items[$i]->images = $this->image->get_all_by_type($item->id,"item")->result();
				
				$cat->items[$i]->like_count = $this->like->count_all($item->id);
				$cat->items[$i]->review_count = $this->review->count_all($item->id);
				$cat->items[$i]->inquiries_count = $this->inquiry->count_all($item->id);
				$cat->items[$i]->touches_count = $this->touch->count_all($item->id);
				
				
				$reviews = array();
				$j = 0;
				foreach ($this->review->get_all_by_item_id($item->id)->result() as $review) {
					$reviews[$j] = $review;
					$reviews[$j]->added = $this->ago($reviews[$j]->added);
					$appuser = $this->appuser->get_info($review->appuser_id);
					$reviews[$j]->appuser_name = $appuser->username;
					$reviews[$j++]->profile_photo = $appuser->profile_photo;
				}
				
				$cat->items[$i++]->reviews = $reviews;
				
			}
			$data[] = $cat;
		}
		$this->response($data);
		
	}
	
	function get_get()
	{
		$data = null;
		
		$id = $this->get('id');
		if ($id) {
			$cat = $this->category->get_info($id);
			$cat->items = $this->get_items($cat->id);
			$data = $cat;
		} else {
			$cats = $this->category->get_all()->result();
			foreach ($cats as $cat) {
				$cat->items = $this->get_items($cat->id);
			}
			$data = $cats;
		}
		
		$this->response($data);
	}
	
	function get_items($cat_id)
	{
		$all = $this->get('item');
		if (!$all) {
			$items = $this->item->get_all_by_cat($cat_id,3)->result();
		} else {
			$items = $this->item->get_all_by_cat($cat_id)->result();
		}
		
		$i = 0;
		foreach ($items as $item) {
			$items[$i]->images = $this->image->get_all_by_item($item->id)->result();
			$items[$i]->like_count = $this->like->count_all($item->id);
			$items[$i]->review_count = $this->review->count_all($item->id);
			$items[$i]->inquiries_count = $this->inquiry->count_all($item->id);
			$items[$i]->touches_count = $this->touch->count_all($item->id);
			
			$reviews = array();
			$j = 0;
			foreach ($this->review->get_all_by_item_id($item->id)->result() as $review) {
				$reviews[$j] = $review;
				$reviews[$j]->added = $this->ago($reviews[$j]->added);
				$appuser = $this->appuser->get_info($review->appuser_id);
				$reviews[$j]->appuser_name = $appuser->username;
				$reviews[$j++]->profile_photo = $appuser->profile_photo;
			}
			
			$items[$i++]->reviews = $reviews;
		}
		
		return $items;
	}
	
	function ago($time)
	{
		$time = mysql_to_unix($time);
		$now = mysql_to_unix($this->category->get_now());
		
	   $periods = array("second", "minute", "hour", "day", "week", "month", "year", "decade");
	   $lengths = array("60","60","24","7","4.35","12","10");
	
	   $difference     = $now - $time;
	   $tense         = "ago";
	
	   for ($j = 0; $difference >= $lengths[$j] && $j < count($lengths)-1; $j++) {
	       $difference /= $lengths[$j];
	   }
	
	   $difference = round($difference);
	
	   if ($difference != 1) {
	       $periods[$j].= "s";
	   }
	   
	   if ($difference==0) {
	   		return "Just Now";
	   } else {
	   		return "$difference $periods[$j] ago";
	   }
	}
}
?>