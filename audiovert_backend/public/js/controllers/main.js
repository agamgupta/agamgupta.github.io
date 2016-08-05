angular.module('employerController',[])
	.controller('mainController', function($scope, $http, Empfunct){
		$scope.formdata = {};

		// GET =====================================================================
        // when landing on the page, get all employers and show them
        // use the service to get all the todos
		Empfunct.getall()
			.success(function(data){
				$scope.employers = data;
				//console.log('These are the current employers')
			});
		
		$scope.allEmployers = function(){
			Empfunct.getall()
				.success(function(data){
					$scope.employerList = data;
					console.log('Employer list has been filled')
				})
				.error(function(data){
					console.log('Error: ' + data);
				})
		}
		// employerName is a variable within scope/model. We can use it to specify the employerName searched for (using ng-model)
		// or use the click on a employer box as a way of specifying values for the employerName variable.

		$scope.specifiedEmployer = function(name){
			$scope.employerName = name;
			Empfunct.get($scope.employerName)
				.success(function(data){
					$scope.employer = data; 
				})
				.error(function(data){
					console.log('Error: ' + data);
				})
		}

		// not needed for the purpose of employee accessible features
		$scope.updateEmployer = function(){
			if(!$.isEmptyObject($scope.formdata)){
				Empfunct.updateEmployer($scope.formdata)
					.success(function(data){
						$scope.formdata = {};
						$scope.employerList = data;
					})
					.error(function(data){
						console.log('Error: '+ data);
					})
			}			
		}

		$scope.createNewEmployer = function(){
			if(!$.isEmptyObject($scope.formdata)){
				Empfunct.createEmployer($scope.formdata)
					.success(function(data){
						$scope.formdata = {};
						$scope.employerList = data;
					})
					.error(function(data){
						console.log('Error: '+ data);
					});
			};
		};
	});