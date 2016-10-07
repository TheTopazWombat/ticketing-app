angular.module('app')
  .service('mainSrv', mainSrv);

  function mainSrv ($http) {
    this.customersArchive = [];
    this.customerArr = [];
    this.archivedJobs = [];
    this.activeJobs = [];
    if (localStorage.getItem('customers')) {
      this.customerArr = JSON.parse(localStorage.getItem('customers'));
    }
    this.loadCm = function(){
      this.customerArr = JSON.parse(localStorage.getItem('customers'));
    };
    // console.log(this.customerArr);
    this.saveCm = function() {
      localStorage.setItem('customers', JSON.stringify(this.customerArr));
    };

    if (localStorage.getItem('oldcustomers')) {
      this.customersArchive = JSON.parse(localStorage.getItem('oldcustomers'));
    }
    console.log(this.customersArchive);
    this.archiveCm = function() {
      localStorage.setItem('oldcustomers', JSON.stringify(this.customersArchive));
    };
    // this.getCustomers = function() {
    //   return $http({
    //     method: 'GET',
    //     url: "js/customers.json",
    //   }).then(function(response) {
    //     customerArr = response.data.customers;
    //     return customerArr;
    //   });
    // };
    this.postNewJob = function(job) {
      return $http({
        method: 'POST',
        url: '/api/jobs/new',
        data: job,
      }).then(function(response) {
        return response.data;
      });
    };

    this.getAllJobs = function() {
      return $http({
        method: 'GET',
        url: '/api/jobs/all'
      }).then(function(response) {
        console.log(response);
        return response.data;
      });
    };

    this.updateJob = function(job) {
      return $http({
        method: 'PUT',
        url: '/api/jobs/update',
        data: job
      }).then(function(response) {
        return response.data;
      });
    };

  }
