console.log('--------------------');
for (var year = 2014; year <= 2050; year++) {
    for ( var day = 0; day <=6; day++) {
    var d = new Date(year, 3, day); 
    var date = d.getDate(19);
    if ( d.getDate() == 19 )
        console.log(day);
    } 
}
console.log('--------------------'); 