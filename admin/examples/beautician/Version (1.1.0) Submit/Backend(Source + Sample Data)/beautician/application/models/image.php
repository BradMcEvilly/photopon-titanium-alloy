<?php 
class Image extends Base_Model
{
	protected $table_name;

	function __construct()
	{
		parent::__construct();
		$this->table_name = 'bc_images';
	}

	function exists($data)
	{
		$this->db->from($this->table_name);
		
		if (isset($data['id'])) {
			$this->db->where('id',$data['id']);
		}
		
		$query = $this->db->get();
		return ($query->num_rows()==1);
	}

	function save(&$data, $id=false)
	{
		if (!$id && !$this->exists(array('id'=>$id))) {
			if ($this->db->insert($this->table_name,$data)) {
				$data['id'] = $this->db->insert_id();
				return true;
			}
		} else {
			$this->db->where('id',$id);
			return $this->db->update($this->table_name,$data);
		}
		return false;
	}

	function get_all($type, $limit=false, $offset=false)
	{
		$this->db->from($this->table_name);
		$this->db->where('type', $type);
		
		if ($limit) {
			$this->db->limit($limit);
		}
		
		if ($offset) {
			$this->db->offset($offset);
		}
		
		return $this->db->get();
	}

	function get_all_by_type($parent_id, $type, $limit=false, $offset=false)
	{
		$this->db->from($this->table_name);
		$this->db->where('parent_id',$parent_id);
		$this->db->where('type', $type);
		
		if ($limit) {
			$this->db->limit($limit);
		}
		
		if ($offset) {
			$this->db->offset($offset);
		}
		
		return $this->db->get();
	}

	function get_info($id)
	{
		$query = $this->db->get_where($this->table_name,array('id'=>$id));
		
		if ($query->num_rows()==1) {
			return $query->row();
		} else {
			return $this->get_empty_object($this->table_name);
		}
	}

	function get_multiple_info($ids)
	{
		$this->db->from($this->table_name);
		$this->db->where_in($ids);
		return $this->db->get();
	}

	function count_all($type)
	{
		$this->db->from($this->table_name);
		$this->db->where('type', $type);
		return $this->db->count_all_results();
	}
	
	

	function count_all_by_item($parent_id, $type)
	{
		$this->db->from($this->table_name);
		$this->db->where('parent_id',$parent_id);
		$this->db->where('type', $type);
		return $this->db->count_all_results();
	}

	function delete($id)
	{
		$this->db->where('id',$id);
		return $this->db->delete($this->table_name);
 	}
}
?>