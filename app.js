var count = 2;
var countMax = 5;

function adddt() {
  if(count > countMax)
    return;
  document.getElementById('dt-' + count + '').style.display = 'block';
  count++;
}