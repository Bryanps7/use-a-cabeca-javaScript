let seats = [
  [false, true, false, true, true, true, false, true, false],
  [false, true, false, false, true, false, true, true, true],
  [true, true, true, true, true, true, false, true, false],
  [true, true, true, false, true, false, false, true, false]
]

let selSeat = -1

window.onload = function() {
  document.getElementById('findSeats').onclick = buscaPoltronas

  for(let i = 0; i <= 35; i++) {
    document.getElementById(`seat${i}`).onclick = function(evt) {
      showSeatStatus(i)
    }
  }

  initSeats()
}

function initSeats() {
  for (let i = 0; i < seats.length; i++) {
    for (let j = 0; j < seats[i].length; j++) {
      if (seats[i][j]) {
        setSeat(i * seats[i].length + j, 'avail', 'Poltrona Disponível')
      }
      else {
        setSeat(i * seats[i].length + j, 'unavail', 'Poltrona Indisponível')
      }
    }
  }
}

function setSeat(seatNum, status, description) {
  document.getElementById('seat' + seatNum).src = `/assets/img/seat_${status}.png`
  document.getElementById('seat' + seatNum).alt = description
}

function buscaPoltronas() {
  if (selSeat >= 0) {
    selSeat = -1;
    initSeats();
  }

  let i = 0, finished = false;
  while (i < seats.length && !finished) {
    for (let j = 0; j < seats[i].length; j++) {
      if (seats[i][j] && seats[i][j + 1] && seats[i][j + 2]) {
        selSeat = i * seats[i].length + j;

        setSeat(i * seats[i].length + j, 'select', 'Sua poltrona')
        setSeat(i * seats[i].length + j + 1, 'select', 'Sua poltrona')
        setSeat(i * seats[i].length + j + 2, 'select', 'Sua poltrona')

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
          setSeat(i * seats[i].length + j, 'avail', 'Poltrona Disponível')
          setSeat(i * seats[i].length + j + 1, 'avail', 'Poltrona Disponível')
          setSeat(i * seats[i].length + j + 2, 'avail', 'Poltrona Disponível')
        }
      }
    }

    // Increment the outer loop counter
    i++;
  }
}

function getSeatStatus(seatNum) {
  if(selSeat!= -1 && (seatNum == selSeat || seatNum == (selSeat + 1) || seatNum == (selSeat + 2))) {
    return 'em sua posse'
  } else if(seats[Math.floor(seatNum / seats[0].length)][seatNum%seats[0].length]) {
    return 'Disponível'
  } else {
    return 'Indisponível'
  }
}

function showSeatStatus(seatNum) {
  alert(`Essa poltrona está ${getSeatStatus(seatNum)}.`)
}

