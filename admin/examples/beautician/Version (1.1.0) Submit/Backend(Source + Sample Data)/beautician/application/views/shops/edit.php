
			<ul class="breadcrumb">
				<li><a href="<?php echo site_url();?>">Dashboard</a> <span class="divider"></span></li>
				<li>Shop Information</li>
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
			$attributes = array('id' => 'shop-form');
			echo form_open(site_url("shop_info/index"), $attributes);
			?>
				<div class="row">
					<div class="col-sm-6">
						<div class="form-group">
							<label>Name</label>
							<input class="form-control" type="text" placeholder="Name" name='name' id='name'
							 value="<?php echo $shop->name;?>">
						</div>
						
						<div class="form-group">
							<label>Description</label>
							<textarea class="form-control" name="description" placeholder="Description" rows="9"><?php echo $shop->description;?></textarea>
						</div>
						
						<div class="form-group">
							<label>Phone</label>
							<input class="form-control" type="text" placeholder="Phone" name='phone' id='phone'
							 value="<?php echo $shop->phone;?>">
						</div>
						
						<div class="form-group">
							<label>Address</label>
							<textarea class="form-control" name="address" placeholder="Address" rows="5"><?php echo $shop->address;?></textarea>
						</div>
						
						
					</div>
					
					<div class="col-sm-6">
						Image Gallery <a class="btn btn-primary btn-upload pull-right" data-toggle="modal" data-target="#uploadImage">Add Image</a>
						<hr/>					
						<?php
							$images = $this->image->get_all_by_type(1, 'shop')->result();
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
				<hr/>
				<input type="submit" value="Update" class="btn btn-primary"/>
				<a href="<?php echo site_url('shop_info');?>" class="btn">Cancel</a>
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
						echo form_open(site_url("shop_info/upload/1"), $attributes);
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
					$('.btn-upload').click(function(e){
						e.preventDefault();
					});
					
					$('.detail-img').click(function(e){
						e.preventDefault();
						var id = $(this).attr('id');
						var desc = $(this).attr('desc');
						var image = $(this).attr('image');
						var action = "<?php echo site_url("shop_info/edit_image/1");?>";
						$('#image-form').attr('action', action + "/" + id);
						$('#image-form .edit_image_desc').val(desc);
						$('#image-form .image').attr('src',image);
					});
					
					$('.delete-img').click(function(e){
						e.preventDefault();
						var id = $(this).attr('id');
						var image = $(this).attr('image');
						var action = '<?php echo site_url('shop_info/delete_image/1');?>/' + id + '/' + image;
						$('.btn-delete-image').attr('href', action);
					});
				});
			</script>