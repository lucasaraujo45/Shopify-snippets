Input.shipping_rates.each do |shipping_rate|
  next unless shipping_rate.name == "UPS Ground"
  shipping_rate.change_name("Standard Shipping", message: "Change name from Ground to Standard Shipping")
end

Input.shipping_rates.each do |shipping_rate|
  next unless shipping_rate.name == "UPS Three-Day Select"
  shipping_rate.change_name("3 Day", message: "Change name from Ground to Standard Shipping")
end

Input.shipping_rates.each do |shipping_rate|
  next unless shipping_rate.name == "UPS Second Day Air"
  shipping_rate.change_name("2 Day", message: "Change name from Ground to Standard Shipping")
end

Input.shipping_rates.each do |shipping_rate|
  next unless shipping_rate.name == "UPS Next Day Air"
  shipping_rate.change_name("Next Day", message: "Change name from Ground to Standard Shipping")
end

Output.shipping_rates = Input.shipping_rates
