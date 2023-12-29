function attachEventsListeners() {

    let days_ref = document.getElementById('days')
    let hours_ref = document.getElementById('hours')
    let minutes_ref = document.getElementById('minutes')
    let seconds_ref = document.getElementById('seconds')
    
    let days_button_ref = document.getElementById('daysBtn')
    let hours_button_ref = document.getElementById('hoursBtn')
    let minutes_button_ref = document.getElementById('minutesBtn')
    let seconds_button_ref = document.getElementById('secondsBtn')
    
    days_button_ref.addEventListener('click', daysconvert)
    hours_button_ref.addEventListener('click', hoursconvert)
    minutes_button_ref.addEventListener('click', minutesconvert)
    seconds_button_ref.addEventListener('click', secondsconvert)
    
    
    function daysconvert(){
      hours_ref.value = days_ref.value *24
	  minutes_ref.value = hours_ref.value * 60
	  seconds_ref.value = minutes_ref.value *60
	}
	
	function hoursconvert(){
      days_ref.value = Number(hours_ref.value / 24).toFixed(1)
	  minutes_ref.value = hours_ref.value * 60
	  seconds_ref.value = minutes_ref.value *60
	}
	
	function minutesconvert(){
	  hours_ref.value = Number(minutes_ref.value / 60).toFixed(1)
      days_ref.value = Number(hours_ref.value / 24).toFixed(1)
	  seconds_ref.value = minutes_ref.value *60
	}
	
	function secondsconvert(){
	  minutes_ref.value = Number(seconds_ref.value / 60).toFixed(1)
	  hours_ref.value = Number(minutes_ref.value / 60).toFixed(1)
      days_ref.value = Number(hours_ref.value / 24).toFixed(1)
	}
}