function getRoutes(){
    $('.itineraryContainer').each(getFlightDetails);
}

function getFlightDetails(number, flight){
    let flightNumber = $(flight).find('.iropHeader').find("a[id^='flightNo']").first().text().trim()
    let flightFlags = $(flight).find('.itineraryFlags');
    let origCode = flightFlags.attr('data-origcode');
    let destCode = flightFlags.attr('data-destcode');
    let depDate = flightFlags.attr('data-depdate');
    let arrDate = flightFlags.attr('data-arrdate');
    let depTime = flightFlags.attr('data-scheddeptime');
    let arrTime = flightFlags.attr('data-schedarrtime');
    let showNewDay = depDate == arrDate ? '' : ' (' + arrDate + ')'
    let output = depDate + ' -- ' + origCode + ' to ' + destCode + " -- " + flightNumber + '\n' + 'Depart @ ' + depTime + '   Arrive @ ' + arrTime + showNewDay + '\n';
    itinerary += output + '\n';
}

var itinerary = ''
getRoutes()
console.log(itinerary)
