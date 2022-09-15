(function ($) {
function modelF(
    index = 0,
    label = "",
    offer = "",
    sale_offer = ""
  ) {
    const model = `
      <div class="cod_product_offer">
      <input type="text" required name="cso_product_offers[${index}][label]" value="${label}" placeholder="Label" id="">
      <input type="text" required name="cso_product_offers[${index}][offer]" value="${offer}" placeholder="Offer Price" id="">
      <input type="text" name="cso_product_offers[${index}][sale_offer]" value="${sale_offer}" placeholder="Offer Sale Price" id="">
      <div class="cso-free-shipping">
				<label for="">free shipping</label>
				<input type="checkbox" name="cso_product_offers[${index}][free_shipping]" >
			</div>
      <button class="button button-primary remove_offer_field" style="margin-left: 5px;">delete</button>
      </div>
      `;
  
    return model;
  }
  
  
  const offersContainer = $(".cod_product_offers");
  const addButton = $(".add_offer_field");
  
  // Add New Field
  addButton.on("click", function (e) {
    e.preventDefault();
    const offerContainer = $(".cod_product_offer");
    offersContainer.append(modelF(offerContainer.length));
  });
  
  // Remove Field
  $(document).on("click", ".remove_offer_field", function (e) {
    e.preventDefault();
    $(this).parent().remove();
  });
  

})(jQuery);