
  // Making girl element droppable
  const donkey = document.getElementById('kickass');
  const girl = document.getElementById('kick');
  
  // Adding event listeners to the girl
  girl.addEventListener('dragstart', dragStart);
  
  // Adding event listeners to the girl
  donkey.addEventListener('dragover', dragOver);
  donkey.addEventListener('drop', drop);
  
  // Function to handle the start of the dragging the girl
  function dragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
  }
  
  // Function to handle the girl dragover event
  function dragOver(event) {
    // Adding prevention of the default browser action (just for my personal reference)
    event.preventDefault();
  }
  
  // Adding function to handle the drop event
  function drop(event) {
    // Adding prevention of the default browser action (just for my personal reference)
    event.preventDefault();
  
    // Fetching the girl ID from the data transfer
    const id = event.dataTransfer.getData('text');
  
    // Get the girl
    const element = document.getElementById(id);
  
    // Appending the girl to the drop target
    event.target.appendChild(element);
    window.open("customs.html", "_self");
  
  }
  