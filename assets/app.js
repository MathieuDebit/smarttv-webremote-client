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

var nameSubmit = document.getElementById('nameSubmit');
var remoteName = document.getElementById('remoteName');

nameSubmit.addEventListener('click',function(){
  socket.emit('name', remoteName.value);
});

socket.on('name', function(message){
  console.log(message);
});

var send = function(key){
  socket.emit('key', key);
  console.log('key pressed : ' + key);
};

socket.on('key', function(msg){
  console.log(msg);
});
