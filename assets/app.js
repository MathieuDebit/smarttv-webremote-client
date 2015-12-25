keys.map(function(key){
  var container = document.getElementById('container');
  var button = document.createElement('button');
  button.value = key;
  button.innerHTML = key;
  button.setAttribute('data-key', key);
  button.setAttribute('onclick', 'send(\''+ key +'\')');
  container.appendChild(button);
});

var socket = io.connect('http://localhost:8080');

socket.on('welcome', function(message){
  console.log(message);
});

var ipSubmit = document.getElementById('ipSubmit');
var ip = document.getElementById('ip');

ipSubmit.addEventListener('click',function(){
  socket.emit('ip', ip.value);
});

socket.on('ip', function(message){
  console.log(message);
});
