<table class="table table-bordered">
						<thead class="thead-default">
							<th>
								Usuario
							</th>
							<th>
								Grupo
							</th>
							<th>
								Aplicaciones
							</th>
							<!--<td>Aplicaciones</td>-->	
						</thead>
					<tbody ng-repeat="usuario in usuarios">
							
						<tr ng-repeat="usuario in usuario.usuarios">
							<td>{{usuario.name}}</td>
							<td>{{usuario.grupo}}</td>
						</tr>
						
						<tr ng-repeat="usuario in usuarios">>
							<td ng-repeat="apps in usuario.aplicaciones">
								<span uib-tooltip={{apps.descripcion}} class={{apps.icon}}>{{apps.name}}</span>
							</td>
						</tr>
						
					</tbody>	
					</table>


					{
    "_id": "getNewNumber",
    "value": Code("function (doc){ return db.counter.findAndModify( { query:{_id: doc}, update: {$inc:{seq:1}}, new:true }) }")
}

<div class="page" data-ng-controller="gruposCtrl">

    <section class="panel panel-default">
        <div class="panel-heading"><strong><span class="glyphicon glyphicon-th"></span>Usuarios Y Grupos</strong></div>
        <div class="panel-body">
        <div class="pull-right">
        <button class="btn btn-w-md btn-gap-v btn-round btn-default" ng-click="replicarAd()"><span class="ti-reload"> </span>Refrescar Tabla</button>
        </div>
        <div class="container col-md-12">	
			
			<div class="row">
				<table class="table table-bordered">
					<thead class="thead-default">
						<th>
							Usuario
						</th>
						<th>
							Grupo
						</th>
						<th>
							Aplicaciones
						</th>
					</thead>
					
					<tbody ng-repeat="usuario in usuarios">
						<tr ng-repeat="usuario in usuario.usuarios">
							<td>{{usuario.name}}</td>
							<td>{{usuario.grupo}}</td>
							<td>
							<span ng-repeat="apps in usuario.appDisp" class="label label-primary {{apps.icon}}"
							uib-tooltip={{apps.descripcion}}>{{apps.name}}</span>
							<span></span>
							</td>
						</tr>
					</tbody>	
				</table>
			</div>
        </div>
    </section>

</div>




