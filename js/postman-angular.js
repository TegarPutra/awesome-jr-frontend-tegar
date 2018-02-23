angular.module('postman-tegar',[])
//controller for contrib table
.controller('contribution', ['$scope', function($scope){
	var html="<div class='m-2'>";
	var random=0;
	html+="<div class='row'>";
	html+="<div class='col-md-1'><div class='mt-4'>Mon</div><div class='my-2'>Wed</div><div class='my-2'>Fri</div></div>";
	html+="<div class='col-md-11'><div class='row justify-content-between'><div class='col-md-1'>Mar</div><div class='col-md-1'>Apr</div><div class='col-md-1'>May</div><div class='col-md-1'>Jun</div><div class='col-md-1'>Jul</div><div class='col-md-1'>Aug</div><div class='col-md-1'>Sep</div><div class='col-md-1'>Oct</div><div class='col-md-1'>Nov</div><div class='col-md-1'>Dec</div><div class='col-md-1'>Jan</div><div class='col-md-1'>Feb</div></div>";
	for(var j=0; j<7;j++){
		html+="<div class='row mb-1 justify-content-between'>";
		for(var i=0; i<48;i++) {
			random=Math.floor((Math.random() * 5) + 1);
			random_contrib=Math.floor((Math.random() * 50) + 1)+50*(random-1);
			html+="<div class='mr-1 cell-fill-"+random+"' style='min-width:10px;min-height:10px;' data-toggle='tooltip' data-placement='top' title='"+random_contrib+" contribution'></div>";
		}
		html+="</div>"
	}
	html+="</div></div></div>"
	$scope.myhtml=html;
}])
.directive('contribTable', function(){
	return function(scope, element) {
		element.html(scope.myhtml);
		
		$(function () {
			$('[data-toggle="tooltip"]').tooltip();
		})
	};
})