(function(){

var app = angular.module('universidadApp',[ ]);

app.controller('listadoCtrl', ['$scope', function($scope){
	
		$scope.listado = ["Fernado Herrera" , "Melisa Flores" , "Juan Carlos Pineda" , "Maria Perez"];

		$scope.listadoProfesores ={
			profesores:[{
				nombre:"Fernado Herrera",
				edad:29,
				clase:"PEE"
			},{
				nombre:"Melisa Flores",
				edad:22,
				clase:"ICE"
			},{
				nombre:"Juan Carlos Pineda",
				edad:42,
				clase:"MA10"
			}]
		};

}]);





})();
