$http({
              method: 'GET',
              url: config.url_service + '/getData',
              params: { collection: "clientes", id: $scope.datos_cliente_contrato.idDb}
            })
            .then(function(result) {
              console.log(result.data[0].nombre_real);
              $scope.form.cliente = result.data[0].nombre_real;
            })
            .catch(function(err) {
              console.log(err);
            });

            <!-- INICIO Listado BDs -->

<!--Inicio Tabla con Bases de Datos-->
<!--
<section class="panel panel-default">

        <div class="panel-heading"><strong><span class="glyphicon glyphicon-th"></span> Bases de Datos Asociadas</strong></div>
       <div class="panel-body">
            <form name="form_constraints" class="form-validation" novalidate data-ng-submit="submitForm()">
          <div class="form-group">
            <div class="table-responsive">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Nombre Base Datos</th>
                            <th>Fecha de Importación</th>
                            <th>Cantidad de Registros</th>
                         </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>METLIFE-1</td>
                            <td>01-Sept-2016</td>
                            <td>4000</td>
                         </tr>
                        <tr>
                            <td>ACE-2</td>
                            <td>01-Oct-2016</td>
                            <td>2300</td>
                        </tr>
                        <tr>
                            <td>Readers-3</td>
                            <td>01-Sept-2016</td>
                            <td>8000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
        </div>
      </section> -->

<!-- FIN Tablas Listado BDs -->