keys.map(function(key){
  var container = document.getElementById('container');
  var button = document.createElement('button');
  button.value = key;
  button.innerHTML = key;
  button.setAttribute('data-key', key);
  button.setAttribute('onclick', 'send(\''+ key +'\')');
  container.appendChild(button);
});
