function placeDonuts(donutString) {
  let numDonuts = parseInt(donutString);
  if (donutString.indexOf("dozen") != -1) {
    numDonuts *= 12;
  }
  return numDonuts;
}

function updateOrder() {
    // Using var instead of const for TAXRATE and DONUTPRICE to satisfy Internet Explorer
    const TAXRATE = 0.0925;
    const DONUTPRICE = 0.5;
    let numCakeDonuts = placeDonuts(document.getElementById('cakedonuts').value);
    let numGlazedDonuts = placeDonuts(document.getElementById('glazeddonuts').value);
    if (isNaN(numCakeDonuts)) {
      numCakeDonuts = 0;
    }if (isNaN(numGlazedDonuts)) {
      numGlazedDonuts = 0;
    }
    let subTotal = (numCakeDonuts + numGlazedDonuts) * DONUTPRICE;
    let tax = subTotal * TAXRATE;
    let total = subTotal + tax;
    document.getElementById("subtotal").value = "$" + subTotal.toFixed(2);
    document.getElementById("tax").value = "$" + tax.toFixed(2);
    document.getElementById("total").value = "$" + total.toFixed(2);
  }

  function placeOrder(form) {
    if (document.getElementById('name').value == "") {
      alert("Você precisa fornecer um nome antes de enviar o pedido.");
    }else if (document.getElementById('pickupminutes').value == isNaN(document.getElementById('pickupminutes').value)) {
      alert("Você deve fornecer o número de minutos até a coleta antes de enviar o pedido.")
    }else {
      // Envia o pedido para o servidor
      form.submit();

    }
  }