(function(){

  var exports = {};

  exports.getDateDisplay = function(startString, endString, timezone){
    var startDate = moment.tz(startString, moment.ISO_8601, true, timezone);
    var endDate = moment.tz(endString, moment.ISO_8601, true, timezone);
    var tzExists = moment.tz.zone(timezone) !== null;

    if (!startDate.isValid()) return '';

    var utcOffset = startDate.utcOffset();
    var final = startDate.format('lll');

    // .utc() and .local() are toggles, so once they are called
    // they change the mode of the object.

    var localFinal = '(' + startDate.utc().local().format('h:mm A');
    var localUtcOffset = startDate.utcOffset();
    var localTimeDiff = localUtcOffset - utcOffset;

    if (endDate.isValid()){
      final += ' - ' + endDate.format('h:mm A');
      localFinal += ' - ' + endDate.utc().local().format('h:mm A');
    }

    final += ' ' + timezone;
    localFinal += ' your local time)';

    if (tzExists && localTimeDiff !== 0){
      final += ' ' + localFinal;
    }

    return final;
  };

  window.eulerroom = exports;

})();
