const angular = require('angular');
var baseUrl = require('../../config').baseUrl;

module.exports = function(app) {
  app.controller('TrailsController', ['fwhResource', function(Resource) {
    this.trails = [];
    this.errors = [];
    this.selectedForecast = '';
    var remote = new Resource(this.trails, this.errors, baseUrl + '/api/trails', {
      errMsgs: {
        getAll: 'Trails Error.'
      }
    });
    this.getAll = remote.getAll.bind(remote);

    this.getAll();
    this.updateSelectedForecast = function(elem) {
      this.selectedForecast = elem;
      document.getElementById('todayTemp').innerHTML = 'At ' + this.selectedForecast.trailName + ': Today\'s High: ' + this.selectedForecast.weather[0].temperatureMax + 'F Chance of Rain: ' + this.selectedForecast.weather[0].precipProbability * 100 + '%';
    };

    this.getWeather = function() {
      remote.getAll().then((data) => {
        setTimeout(
        remote.addWeather(data)
      ), 5000;
      });
    };

  }]);
};
