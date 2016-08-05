angular.module('employerService', [])
	.factory('Empfunct', function($http){
		return {
			getall: function(){
				return $http.get('/employer/showall');
			},

			get: function(name){
				return $http.get('/employer/showall/'+ name);
			},

			update: function(employerInfo){
				return $http.post('/employer/update', employerInfo);
			},

			create: function(employerInfo){
				return $http.post('/employer/new', employerInfo);
			}
		}
	});