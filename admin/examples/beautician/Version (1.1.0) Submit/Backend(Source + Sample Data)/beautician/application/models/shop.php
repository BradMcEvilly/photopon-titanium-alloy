<?php
class Shop extends Base_Model
{
	protected $table_name;
	
	function __construct()
	{
		parent::__construct();
		$this->table_name = 'bc_shop_info';
	}

	function save($shop_info = array())
	{
		$info = $this->db->get($this->table_name);
		
		if ($info->num_rows() == 0) {
			if ($this->db->insert($this->table_name, $shop_info)) {
				return true;
			}
		} else {
			if ($this->db->update($this->table_name, $shop_info)) {
				return true;
			}
		}
		return false;
	}

	function get_info()
	{
		$query = $this->db->get($this->table_name);
		
		if ($query->num_rows() == 1) {
			return $query->row();
		} else {
			return $this->get_empty_object($this->table_name);
		}
	}
}
?>