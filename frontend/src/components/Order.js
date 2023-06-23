import React from 'react'

function Order() {
	return (
	  
		<section class="h-100 h-custom">
		
	<div class="container-fluide py-5 h-100">
	<div class="row d-flex justify-content-center align-items-center h-100">
		<div class="col">
						
			<div class="card">
							
			<div class="card-body p-4">
	<div class="container mb-4 main-container">
    <div class="row"></div>
	<div class="container"  style={{marginTop:'20px'}}>
<div class="row "  style={{ padding: '5px' }}>
<div id="user" class="col-md-12" >
  <div class="panel panel-primary panel-table animated slideInDown">
              <div class="panel-heading " style={{ padding: '5px' }}>
        <div class="row">
        <div class="col col-xs-3 text-left">
            <a href="#list" class="btn btn-default" aria-controls="list" role="tab" data-toggle="tab"><i class="fa fa-list-alt"></i>table</a>
            <a href="#thumb" class="btn btn-default" aria-controls="thumb" role="tab" data-toggle="tab"><i class="fa fa-picture-o" aria-hidden="true"></i>card</a>
        </div>
        <div class="col col-xs-5 text-center">
            <h1 class="panel-title">Members's List</h1>
        </div>
                  <div class="col col-xs-2 well text-center" style={{ padding: '1px' }}>    
            <span class="label label-danger">Filter:</span>
            <button id="ok"  class="btn btn-primary" data-class="btn btn-primary" onclick="filter('ok')"><i class="fa fa-user" aria-hidden="true"></i></button>
            <button id="ban" class="btn btn-warning" data-class="btn btn-warning" onclick="filter('ban')"><i class="fa fa-ban" aria-hidden="true"></i></button>
            <button id="new" class="btn btn-success" data-class="btn btn-success" onclick="filter('new')"><i class="fa fa-check-square" aria-hidden="true"></i></button> 
        </div>
        <div class="col col-xs-2 text-right ">
          <button type="button" class="btn  btn-success "> ADD NEW<i class="fa fa-plus-square" ></i></button>
        </div>
        </div>
    </div>
   <div class="panel-body">
     <div class="tab-content">
      <div role="tabpanel" class="tab-pane active" id="list">
       <table class="table table-striped table-bordered table-list">
        <thead>
         <tr>
            <th class="avatar">photo</th>
            <th>name</th>
            <th>country</th>
            <th>email</th>
            <th><em class="fa fa-cog"></em></th>
          </tr> 
         </thead>
         <tbody>
          <tr class="ok">
             <td class="avatar"><img src="https://pbs.twimg.com/profile_images/746779035720683521/AyHWtpGY_400x400.jpg"/></td>
             <td>Djelal Eddine </td>
             <td>Algeria </td>
             <td>djelaleddine@gmail.com </td>
             <td align="center">
               <a href="#" class="btn btn-primary" title="Edit"  ><i class="fa fa-pencil"></i></a>
               <a href="#" class="btn btn-warning" title="ban"   ><i class="fa fa-ban"   ></i></a>
               <a href="#" class="btn btn-danger"  title="delete"><i class="fa fa-trash" ></i></a>
             </td>
          </tr>
          <tr class="ban">
             <td class="avatar"><img src="https://pbs.twimg.com/profile_images/3511252200/f97a40336742d17609e0b0ca17e301b8_400x400.jpeg"/></td>
             <td>Moh Aymen </td>
             <td>Algeria </td>
             <td>email@gmail.com </td>
             <td align="center">
               <a href="#" class="btn btn-primary" title="Edit"    ><i class="fa fa-pencil">    	</i></a>
               <a href="#" class="btn btn-warning" title="ban"	 ><i class="fa fa-ban"   >admitted</i></a>
               <a href="#" class="btn btn-danger"  title="delete"  ><i class="fa fa-trash" >		</i></a>
             </td>
          </tr>
          <tr class="new">
             <td class="avatar"><img src="https://pbs.twimg.com/profile_images/3023221270/fcb34337f850c1037af9840ebe510d36_400x400.jpeg"/></td>
             <td>Dia ElHak  </td>
             <td>Tunisia </td>
             <td>email@gmail.com </td>
             <td align="center">
               <a href="#" class="btn btn-primary" title="Edit"    ><i class="fa fa-pencil"	  >		</i></a>
        	   <a href="#" class="btn btn-success" title="validate"><i class="fa fa-check-square">validate</i></a>
               <a href="#" class="btn btn-warning" title="ban"	 ><i class="fa fa-ban"		 >		</i></a>
               <a href="#" class="btn btn-danger"  title="delete"  ><i class="fa fa-trash"	   >		</i></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
        
      <div role="tabpanel" class="tab-pane " id="thumb">
        <div class="row">
        <div class="col-md-12">
        
        <div class="ok">
         <div class="col-md-3">
         <div class="panel panel-default panel-thumb">
  			<div class="panel-heading">
    			<h3 class="panel-title">Djelal Eddine</h3>
  			</div>
  			<div class="panel-body avatar-card">
   			 <img src="https://pbs.twimg.com/profile_images/746779035720683521/AyHWtpGY_400x400.jpg"/>
 			</div>
            <div class="panel-footer">
               <a href="#" class="btn btn-primary" title="Edit"    ><i class="fa fa-pencil"></i></a>
               <a href="#" class="btn btn-warning" title="ban"	 ><i class="fa fa-ban"   ></i></a>
               <a href="#" class="btn btn-danger"  title="delete"  ><i class="fa fa-trash" ></i></a>
            </div>
         </div>
		 </div>
       </div>
      	
        <div class="ban">
         <div class="col-md-3">
         <div class="panel panel-default panel-thumb">
  			<div class="panel-heading">
    			<h3 class="panel-title">Moh Aymen</h3>
  			</div>
  			<div class="panel-body avatar-card">
   			 <img src="https://pbs.twimg.com/profile_images/3511252200/f97a40336742d17609e0b0ca17e301b8_400x400.jpeg"/>
 			</div>
            <div class="panel-footer">
               <a href="#" class="btn btn-primary" title="Edit"    ><i class="fa fa-pencil">		</i></a>
               <a href="#" class="btn btn-warning" title="ban"	 ><i class="fa fa-ban"   >admitted</i></a>
               <a href="#" class="btn btn-danger"  title="delete"  ><i class="fa fa-trash" >		</i></a>
            </div>
         </div>
		 </div>
       </div>
        
        <div class="new">
         <div class="col-md-3">
         <div class="panel panel-default panel-thumb">
  			<div class="panel-heading">
    			<h3 class="panel-title">Dia ElHak</h3>
  			</div>
  			<div class="panel-body avatar-card">
   			 <img src="https://pbs.twimg.com/profile_images/3023221270/fcb34337f850c1037af9840ebe510d36_400x400.jpeg"/>
 			</div>
            <div class="panel-footer">
               <a href="#" class="btn btn-primary" title="Edit"    ><i class="fa fa-pencil"	  >		</i></a>
        	   <a href="#" class="btn btn-success" title="validate"><i class="fa fa-check-square">validate</i></a>
               <a href="#" class="btn btn-warning" title="ban"	 ><i class="fa fa-ban"		 >		</i></a>
               <a href="#" class="btn btn-danger"  title="delete"  ><i class="fa fa-trash"	   >		</i></a>
            </div>
         </div>
		 </div>
       </div>
       
       </div>
      </div>
      </div>
       
     </div> 
    </div>
   
   <div class="panel-footer text-center">
   		<ul class="pagination">
	 	  <li ><a>«</a></li>
		   <li class="active"><a href="#">1</a></li>
           <li ><a href="#">2</a></li>
           <li ><a href="#">3</a></li>
		   <li ><a>»</a></li>
         </ul>
   </div>
  </div>
</div>
</div>
									</div>
									</div>
</div>
</div>
        </div>
      </div>
    </div>
		
</section>
  )
}

export default Order
