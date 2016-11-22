<table class="table">	
			
			<tr ng-repeat="usuario in usuarios">
				<td>
					<table class="table table-bordered">
					<thead class="thead-default">
						<tr>
							<td>{{usuario.grupo}}</td>
							<!--<td>Aplicaciones</td>-->
							<td ng-repeat="apps in usuario.aplicaciones">
								<span uib-tooltip={{apps.descripcion}} class={{apps.icon}}>{{apps.name}}</span>
							</td>
						</tr>
					</thead>
					<tbody>
						<tr ng-repeat="usuario in usuario.usuarios">
							<td>{{usuario.name}}</td>
						</tr>
					</tbody>	
					</table>
				</td>

			</tr>
		</table>