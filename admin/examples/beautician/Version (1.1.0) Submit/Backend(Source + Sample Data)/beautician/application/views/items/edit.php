
			<ul class="breadcrumb">
				<li><a href="<?php echo site_url();?>">Dashboard</a> <span class="divider"></span></li>
				<li><a href="<?php echo site_url('items');?>">Item List</a> <span class="divider"></span></li>
				<li>Update Item</li>
			</ul>
		
			<!-- Message -->
			<?php if($this->session->flashdata('success')): ?>
				<div class="alert alert-success fade in">
					<?php echo $this->session->flashdata('success');?>
					<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
				</div>
			<?php elseif($this->session->flashdata('error')):?>
				<div class="alert alert-danger fade in">
					<?php echo $this->session->flashdata('error');?>
					<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
				</div>
			<?php endif;?>
			
			<?php
			$attributes = array('id' => 'item-form','enctype' => 'multipart/form-data');
			echo form_open(site_url("items/edit/".$item->id), $attributes);
			?>
				<div class="row">
					<div class="col-sm-5">
						<div class="form-group">
							<label>Item Name</label>
							<input class="form-control" type="text" placeholder="Item Name" name='name' id='name'
							 value="<?php echo $item->name;?>">
						</div>
						
						<div class="form-group">
							<label>Category</label>
							<select class="form-control" name="cat_id">
							<?php
								foreach($this->category->get_all()->result() as $cat){
									echo "<option value='".$cat->id."'";
									if($item->cat_id == $cat->id) 
										echo " selected ";
									echo ">".$cat->name."</option>";
								}
							?>
							</select>
						</div>
						
						<div class="form-group">
							<label>Description</label>
							<textarea class="form-control" name="description" placeholder="Description" rows="9"><?php echo $item->description;?></textarea>
						</div>
						
						<div class="form-group">
							<label>Price</label>
							<input class="form-control" type="text" name="price" placeholder="Price" value="<?php echo $item->price;?>"/>
						</div>
						
						<input type="submit" value="Update" class="btn btn-primary"/>
						<a href="<?php echo site_url('items');?>" class="btn">Cancel</a>
					</div>
					
					<div class="col-sm-7">
						Image Gallery <a class="btn btn-primary btn-upload pull-right" data-toggle="modal" data-target="#uploadImage">Add Image</a>
						<hr/>					
						<?php
							$images = $this->image->get_all_by_type($item->id, 'item')->result();
							if(count($images) > 0):
						?>
							<div class="row">
							<?php
								$i= 0;
								foreach ($images as $img) {
									if ($i>0 && $i%3==0) {
										echo "</div><div class='row'>";
									}
									
									echo '<div class="col-md-4" style="height:100"><div class="thumbnail">'.
										'<img src="'.base_url('uploads/thumbs/'.$img->path).'"><br/>'.
										'<p class="text-center">'.
										'<a  data-toggle="modal" data-target="#updateDesc" class="detail-img" id="'.$img->id.'" 
											desc="'.$img->description.'" image="'.base_url('uploads/'.$img->path).'">Detail<a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'.
										'<a data-toggle="modal" data-target="#deletePhoto" class="delete-img" id="'.$img->id.'"   
											image="'.$img->path.'">Remove</a></p>'.
										'</div></div>';
								   $i++;
								}
							?>
							</div>
						
						<?php
							endif;
						?>
					</div>
				</div>
			</form>
			
			<div class="modal fade"  id="uploadImage">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal">
								<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
							</button>
							<h4 class="modal-title">Upload Image</h4>
						</div>
						<?php
						$attributes = array('id' => 'upload-form','enctype' => 'multipart/form-data');
						echo form_open(site_url("items/upload/".$item->id), $attributes);
						?>
							<div class="modal-body">
								<div class="form-group">
									<label>Upload Photo</label>
									<input type="file" name="images1">
									<br/>
									<label>Image Description:</label>
									<textarea class="form-control" name="image_desc" rows="9"></textarea>
								</div>
							</div>
							<div class="modal-footer">
								<input type="submit" value="Upload" class="btn btn-primary"/>
								<a type="button" class="btn btn-default" data-dismiss="modal">Cancel</a>
							</div>
						</form>
					</div>
				</div>
			</div>
			
			<div class="modal fade"  id="updateDesc">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal">
								<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
							</button>
							<h4 class="modal-title">Update Image Information</h4>
						</div>
						<?php
						$attributes = array('id' => 'image-form','enctype' => 'multipart/form-data');
						echo form_open('', $attributes);
						?>
							<div class="modal-body">
								<div class="form-group">
									<div class="row">
										<img class="col-sm-12 image">
									</div>
									<br/>
									<label>Image Description:</label>
									<textarea class="form-control edit_image_desc" name="image_desc" rows="9"></textarea>
								</div>
							</div>
							<div class="modal-footer">
								<input type="submit" value="Upload" class="btn btn-primary"/>
								<a type="button" class="btn btn-default" data-dismiss="modal">Cancel</a>
							</div>
						</form>
					</div>
				</div>
			</div>
			
			<div class="modal fade"  id="deletePhoto">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
							<h4 class="modal-title">Deleting Image</h4>
						</div>
						<div class="modal-body">
							<p>Are you sure you want to delete the photo?</p>
						</div>
						<div class="modal-footer">
							<a type="button" class="btn btn-default btn-delete-image">Yes</a>
							<a type="button" class="btn btn-default" data-dismiss="modal">Cancel</a>
						</div>
					</div>
				</div>			
			</div>
			
			<script>
				$(document).ready(function(){
					$('#item-form').validate({
						rules:{
							name:{
								required: true,
								minlength: 4,
								remote: '<?php echo site_url('items/exists/'.$item->id);?>'
							}
						},
						messages:{
							name:{
								required: "Please fill item name.",
								minlength: "The length of item name must be greater than 4",
								remote: "item name is already existed in the system"
							}
						}
					});
					
					$('.btn-upload').click(function(e){
						e.preventDefault();
					});
					
					$('.detail-img').click(function(e){
						e.preventDefault();
						var id = $(this).attr('id');
						var desc = $(this).attr('desc');
						var image = $(this).attr('image');
						var action = "<?php echo site_url("items/edit_image/".$item->id);?>";
						$('#image-form').attr('action', action + "/" + id);
						$('#image-form .edit_image_desc').val(desc);
						$('#image-form .image').attr('src',image);
					});
					
					$('.delete-img').click(function(e){
						e.preventDefault();
						var id = $(this).attr('id');
						var image = $(this).attr('image');
						var action = '<?php echo site_url('items/delete_image/'.$item->id);?>/' + id + '/' + image;
						$('.btn-delete-image').attr('href', action);
					});
				});
			</script>

