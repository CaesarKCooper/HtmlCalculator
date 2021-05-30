
document.getElementById("Calculatebutton").addEventListener("click", () => {

    var ProductPrice = document.getElementById("PriceInput").value;
    var DiscountAmount = document.getElementById("DiscountAmountInput").value / 100;
    var ProductPriceAfterDiscount = ProductPrice * DiscountAmount;
    var Answer = ProductPrice - ProductPriceAfterDiscount;
    document.getElementById("Answer").innerHTML = "$" + Answer;
  });
