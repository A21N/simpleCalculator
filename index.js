const showData = document.getElementById('showData');

function addData(value) {
  showData.value += value;
}

function clearData() {
  showData.value = "";
}

function addResult() {
  
  try {
    const result = eval(showData.value);
    showData.value = result;

    if(result == '4') {
        showData.value = 'Hello world!';
    }
  } catch (e) {
    showData.value = 'Error';
  }
    
}

