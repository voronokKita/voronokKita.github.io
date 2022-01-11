var weekdays = ['Sundas', 'Morndas', 'Tirdas', 'Middas', 'Turdas', 'Fredas', 'Loredas']
var months = ['Morning Star', 'Sun’s Dawn', 'First Seed', 'Rain’s Hand',
              'Second Seed', 'Mid Year', 'Sun’s Height', 'Last Seed', 'Hearthfire',
              'Frostfall', 'Sun’s Dusk', 'Evening Star']

function tesTime () {
    let t = new Date();

    let weekday = weekdays[t.getDay()];
    let day = t.getDate();
    let month = months[t.getMonth()];

    t = `${weekday}, ${day} day of ${month}`
    document.getElementById('tes_time').innerHTML = t;
}
window.onload = tesTime;
