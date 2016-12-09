var student = {
	firstname: 'Leslie',
	lastname: 'Xue',
	fee: 1000,
	subject:[
		{name: 'Physics', mark: 96},
		{name: 'Maths', mark: 85},
		{name: 'English', mark: 90},
		{name: 'Chemistry', mark: 88},
		{name: 'Biology', mark: 75},
		{name: 'History', mark: 70}],
	email: 'lesliexue@yahoo.com'
};

var myInfo = angular.module("myInfo", []);
myInfo.controller("myController", function($scope){
	$scope.firstname = student.firstname;
	$scope.lastname = student.lastname;
	$scope.subjectList = student.subject;
	$scope.validfirstname = student.firstname;
	$scope.validlastname = student.lastname;
	$scope.validEmail = student.email;
	$scope.fee = student.fee;
	$scope.count = 0;

	$scope.reset = function(){
		$scope.validfirstname = student.firstname;
		$scope.validlastname = student.lastname;
		$scope.validEmail = student.email;
	}

	$scope.call={state:['second','first','nothing','Never', 'Gonna', 'Give', 'You', 'Up']}
    $scope.whatClassIsIt= function(someValue){
        if(someValue=="first")
            return "ClassA"
        else if(someValue=="second")
            return "ClassB";
        else
            return "ClassC";
    }

    $scope.items = [{
      name: 'haley',
      title: 'hi'
    }, {
      name: 'Cookie',
      title: 'hello'
    }, {
      name: 'Lislino',
      title: 'cutty'
    }
	];

});