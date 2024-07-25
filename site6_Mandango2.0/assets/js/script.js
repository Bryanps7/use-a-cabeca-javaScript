let seats = [[ false, true, false, true, true, true, false, true, false ],
             [ false, true, false, false, true, false, true, true, true ],
             [ true, true, true, true, true, true, false, true, false ],
             [ true, true, true, false, true, false, false, true, false ]]
let selSeat = -1

function initSeats() {
  for (let i = 0; i < seats.length; i++) {
    for (let j = 0; j < seats[i].length; j++) {
      if (seats[i][j]) {
        document.getElementById("seat" + (i * seats[i].length + j)).src = "/assets/img/seat_avail.png";
        document.getElementById("seat" + (i * seats[i].length + j)).alt = "Poltrona Avaliada";
      }
      else {
        document.getElementById("seat" + (i * seats[i].length + j)).src = "/assets/img/seat_unavail.png";
        document.getElementById("seat" + (i * seats[i].length + j)).alt = "Poltrona não Avaliada";
      }
    }
  }
}

function(seatNum, status, description){
  
}

function buscaPoltronas(){
    if (selSeat >= 0) {
        selSeat = -1;
        initSeats();
      }

      let i = 0, finished = false;
      while (i < seats.length && !finished) {
        for (let j = 0; j < seats[i].length; j++) {
          if (seats[i][j] && seats[i][j + 1] && seats[i][j + 2]) {
            selSeat = i * seats[i].length + j;
            document.getElementById("seat" + (i * seats[i].length + j)).src = "/assets/img/seat_select.png";
            document.getElementById("seat" + (i * seats[i].length + j)).alt = "Selecionado";
            document.getElementById("seat" + (i * seats[i].length + j + 1)).src = "/assets/img/seat_select.png";
            document.getElementById("seat" + (i * seats[i].length + j + 1)).alt = "Selecionado";
            document.getElementById("seat" + (i * seats[i].length + j + 2)).src = "/assets/img/seat_select.png";
            document.getElementById("seat" + (i * seats[i].length + j + 2)).alt = "Selecionado";

            let accept = confirm("Poltronas " + (j + 1) + " até " + (j + 3) +
              " da fileira " + (i + 1) + " Dispóniveis. Aceita?");
            if (accept) {
              // The user accepted the seats, so we're done (break out of the inner loop)
              finished = true;
              break;
            }
            else {
              // The user rejected the seats, so clear the seat selection and keep looking
              selSeat = -1;
              document.getElementById("seat" + (i * seats[i].length + j)).src = "/assets/img/seat_avail.png";
              document.getElementById("seat" + (i * seats[i].length + j)).alt = "Available seat";
              document.getElementById("seat" + (i * seats[i].length + j + 1)).src = "/assets/img/seat_avail.png";
              document.getElementById("seat" + (i * seats[i].length + j + 1)).alt = "Available seat";
              document.getElementById("seat" + (i * seats[i].length + j + 2)).src = "/assets/img/seat_avail.png";
              document.getElementById("seat" + (i * seats[i].length + j + 2)).alt = "Available seat";
            }
          }
        }

        // Increment the outer loop counter
        i++;
      }
}