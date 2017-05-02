app.controller('booking_controller', function($scope, $location, BookingFactory){

	//Creating toggle for form
	$scope.show = 0;

	function setBookings(data){
		$scope.confirms = data;
		$scope.newBooking = {};
	}
	
	$scope.bookings = [];

	//fetch the bookings when controller loaded
	BookingFactory.index(setBookings);
	
	//Pass new booking info to factry	
	$scope.book = function(newBooking){
		BookingFactory.book(newBooking)
		newBooking = {}; //reset form
		$location.url('/submit')
	}
})