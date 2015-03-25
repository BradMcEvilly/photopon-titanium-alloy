
			<ul class="breadcrumb">
				<li><a href="<?php echo site_url();?>">Dashboard</a> <span class="divider"></span></li>
				<li><a href="<?php echo site_url('items');?>">Item List</a> <span class="divider"></span></li>
				<li>Add New Item</li>
			</ul>
			
			<?php
			$attributes = array('id' => 'item-form','enctype' => 'multipart/form-data');
			echo form_open(site_url('items/add'), $attributes);
			?>
				<legend>Item Information</legend>
				
				<div class="row">
					<div class="col-sm-6">
							<div class="form-group">
								<label>Item Name</label>
								<input class="form-control" type="text" placeholder="Item Name" name='name' id='name'>
							</div>
							
							<div class="form-group">
								<label>Category</label>
								<select class="form-control" name="cat_id">
								<?php
									foreach($this->category->get_all()->result() as $cat)
										echo "<option value='".$cat->id."'>".$cat->name."</option>";
								?>
								</select>
							</div>
							
							<div class="form-group">
								<label>Description</label>
								<textarea class="form-control" name="description" placeholder="Description" rows="9"></textarea>
							</div>
							
							<div class="form-group">
								<label>Price</label>
								<input class="form-control" type="text" name="price" placeholder="Price"/>
							</div>
					</div>
					
					<div class="col-sm-6">
							<div class="form-group">
								<label>Upload Photos</label>
								<input type="file" name="images1">
								<br/>
								Image Description : 
								<textarea class="form-control" name="image_desc" rows="9"></textarea>
							</div>
					</div>
				</div>
				
				<hr/>
				
				<button type="submit" class="btn btn-primary">Submit</button>
				<a href="<?php echo site_url('items');?>" class="btn">Cancel</a>
			</form>

			<script>
			$(document).ready(function(){
				$('#item-form').validate({
					rules:{
						name:{
							required: true,
							minlength: 4,
							remote: '<?php echo site_url("items/exists");?>'
						}
					},
					messages:{
						name:{
							required: "Please fill item Name.",
							minlength: "The length of item Name must be greater than 4",
							remote: "item Name is already existed in the system"
						}
					}
				});
			});
			</script>

