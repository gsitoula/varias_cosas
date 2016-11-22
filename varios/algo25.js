<div class="panel panel-body">
			<div class="row">

			<div class="col-md-12">
				<div clas="col-md-4">	
					<button class="btn btn-primary btn-round" ng-click="nuevoCampo()">Agregar nuevo campo</button>
					<button class="btn btn-primary btn-round" ng-click="mostrarCampo()">Mostrar campos</button>
				</div>
			<div ng-repeat="campo in campos">
					<div class="md-col-2">
					<input class="form-control" type="text" placeholder={{campo.campoPlaceholder}} ng-model="campo.registro"/>
					</div>
					<div class="md-col-2">
					<input class="form-control" type="checkbox" name="check" ng-model="campo.obligatorio"/> Obligatorio
					</div>
			</div>
			
			</div>
				<ng-csv-import content="csv.content"
    				header="csv.header"
    				separator="csv.separator"
    				result="csv.result"
    				accept="csv.accept">	
    			</ng-csv-import>
			
			</div>
		</div>