function sizes(disponibles, agotadas = []) {
  return disponibles.map(t => ({ t, stock: !agotadas.includes(t) }));
}

const products = [
  // ---- POLOS ----
  { id: "p01", cat: "Polos", name: "Polo Corona Doble", price: 39.90, old: null, badge: null, desc: "Producto peruano 100% algodón 20/01, peinado, reactivo y antipilling.", colors: [{ name: "Negro", hex: "#1A1A1A", images: ["assets/products/polos/corona_negro_atr.webp", "assets/products/polos/corona_negro_del.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Blanco", hex: "#F2F2ED", images: ["assets/products/polos/corona_blanco_del.webp", "assets/products/polos/corona_blanco_atr.webp"], sizes: sizes(["S", "M", "L"]) }] },
  { id: "p02", cat: "Polos", name: "Polo Goat", price: 29.90, old: null, badge: null, desc: "Producto peruano 100% algodón 20/01, peinado, reactivo y antipilling.", colors: [{ name: "Beige", hex: "#D8C7A1", images: ["assets/products/polos/goat_beige.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Vino", hex: "#6B1E2A", images: ["assets/products/polos/goat_rojo.webp"], sizes: sizes(["S"]) }, { name: "Negro", hex: "#1A1A1A", images: ["assets/products/polos/goat_negro.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Plomo", hex: "#6E6E6E", images: ["assets/products/polos/goat_gris.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Arena", hex: "#d3cab7b7", images: ["assets/products/polos/goat_crema.webp"], sizes: sizes(["M"]) }] },
  { id: "p03", cat: "Polos", name: "Polo Millionaires", price: 29.90, old: null, badge: null, desc: "Producto peruano 100% algodón 20/01, peinado, reactivo y antipilling.", colors: [{ name: "Negro", hex: "#1A1A1A", images: ["assets/products/polos/milionaires_negro.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Verde", hex: "#2F6B3A", images: ["assets/products/polos/milionaires_verde.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Crema", hex: "#E8DCC0", images: ["assets/products/polos/milionaires_blanco.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Plomo", hex: "#6E6E6E", images: ["assets/products/polos/milionaires_gris.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Marrón", hex: "#5B3A29", images: ["assets/products/polos/millionaires_marron.webp"], sizes: sizes(["S", "M", "L"]) }] },
  { id: "p04", cat: "Polos", name: "Polo Híbrido", price: 39.90, old: null, badge: "new", desc: "Producto peruano 100% algodón 20/01, peinado, reactivo y antipilling. Corte híbrido.", colors: [{ name: "Negro", hex: "#1A1A1A", images: ["assets/products/polos/hibrido_negro.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Gris", hex: "#8A8A8A", images: ["assets/products/polos/hibrido_gris.webp"], sizes: sizes(["S", "M", "L"]) }] },
  { id: "p05", cat: "Polos", name: "Polo Jordan", price: 29.90, old: null, badge: null, desc: "Producto peruano 100% algodón 20/01, peinado, reactivo y antipilling.", colors: [{ name: "Verde", hex: "#2F6B3A", images: ["assets/products/polos/jordan_verde.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Beige", hex: "#D8C7A1", images: ["assets/products/polos/jordan_beige.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Gris", hex: "#8A8A8A", images: ["assets/products/polos/jordan_gris.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Blanco", hex: "#ffffff", images: ["assets/products/polos/jordan_blanco.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Negro", hex: "#1a1a1a", images: ["assets/products/polos/jordan_negro.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Marrón", hex: "#5B3A29", images: ["assets/products/polos/jordan_marron.webp"], sizes: sizes(["S", "M", "L"]) }] },
  { id: "p06", cat: "Polos", name: "Polo Jordan2", price: 29.90, old: null, badge: null, desc: "Producto peruano 100% algodón 20/01, peinado, reactivo y antipilling.", colors: [{ name: "Crema", hex: "#E8DCC0", images: ["assets/products/polos/jordan2_crema.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Blanco", hex: "#F2F2ED", images: ["assets/products/polos/jordan2_blanco.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Negro", hex: "#1A1A1A", images: ["assets/products/polos/jordan2_negro.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Beige", hex: "#D8C7A1", images: ["assets/products/polos/jordan2_beige.webp"], sizes: sizes(["S", "M", "L"]) }] },
  { id: "p07", cat: "Polos", name: "Polo Old Money", price: 29.90, old: null, badge: null, desc: "Producto peruano 100% algodón 20/01, peinado, reactivo y antipilling.", colors: [{ name: "Marrón", hex: "#5B3A29", images: ["assets/products/polos/oldmoney_marron.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Verde", hex: "#2F6B3A", images: ["assets/products/polos/oldmoney_verde.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Negro", hex: "#1A1A1A", images: ["assets/products/polos/oldmoney_negro.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Plomo", hex: "#6E6E6E", images: ["assets/products/polos/oldmoney_gris.webp"], sizes: sizes(["S", "M", "L"]) }] },
  { id: "p08", cat: "Polos", name: "Polo Holográfico JJ", price: 35.90, old: null, badge: null, desc: "Producto peruano 100% algodón 20/01, peinado, reactivo y antipilling.", colors: [{ name: "Negro c/Dorado", hex: "#1A1A1A", images: ["assets/products/polos/holo_negro_dorado.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Negro c/Plateado", hex: "#1A1A1A", images: ["assets/products/polos/holo_negro_plateado.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Gris c/Plateado", hex: "#8A8A8A", images: ["assets/products/polos/holo_gris.webp"], sizes: sizes(["S", "M", "L"]) }] },
  { id: "p09", cat: "Polos", name: "Polo Inevitable", price: 25.90, old: null, badge: null, desc: "Producto peruano 100% algodón 20/01, peinado, reactivo y antipilling.", colors: [{ name: "Blanco", hex: "#F2F2ED", images: ["assets/products/polos/inevitable_blanco.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Gris", hex: "#8A8A8A", images: ["assets/products/polos/inevitable_gris.webp"], sizes: sizes(["S", "M", "L"]) }] },
  { id: "p10", cat: "Polos", name: "Polo Francia", price: 39.90, old: null, badge: null, desc: "Producto peruano 100% algodón 20/01, peinado, reactivo y antipilling.", colors: [{ name: "Negro", hex: "#1A1A1A", images: ["assets/products/polos/francia_atr.webp", "assets/products/polos/francia_del.webp"], sizes: sizes(["S", "M", "L"]) }] },
  { id: "p11", cat: "Polos", name: "Polo Inglaterra", price: 39.90, old: null, badge: null, desc: "Producto peruano 100% algodón 20/01, peinado, reactivo y antipilling.", colors: [{ name: "Blanco", hex: "#F2F2ED", images: ["assets/products/polos/inglaterra_atr.webp", "assets/products/polos/inglaterra_del.webp"], sizes: sizes(["S", "M", "L"]) }] },
  { id: "p12", cat: "Polos", name: "Polo Noruega", price: 39.90, old: null, badge: null, desc: "Producto peruano 100% algodón 20/01, peinado, reactivo y antipilling.", colors: [{ name: "Vino", hex: "#6B1E2A", images: ["assets/products/polos/noruega_atr.webp", "assets/products/polos/noruega_del.webp"], sizes: sizes(["S", "M", "L"]) }] },
  { id: "p13", cat: "Polos", name: "Polo Portugal", price: 39.90, old: null, badge: null, desc: "Producto peruano 100% algodón 20/01, peinado, reactivo y antipilling.", colors: [{ name: "Verde", hex: "#2F6B3A", images: ["assets/products/polos/portugal_atr.webp", "assets/products/polos/portugal_del.webp"], sizes: sizes(["S", "M", "L"]) }] },
  { id: "p14", cat: "Polos", name: "Polo Inevitable Doble", price: 25.90, old: null, badge: null, desc: "Producto peruano 100% algodón 20/01, peinado, reactivo y antipilling.", colors: [{ name: "Blanco", hex: "#F2F2ED", images: ["assets/products/polos/inevitable2_blanco_atr.webp", "assets/products/polos/inevitable2_blanco_del.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Negro", hex: "#1A1A1A", images: ["assets/products/polos/inevitable2_negro_atr.webp", "assets/products/polos/inevitable2_negro_del.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Verde", hex: "#2F6B3A", images: ["assets/products/polos/inevitable2_verde_atr.webp", "assets/products/polos/inevitable2_verde_del.webp"], sizes: sizes(["S", "M", "L"]) }] },
  // ---- POLERAS ----
  { id: "p15", cat: "Poleras", name: "Polera JJB", price: 59.00, old: null, badge: "low", desc: "Producto peruano 100% franela reactiva.", colors: [{ name: "Verde", hex: "#2F6B3A", images: ["assets/products/poleras/jjb_verde.webp"], sizes: sizes(["M"]) }, { name: "Marrón", hex: "#5B3A29", images: ["assets/products/poleras/jjb_marron.webp"], sizes: sizes(["M"]) }, { name: "Crema", hex: "#E8DCC0", images: ["assets/products/poleras/jjb_crema.webp"], sizes: sizes(["S"]) }] },
  { id: "p16", cat: "Poleras", name: "Polera Jordan", price: 59.00, old: null, badge: "low", desc: "Producto peruano 100% franela reactiva.", colors: [{ name: "Negro", hex: "#1A1A1A", images: ["assets/products/poleras/jordan_negro.webp"], sizes: sizes(["L"]) }, { name: "Marrón", hex: "#5B3A29", images: ["assets/products/poleras/jordan_marron.webp"], sizes: sizes(["M"]) }] },
  { id: "p17", cat: "Poleras", name: "Polera JJB Jordan", price: 59.00, old: null, badge: "low", desc: "Producto peruano 100% franela reactiva.", colors: [{ name: "Verde", hex: "#2F6B3A", images: ["assets/products/poleras/jjb_jordan.webp"], sizes: sizes(["S", "L"]) }] },
  { id: "p18", cat: "Poleras", name: "Polera NY", price: 59.00, old: null, badge: "low", desc: "Producto importado.", colors: [{ name: "Azul", hex: "#2455A4", images: ["assets/products/poleras/polera_ny.webp"], sizes: sizes(["M"]) }] },
  { id: "p19", cat: "Poleras", name: "Polera Brooklyn", price: 49.00, old: null, badge: "low", desc: "Producto importado.", colors: [{ name: "Crema", hex: "#E8DCC0", images: ["assets/products/poleras/brooklyn.webp"], sizes: sizes(["M"]) }] },
  { id: "p20", cat: "Poleras", name: "Polera Milano", price: 49.00, old: null, badge: "low", desc: "Producto importado.", colors: [{ name: "Verde", hex: "#2F6B3A", images: ["assets/products/poleras/milano.webp"], sizes: sizes(["M"]) }] },
  { id: "p48", cat: "Poleras", name: "Crewneck Jordan", price: 50.00, old: null, badge: "new", desc: "Producto peruano 100% franela reactiva.", colors: [{ name: "Plomo", hex: "#6E6E6E", images: ["assets/products/poleras/crewneck_jordan_plomo.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Verde", hex: "#2F6B3A", images: ["assets/products/poleras/crewneck_jordan_verde.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Negro", hex: "#1A1A1A", images: ["assets/products/poleras/crewneck_jordan_negro.webp"], sizes: sizes(["S"]) }, { name: "Melange", hex: "#A8A8A2", images: ["assets/products/poleras/crewneck_jordan_melange.webp"], sizes: sizes(["S", "M", "L"]) }] },
  { id: "p49", cat: "Poleras", name: "Crewneck Jordan2", price: 50.00, old: null, badge: "new", desc: "Producto peruano 100% franela reactiva.", colors: [{ name: "Melange", hex: "#A8A8A2", images: ["assets/products/poleras/crewneck_jordan2_melange.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Plomo", hex: "#6E6E6E", images: ["assets/products/poleras/crewneck_jordan2_plomo.webp"], sizes: sizes(["S", "M", "L"]) }] },
  { id: "p52", cat: "Poleras", name: "Crewneck Arkad", price: 49.90, old: null, badge: "new", desc: "Hecho de franela.", colors: [{ name: "Estándar", hex: "#3A3A3A", images: ["assets/products/poleras/crewneck_arkad.webp"], sizes: sizes(["S", "M"]) }] },
  { id: "p53", cat: "Poleras", name: "Crewneck Snoopy", price: 49.90, old: null, badge: "new", desc: "Hecho de french terry.", colors: [{ name: "Beige", hex: "#D8C7A1", images: ["assets/products/poleras/crewneck_snoopy_beige.webp"], sizes: sizes(["M"]) }, { name: "Negro", hex: "#1A1A1A", images: ["assets/products/poleras/crewneck_snoopy_negro.webp"], sizes: sizes(["M"]) }] },
  { id: "p50", cat: "Poleras", name: "Polera Oldmoney", price: 59.00, old: null, badge: "new", desc: "Producto peruano 100% franela reactiva.", colors: [{ name: "Plomo", hex: "#6E6E6E", images: ["assets/products/poleras/polera_oldmoney_plomo.webp"], sizes: sizes(["S", "M", "L"]) }] },
  { id: "p51", cat: "Poleras", name: "Polera Goat", price: 59.00, old: null, badge: "new", desc: "Producto peruano 100% franela reactiva.", colors: [{ name: "Verde", hex: "#2F6B3A", images: ["assets/products/poleras/polera_goat_verde.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Plomo", hex: "#6E6E6E", images: ["assets/products/poleras/polera_goat_plomo.webp"], sizes: sizes(["S", "M", "L"]) }, { name: "Melange", hex: "#A8A8A2", images: ["assets/products/poleras/polera_goat_melange.webp"], sizes: sizes(["S", "M", "L"]) }] },
  { id: "p54", cat: "Poleras", name: "Oversize Derian", price: 69.90, old: null, badge: "new", desc: "Corte oversize. Hecho de franela.", colors: [{ name: "Hueso", hex: "#E8E1D0", images: ["assets/products/poleras/oversize_derian_hueso.webp"], sizes: sizes(["S"]) }, { name: "Plomo", hex: "#6E6E6E", images: ["assets/products/poleras/oversize_derian_plomo.webp"], sizes: sizes(["M"]) }] },
  { id: "p55", cat: "Poleras", name: "Polera Tazmania", price: 69.90, old: null, badge: "new", desc: "Hecho de franela, con estampado adelante y atrás. La foto muestra primero la espalda.", colors: [{ name: "Estándar", hex: "#3A3A3A", images: ["assets/products/poleras/polera_tazmania_atr.webp", "assets/products/poleras/polera_tazmania_del.webp"], sizes: sizes(["L"]) }] },
  { id: "p56", cat: "Poleras", name: "Polera Bugs Bunny", price: 69.90, old: null, badge: "new", desc: "Hecho de franela, con estampado adelante y atrás. La foto muestra primero la espalda.", colors: [{ name: "Estándar", hex: "#3A3A3A", images: ["assets/products/poleras/polera_bugsbunny_atr.webp", "assets/products/poleras/polera_bugsbunny_del.webp"], sizes: sizes(["L"]) }] },
  { id: "p57", cat: "Poleras", name: "Polera Oversize Essentials", price: 69.90, old: null, badge: "new", desc: "Corte oversize. Hecho de franela, con estampado adelante y atrás.", colors: [{ name: "Azul", hex: "#2455A4", images: ["assets/products/poleras/essentials_azul_atr.webp", "assets/products/poleras/essentials_azul_del.webp"], sizes: sizes(["M"]) }, { name: "Plomo", hex: "#6E6E6E", images: ["assets/products/poleras/essentials_plomo_atr.webp", "assets/products/poleras/essentials_plomo_del.webp"], sizes: sizes(["M"]) }, { name: "Verde", hex: "#2F6B3A", images: ["assets/products/poleras/essentials_verde_atr.webp", "assets/products/poleras/essentials_verde_del.webp"], sizes: sizes(["M"]) }] },
  // ---- CASACAS ----
  { id: "p21", cat: "Casacas", name: "Casaca Vintage P", price: 99.00, old: null, badge: "low", desc: "Producto importado.", colors: [{ name: "Negro", hex: "#1A1A1A", images: ["assets/products/casacas/vintage_p.webp"], sizes: sizes(["L"]) }] },
  { id: "p22", cat: "Casacas", name: "Casaca Vintage A25", price: 99.00, old: null, badge: "low", desc: "Producto importado.", colors: [{ name: "Negro", hex: "#1A1A1A", images: ["assets/products/casacas/vintage25_negro.webp"], sizes: sizes(["M"]) }] },
  { id: "p23", cat: "Casacas", name: "Casaca Vintage 28", price: 99.00, old: null, badge: "low", desc: "Producto importado.", colors: [{ name: "Azul", hex: "#2455A4", images: ["assets/products/casacas/vintage28_azul.webp"], sizes: sizes(["M"]) }, { name: "Negro", hex: "#1A1A1A", images: ["assets/products/casacas/vintage28_negro.webp"], sizes: sizes(["S", "M", "L"]) }] },
  { id: "p24", cat: "Casacas", name: "Casaca Vintage A17", price: 99.00, old: null, badge: "low", desc: "Producto importado.", colors: [{ name: "Vino", hex: "#6B1E2A", images: ["assets/products/casacas/vintage17_rojo.webp"], sizes: sizes(["L"]) }, { name: "Negro", hex: "#1A1A1A", images: ["assets/products/casacas/vintage17_negro.webp"], sizes: sizes(["M"]) }] },
  { id: "p25", cat: "Casacas", name: "Casaca Vintage Boston", price: 69.00, old: null, badge: "low", desc: "Producto importado.", colors: [{ name: "Azul", hex: "#2455A4", images: ["assets/products/casacas/vintage_boston.webp"], sizes: sizes(["L"]) }] },
  { id: "p26", cat: "Casacas", name: "Casaca Impermeable", price: 79.00, old: null, badge: "low", desc: "Producto 100% peruano con forro acolchado interno.", colors: [{ name: "Verde", hex: "#2F6B3A", images: ["assets/products/casacas/impermeable_verde.webp"], sizes: sizes(["M"]) }] },
  { id: "p27", cat: "Casacas", name: "Casaca New York", price: 69.00, old: null, badge: "low", desc: "Producto importado.", colors: [{ name: "Negro", hex: "#1A1A1A", images: ["assets/products/casacas/casaca_ny.webp"], sizes: sizes(["M"]) }] },
  { id: "p58", cat: "Casacas", name: "Casaca Retro", price: 69.00, old: null, badge: "new", desc: "Producto importado, material tela mojada. La foto muestra primero la parte de adelante.", colors: [{ name: "Estándar", hex: "#3A3A3A", images: ["assets/products/casacas/casaca_retro_del.webp", "assets/products/casacas/casaca_retro_atr.webp"], sizes: sizes(["S"]) }] },
  // ---- CHALECOS ----
  { id: "p28", cat: "Chalecos", name: "Chaleco impermeable", price: 59.00, old: null, badge: "low", desc: "Producto importado.", colors: [{ name: "Negro", hex: "#1A1A1A", images: ["assets/products/chalecos/chaleco_impermeable_negro.webp"], sizes: sizes(["L"]) }, { name: "Azul", hex: "#2455A4", images: ["assets/products/chalecos/chaleco_impermeable_azul.webp"], sizes: sizes(["L"]) }] },
  // ---- ACCESORIOS ----
  { id: "p29", cat: "Accesorios", name: "Reloj Naviforce", price: 99.00, old: null, badge: "low", desc: "Producto importado, incluye estuche.", colors: [{ name: "Estándar", hex: "#3A3A3A", images: ["assets/products/accesorios/naviforce_normal.webp"], sizes: sizes(["Único"]) }] },
  { id: "p30", cat: "Accesorios", name: "Reloj Curren", price: 99.00, old: null, badge: "low", desc: "Producto importado, incluye estuche.", colors: [{ name: "Estándar", hex: "#3A3A3A", images: ["assets/products/accesorios/curren.webp"], sizes: sizes(["Único"]) }] },
  { id: "p31", cat: "Accesorios", name: "Reloj SKMEI", price: 89.00, old: null, badge: "low", desc: "Producto importado, incluye estuche.", colors: [{ name: "Estándar", hex: "#3A3A3A", images: ["assets/products/accesorios/skmei_normal.webp"], sizes: sizes(["Único"]) }] },
  { id: "p32", cat: "Accesorios", name: "Reloj Sanda Analógico", price: 99.00, old: null, badge: "low", desc: "Producto importado, incluye estuche.", colors: [{ name: "Estándar", hex: "#3A3A3A", images: ["assets/products/accesorios/sanda_verde.webp"], sizes: sizes(["Único"]) }] },
  { id: "p33", cat: "Accesorios", name: "Reloj Sanda Digital", price: 99.00, old: null, badge: "low", desc: "Producto importado, incluye estuche.", colors: [{ name: "Negro", hex: "#1A1A1A", images: ["assets/products/accesorios/sanda_digital.webp"], sizes: sizes(["Único"]) }] },
  { id: "p34", cat: "Accesorios", name: "Reloj Naviforce Digital", price: 89.00, old: null, badge: "low", desc: "Producto importado, incluye estuche.", colors: [{ name: "Estándar", hex: "#3A3A3A", images: ["assets/products/accesorios/naviforce_negro_digital.webp"], sizes: sizes(["Único"]) }] },
  { id: "p35", cat: "Accesorios", name: "Reloj Poedagar G", price: 89.00, old: null, badge: "low", desc: "Producto importado, incluye estuche.", colors: [{ name: "Estándar", hex: "#3A3A3A", images: ["assets/products/accesorios/poedagar_grueso.webp"], sizes: sizes(["Único"]) }] },
  { id: "p36", cat: "Accesorios", name: "Reloj Poedagar D", price: 89.00, old: null, badge: "low", desc: "Producto importado, incluye estuche.", colors: [{ name: "Estándar", hex: "#3A3A3A", images: ["assets/products/accesorios/poedagar_delgado.webp"], sizes: sizes(["Único"]) }] },
  { id: "p37", cat: "Accesorios", name: "Reloj SKMEI Digital", price: 89.00, old: null, badge: "low", desc: "Producto importado, incluye estuche.", colors: [{ name: "Estándar", hex: "#3A3A3A", images: ["assets/products/accesorios/skmei_digital.webp"], sizes: sizes(["Único"]) }] },
  { id: "p38", cat: "Accesorios", name: "Reloj Navifoce Verde", price: 89.00, old: null, badge: "low", desc: "Producto importado, incluye estuche.", colors: [{ name: "Verde", hex: "#2F6B3A", images: ["assets/products/accesorios/naviforce_verde_digital.webp"], sizes: sizes(["Único"]) }] },
  { id: "p39", cat: "Accesorios", name: "Reloj Naviforce Plus", price: 125.00, old: null, badge: "low", desc: "Producto importado, incluye caja.", colors: [{ name: "Estándar", hex: "#3A3A3A", images: ["assets/products/accesorios/naviforce_plus.webp"], sizes: sizes(["Único"]) }] },
  { id: "p40", cat: "Accesorios", name: "Reloj Poedagar Plateado", price: 115.00, old: null, badge: "low", desc: "Producto importado, incluye caja.", colors: [{ name: "Plateado", hex: "#B8B8B8", images: ["assets/products/accesorios/poedagar_plateado.webp"], sizes: sizes(["Único"]) }] },
  { id: "p41", cat: "Accesorios", name: "Gorra New York", price: 35.00, old: null, badge: null, desc: "Producto importado.", colors: [{ name: "Negro", hex: "#1A1A1A", images: ["assets/products/accesorios/gorro_ny_negro.webp"], sizes: sizes(["Único"]) }, { name: "Beige", hex: "#D8C7A1", images: ["assets/products/accesorios/gorro_ny_beige.webp"], sizes: sizes(["Único"]) }, { name: "Crema", hex: "#E8DCC0", images: ["assets/products/accesorios/gorro_ny_crema.webp"], sizes: sizes(["Único"]) }] },
  { id: "p42", cat: "Accesorios", name: "Gorra Conejo", price: 35.00, old: null, badge: null, desc: "Producto importado.", colors: [{ name: "Azul", hex: "#2455A4", images: ["assets/products/accesorios/gorro_conejo.webp"], sizes: sizes(["Único"]) }] },
  { id: "p43", cat: "Accesorios", name: "Lentes Plateado", price: 39.00, old: null, badge: "low", desc: "Producto importado, incluye estuche.", colors: [{ name: "Plateado", hex: "#B8B8B8", images: ["assets/products/accesorios/lentes_plateado.webp"], sizes: sizes(["Único"]) }] },
  { id: "p44", cat: "Accesorios", name: "Lentes Negro", price: 39.00, old: null, badge: "low", desc: "Producto importado, incluye estuche.", colors: [{ name: "Negro", hex: "#1A1A1A", images: ["assets/products/accesorios/lentes_negro.webp"], sizes: sizes(["Único"]) }] },
  { id: "p45", cat: "Accesorios", name: "Lentes Verde", price: 35.00, old: null, badge: "low", desc: "Producto importado, incluye estuche.", colors: [{ name: "Verde", hex: "#2F6B3A", images: ["assets/products/accesorios/lentes_verde.webp"], sizes: sizes(["Único"]) }] },
  { id: "p46", cat: "Accesorios", name: "Lentes Rojo", price: 25.00, old: null, badge: "low", desc: "Producto importado, incluye estuche.", colors: [{ name: "Rojo", hex: "#C0272D", images: ["assets/products/accesorios/lentes_rojo.webp"], sizes: sizes(["Único"]) }] },
  { id: "p47", cat: "Accesorios", name: "Lentes Negro Total", price: 35.00, old: null, badge: "low", desc: "Producto importado, incluye estuche.", colors: [{ name: "Negro", hex: "#1A1A1A", images: ["assets/products/accesorios/lentes_negro_total.webp"], sizes: sizes(["Único"]) }] },
];

  (function() {
    const track = document.getElementById('tickerTrack');
    if (!track) return;

    // Texto que quieres repetir
    const baseText = "WEAR YOUR LEGACY · ENVÍOS A TODO EL PERÚ";

    // Función para crear un elemento span con el texto
    const createItem = () => {
      const s = document.createElement('span');
      s.textContent = baseText;
      return s;
    };

    // 1. Insertamos un bloque inicial
    track.appendChild(createItem());
    const oneBlockWidth = track.scrollWidth;
    const screenWidth = window.innerWidth;

    // 2. Calculamos cuántas copias se necesitan para llenar el doble de la pantalla
    const copiesNeeded = Math.max(2, Math.ceil((screenWidth * 2) / oneBlockWidth));

    // 3. Agregamos las copias necesarias
    for (let i = 1; i < copiesNeeded; i++) {
      track.appendChild(createItem());
    }

    // 4. Duplicamos todo el contenido (Bloque A + Bloque B) para lograr el salto invisible
    const clone = track.innerHTML;
    track.innerHTML = clone + clone;

    // 5. Calculamos la velocidad uniforme en píxeles por segundo
    const totalWidth = track.scrollWidth / 2;
    const pxPerSecond = 50; // Puedes subirlo para ir más rápido o bajarlo para ir más lento
    const duration = totalWidth / pxPerSecond;

    // Aplicamos la duración dinámicamente al CSS
    track.style.setProperty('--marquee-time', `${duration}s`);
  })();

// ---- Configuración de contacto ----
const WHATSAPP_NUMBER = "51973758234"; // 51 = código de Perú + número sin espacios ni símbolos

// ---- Estado del carrito ----
// Se guarda en localStorage para que no se pierda si el usuario recarga la página.
let cart = loadCart();

function loadCart() {
  try {
    const raw = localStorage.getItem("jerryjordan_cart");
    const parsed = raw ? JSON.parse(raw) : [];
    // Descarta carritos guardados con el formato antiguo (sin talla)
    return Array.isArray(parsed) ? parsed.filter(i => i.cartKey && i.size) : [];
  } catch (e) {
    return [];
  }
}

function saveCart() {
  localStorage.setItem("jerryjordan_cart", JSON.stringify(cart));
}

function formatSoles(n) {
  return "S/ " + n.toLocaleString("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function badgeLabel(b) {
  return b === "new" ? "Nuevo" : b === "sale" ? "Oferta" : b === "soldout" ? "Agotado" : "Pocas unidades";
}

// ---- Colores reales del catálogo (vienen del arreglo "products", campo "colors") ----

// Genera los botones de talla en base a un color ya elegido.
function sizeButtonsHTML(sizesArr, preselected) {
  return sizesArr
    .map(s => `<button type="button" class="size-btn ${s.t === preselected ? "selected" : ""}" data-size="${s.t}" ${!s.stock ? "disabled title=\"Talla agotada\"" : ""}>${s.t}</button>`)
    .join("");
}

// Fila compacta de colores para la tarjeta del producto (antes de abrir el modal).
// Muestra hasta "max" cuadraditos y, si hay más, agrega un "+N".
function colorPreview(p) {
  const colors = p.colors;
  return `
    <div class="mini-colors" title="Colores disponibles">
      ${colors.map((c, idx) => `<button type="button" class="mini-swatch" data-id="${p.id}" data-idx="${idx}" style="background:${c.hex}" title="${c.name}"></button>`).join("")}
    </div>
  `;
}

// ---- Render de las grillas de producto ----
function renderGrid(containerId, list) {
  const el = document.getElementById(containerId);
  el.innerHTML = list.map(p => {
    const soldOut = p.colors.every(c => c.sizes.every(s => !s.stock));
    const defaultImg = p.colors[0].images[0];

    return `
    <div class="product-card ${soldOut ? "is-soldout" : ""}" data-id="${p.id}">
      <div class="product-media">
        ${soldOut ? `<span class="badge soldout">Agotado</span>` : (p.badge ? `<span class="badge ${p.badge}">${badgeLabel(p.badge)}</span>` : "")}
        <img class="product-photo" src="${defaultImg}" alt="${p.name}" width="400" height="400">
      </div>
      <div class="product-info">
        <div class="brand">${p.cat}</div>
        <div class="name-row">
          <h4 class="product-name-link" data-id="${p.id}" title="Ver más información">${p.name}</h4>
        </div>
        ${colorPreview(p)}
        <div class="size-select" data-empty="true">
          <span class="size-hint">Elige un color</span>
        </div>
        <div class="price-row">
          <div>
            ${p.old ? `<span class="price-old">${formatSoles(p.old)}</span>` : ""}
            <span class="price">${formatSoles(p.price)}</span>
          </div>
          <button class="add-btn" data-id="${p.id}" data-size="" data-color="" data-color-name="" data-img="" title="Elige color y talla" disabled>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;
  }).join("");

  // Si un producto tiene un solo color, no tiene sentido pedirle al usuario
  // que lo "elija" — se selecciona automáticamente para que ya vea sus tallas y fotos.
  list.forEach(p => {
    if (p.colors.length === 1) {
      const card = el.querySelector(`.product-card[data-id="${p.id}"]`);
      if (card) selectCardColor(card, p, 0);
    }
  });
}

// Aplica la selección de un color dentro de una tarjeta: cambia la foto, reconstruye
// las tallas disponibles para ese color y habilita "Agregar" si corresponde.
// La usan tanto el click del usuario como la auto-selección (color único).
function selectCardColor(card, product, idx) {
  const colorObj = product.colors[idx];
  if (!colorObj) return;

  card.querySelectorAll(".mini-swatch").forEach(b => b.classList.toggle("selected", Number(b.dataset.idx) === idx));

  const photoEl = card.querySelector(".product-photo");
  if (photoEl && colorObj.images && colorObj.images[0]) {
    photoEl.src = colorObj.images[0];
  }

  const availableSizes = colorObj.sizes.filter(s => s.stock);
  const preselected = availableSizes.length === 1 ? availableSizes[0].t : null;

  const sizeContainer = card.querySelector(".size-select");
  sizeContainer.removeAttribute("data-empty");
  sizeContainer.innerHTML = sizeButtonsHTML(colorObj.sizes, preselected);

  const addBtn = card.querySelector(".add-btn");
  addBtn.dataset.color = colorObj.hex;
  addBtn.dataset.colorName = colorObj.name;
  addBtn.dataset.img = colorObj.images[0] || "";
  addBtn.dataset.size = preselected || "";
  addBtn.title = preselected ? "Agregar al carrito" : "Elige una talla";
  addBtn.disabled = !preselected;
}


// ---- Sección "Novedades" (drops nuevos) ----
// Comentada junto con su bloque en index.html: se conserva el código por si se
// quiere reactivar más adelante, pero por ahora no se muestra en la página.
// const newArrivals = products.filter(p => p.badge === "new");
// renderGrid("product-grid", newArrivals);

// ---- Estado de los filtros del catálogo completo ----
const filters = {
  cat: "Todos",
  sizes: new Set(),   // tallas seleccionadas, ej: {"S","M"}
  price: "todos",     // "todos" | "0-30" | "30-60" | "60-100" | "100-99999"
  sort: "relevancia", // "relevancia" | "price-asc" | "price-desc"
};

function matchesFilters(p) {
  if (filters.cat !== "Todos" && p.cat !== filters.cat) return false;

  if (filters.sizes.size > 0) {
    const hasSelectedSize = p.colors.some(c => c.sizes.some(s => s.stock && filters.sizes.has(s.t)));
    if (!hasSelectedSize) return false;
  }

  if (filters.price !== "todos") {
    const [min, max] = filters.price.split("-").map(Number);
    if (p.price < min || p.price > max) return false;
  }

  return true;
}

function sortProducts(list) {
  const sorted = list.slice();
  if (filters.sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
  else if (filters.sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
  return sorted;
}

function renderCatalog() {
  const filtered = sortProducts(products.filter(matchesFilters));

  const grid = document.getElementById("product-grid-2");
  const emptyState = document.getElementById("empty-state");
  const countEl = document.getElementById("filter-count");

  if (filtered.length === 0) {
    grid.style.display = "none";
    emptyState.style.display = "block";
  } else {
    grid.style.display = "grid";
    emptyState.style.display = "none";
    renderGrid("product-grid-2", filtered);
  }

  const total = products.length;
  countEl.textContent = filtered.length === total
    ? `Mostrando los ${total} productos`
    : `Mostrando ${filtered.length} de ${total} productos`;
}
renderCatalog();

// Tabs de categoría
document.getElementById("filter-cat").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-tab");
  if (!btn) return;
  document.querySelectorAll("#filter-cat .filter-tab").forEach(t => t.classList.remove("active"));
  btn.classList.add("active");
  filters.cat = btn.dataset.cat;
  renderCatalog();
});

// Chips de talla (selección múltiple)
document.getElementById("filter-size").addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  const size = chip.dataset.size;
  if (filters.sizes.has(size)) {
    filters.sizes.delete(size);
    chip.classList.remove("active");
  } else {
    filters.sizes.add(size);
    chip.classList.add("active");
  }
  renderCatalog();
});

// Precio
document.getElementById("filter-price").addEventListener("change", (e) => {
  filters.price = e.target.value;
  renderCatalog();
});

// Orden
document.getElementById("filter-sort").addEventListener("change", (e) => {
  filters.sort = e.target.value;
  renderCatalog();
});

// Limpiar todos los filtros
function clearFilters() {
  filters.cat = "Todos";
  filters.sizes.clear();
  filters.price = "todos";
  filters.sort = "relevancia";

  document.querySelectorAll("#filter-cat .filter-tab").forEach(t => t.classList.toggle("active", t.dataset.cat === "Todos"));
  document.querySelectorAll("#filter-size .chip").forEach(c => c.classList.remove("active"));
  document.getElementById("filter-price").value = "todos";
  document.getElementById("filter-sort").value = "relevancia";

  renderCatalog();
}
document.getElementById("filter-clear").addEventListener("click", clearFilters);
document.getElementById("empty-clear").addEventListener("click", clearFilters);

// Las tarjetas de categoría llevan directo al catálogo filtrado por esa categoría
document.querySelectorAll(".cat-card[data-cat]").forEach(card => {
  card.addEventListener("click", () => {
    const cat = card.dataset.cat;
    document.querySelectorAll("#filter-cat .filter-tab").forEach(t => {
      t.classList.toggle("active", t.dataset.cat === cat);
    });
    filters.cat = cat;
    renderCatalog();
    document.getElementById("destacados").scrollIntoView({ behavior: "smooth" });
  });
});

// ---- Selección de color dentro de cada tarjeta ----
// Al elegir un color se reconstruyen las tallas disponibles PARA ESE color
// (cada color puede tener sus propias tallas, según el catálogo real).
document.addEventListener("click", (e) => {
  const swatch = e.target.closest(".mini-swatch");
  if (!swatch) return;
  const card = swatch.closest(".product-card");
  const product = products.find(p => p.id === swatch.dataset.id);
  if (!product) return;
  selectCardColor(card, product, Number(swatch.dataset.idx));
});

// ---- Selección de talla dentro de cada tarjeta ----
// El selector exige ".product-card .size-btn" para no interferir nunca con
// los botones de talla del modal de detalle (que tienen su propio manejador).
document.addEventListener("click", (e) => {
  const sizeBtn = e.target.closest(".product-card .size-btn");
  if (!sizeBtn || sizeBtn.disabled) return;
  const card = sizeBtn.closest(".product-card");
  card.querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
  sizeBtn.classList.add("selected");
  const addBtn = card.querySelector(".add-btn");
  addBtn.dataset.size = sizeBtn.dataset.size;
  addBtn.disabled = !addBtn.dataset.color; // ya se exige el color primero
});

// ---- Delegación de clicks para "Agregar al carrito" ----
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".add-btn");
  if (!btn) return;

  if (btn.disabled) return;

  const id = btn.dataset.id;
  const size = btn.dataset.size;
  const color = btn.dataset.color;
  const colorName = btn.dataset.colorName;
  const img = btn.dataset.img;
  const product = products.find(p => p.id === id);
  if (!product) return;

  if (!color) {
    showToast("Selecciona un color primero");
    return;
  }
  if (!size) {
    showToast("Selecciona una talla primero");
    return;
  }

  addToCart(product, size, color, colorName, img);

  // micro-feedback visual en el botón
  btn.classList.add("added");
  setTimeout(() => btn.classList.remove("added"), 700);

  showToast(`${product.name} (${colorName}, Talla ${size}) agregado al carrito`);
  bumpBadge();
});

function addToCart(product, size, selectedColorHex, selectedColorName, selectedImg) {
  const cartKey = `${product.id}__${size}__${selectedColorHex || "base"}`;
  const existing = cart.find(item => item.cartKey === cartKey);
  if (existing) {
    existing.qty += 1;
  } else {
    const fallbackColor = product.colors[0] || { hex: "#3A3A3A", name: "Estándar", images: [] };
    cart.push({
      cartKey,
      id: product.id,
      name: product.name,
      cat: product.cat,
      price: product.price,
      qty: 1,
      img: selectedImg || fallbackColor.images[0] || "",
      color: selectedColorHex || fallbackColor.hex,
      colorName: selectedColorName || fallbackColor.name,
      size,
    });
  }
  saveCart();
  renderCart();
}

function removeFromCart(cartKey) {
  cart = cart.filter(item => item.cartKey !== cartKey);
  saveCart();
  renderCart();
}

function changeQty(cartKey, delta) {
  const item = cart.find(i => i.cartKey === cartKey);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(cartKey);
  } else {
    saveCart();
    renderCart();
  }
}

function cartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function cartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function bumpBadge() {
  const badge = document.getElementById("cart-badge");
  badge.classList.remove("bump");
  void badge.offsetWidth; // reinicia la animación
  badge.classList.add("bump");
}

// ---- Render del panel del carrito ----
function renderCart() {
  const itemsEl = document.getElementById("cart-items");
  const emptyEl = document.getElementById("cart-empty");
  const footerEl = document.getElementById("cart-footer");
  const badge = document.getElementById("cart-badge");
  const totalEl = document.getElementById("cart-total");
  const whatsappBtn = document.getElementById("whatsapp-btn");

  badge.textContent = cartCount();

  if (cart.length === 0) {
    itemsEl.style.display = "none";
    footerEl.style.display = "none";
    emptyEl.style.display = "flex";
    return;
  }

  itemsEl.style.display = "block";
  footerEl.style.display = "block";
  emptyEl.style.display = "none";

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-media"><img src="${item.img}" alt="${item.name}"></div>
      <div class="cart-item-info">
        <div class="brand">${item.cat} · ${item.colorName || "Color"} · Talla ${item.size}</div>
        <div class="name-row">
          <h4>${item.name}</h4>
          <span class="color-swatch small" style="background:${item.color}" title="${item.colorName || "Color de la prenda"}"></span>
        </div>
        <div class="cart-item-row">
          <div class="qty-control">
            <button data-action="dec" data-key="${item.cartKey}" aria-label="Restar">−</button>
            <span>${item.qty}</span>
            <button data-action="inc" data-key="${item.cartKey}" aria-label="Sumar">+</button>
          </div>
          <span class="cart-item-price">${formatSoles(item.price * item.qty)}</span>
          <button class="cart-item-remove" data-action="remove" data-key="${item.cartKey}" aria-label="Eliminar">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>
          </button>
        </div>
      </div>
    </div>
  `).join("");

  totalEl.textContent = formatSoles(cartTotal());
  whatsappBtn.href = buildWhatsAppLink();
}

// ---- Convierte un color (hex o hsl) al emoji de color más parecido ----
function parseColorToHSL(str) {
  if (!str) return null;
  str = str.trim();
  if (str.startsWith("hsl")) {
    const m = /hsl\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*\)/i.exec(str);
    return m ? { h: parseFloat(m[1]), s: parseFloat(m[2]), l: parseFloat(m[3]) } : null;
  }
  if (str.startsWith("#")) {
    let hex = str.replace("#", "");
    if (hex.length === 3) hex = hex.split("").map(c => c + c).join("");
    const r = parseInt(hex.substr(0, 2), 16) / 255;
    const g = parseInt(hex.substr(2, 2), 16) / 255;
    const b = parseInt(hex.substr(4, 2), 16) / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) { h = s = 0; }
    else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        default: h = (r - g) / d + 4;
      }
      h *= 60;
    }
    return { h, s: s * 100, l: l * 100 };
  }
  return null;
}

function colorToEmoji(colorStr) {
  const hsl = parseColorToHSL(colorStr);
  if (!hsl) return "🎨";
  const { h, s, l } = hsl;
  if (s < 12) return l < 18 ? "⚫" : "⚪";
  if (h < 15 || h >= 345) return "🔴";
  if (h < 45) return "🟠";
  if (h < 70) return "🟡";
  if (h < 170) return "🟢";
  if (h < 255) return "🔵";
  return "🟣";
}

// ---- Convierte un color (hex o hsl) al nombre de color en español más parecido ----
function colorToName(colorStr) {
  const hsl = parseColorToHSL(colorStr);
  if (!hsl) return "Color";
  const { h, s, l } = hsl;
  if (s < 12) return l < 18 ? "Negro" : "Blanco";
  if (h < 15 || h >= 345) return "Rojo";
  if (h < 45) return "Naranja";
  if (h < 70) return "Amarillo";
  if (h < 170) return "Verde";
  if (h < 255) return "Azul";
  return "Morado";
}

function buildWhatsAppLink() {
  let msg = "¡Hola Jerry Jordan! Quiero consultar disponibilidad de estos productos:\n\n";
  cart.forEach((item, i) => {
    // Usa el nombre real del color guardado en el carrito; si por algún motivo
    // no existe (carritos guardados antes de este cambio), lo estima por tono.
    const colorLabel = item.colorName || colorToName(item.color);
    msg += `${i + 1}. ${item.name} — Color: ${colorLabel} — Talla: ${item.size} — Cantidad: ${item.qty} — ${formatSoles(item.price * item.qty)}\n`;
  });
  msg += `\nTotal estimado: ${formatSoles(cartTotal())}\n\n¿Me confirman tallas y stock disponible?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// clicks dentro del carrito (sumar, restar, eliminar)
document.getElementById("cart-items").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;
  const key = btn.dataset.key;
  const action = btn.dataset.action;
  if (action === "inc") changeQty(key, 1);
  if (action === "dec") changeQty(key, -1);
  if (action === "remove") removeFromCart(key);
});

// ---- Modal "Sobre nosotros" ----
const aboutBtn = document.getElementById("about-btn");
const aboutModal = document.getElementById("about-modal");
const aboutModalOverlay = document.getElementById("about-modal-overlay");
const aboutModalClose = document.getElementById("about-modal-close");

function openAboutModal() {
  aboutModal.classList.add("open");
  aboutModalOverlay.classList.add("open");
  aboutModal.setAttribute("aria-hidden", "false");
}
function closeAboutModal() {
  aboutModal.classList.remove("open");
  aboutModalOverlay.classList.remove("open");
  aboutModal.setAttribute("aria-hidden", "true");
}

if (aboutBtn) {
  aboutBtn.addEventListener("click", openAboutModal);
  aboutModalClose.addEventListener("click", closeAboutModal);
  aboutModalOverlay.addEventListener("click", closeAboutModal);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAboutModal(); });
}

// ---- Menú móvil (hamburguesa) ----
const burgerBtn = document.getElementById("burger-btn");
const navLinks = document.getElementById("nav-links");

function closeMobileMenu() {
  navLinks.classList.remove("mobile-open");
  burgerBtn.setAttribute("aria-expanded", "false");
}

if (burgerBtn && navLinks) {
  burgerBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("mobile-open");
    burgerBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Cierra el menú al tocar un enlace
  navLinks.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeMobileMenu();
  });

  // Cierra el menú si se toca fuera de él
  document.addEventListener("click", (e) => {
    if (!navLinks.classList.contains("mobile-open")) return;
    if (navLinks.contains(e.target) || burgerBtn.contains(e.target)) return;
    closeMobileMenu();
  });
}

// ---- Abrir / cerrar el drawer del carrito ----
const cartBtn = document.getElementById("cart-btn");
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");
const cartClose = document.getElementById("cart-close");

function openCart() {
  cartDrawer.classList.add("open");
  cartOverlay.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
}
function closeCart() {
  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

cartBtn.addEventListener("click", () => { renderCart(); openCart(); });
cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeCart(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && navLinks && navLinks.classList.contains("mobile-open")) closeMobileMenu(); });

// ---- Toast de confirmación ----
let toastTimeout;
function showToast(text) {
  let toast = document.getElementById("app-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "app-toast";
    toast.className = "toast";
    toast.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span></span>`;
    document.body.appendChild(toast);
  }
  toast.querySelector("span").textContent = text;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2200);
}

// ---- Inicializar carrito al cargar ----
renderCart();

// ---- Reveal on scroll ----
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// ==========================================================
// ---- MODAL DE DETALLE DE PRODUCTO (se abre sin salir de la página) ----
// ==========================================================
const productModal = document.getElementById("product-modal");
const productModalOverlay = document.getElementById("product-modal-overlay");
const productModalClose = document.getElementById("product-modal-close");
const productModalBody = document.getElementById("product-modal-body");

function openProductModal(id) {
  const p = products.find(item => item.id === id);
  if (!p) return;

  const soldOut = p.colors.every(c => c.sizes.every(s => !s.stock));
  const defaultImg = p.colors[0].images[0];

  productModalBody.innerHTML = `
    <div class="pm-media">
      <div class="pm-zoom-frame" id="pm-zoom-frame">
        <img id="pm-main-image" src="${defaultImg}" alt="${p.name}">
      </div>
      <div class="pm-thumbs" id="pm-thumbs"></div>
    </div>
    <div class="pm-info">
      <div class="brand">${p.cat}</div>
      ${soldOut ? `<span class="badge soldout">Agotado</span>` : (p.badge ? `<span class="badge ${p.badge}">${badgeLabel(p.badge)}</span>` : "")}
      <div class="name-row">
        <h2>${p.name}</h2>
      </div>
      <div class="price-row">
        ${p.old ? `<span class="price-old">${formatSoles(p.old)}</span>` : ""}
        <span class="price">${formatSoles(p.price)}</span>
      </div>
      <p class="desc">${p.desc || "Prenda Jerry Jordan de edición streetwear."}</p>
      ${soldOut ? `
        <div class="pm-soldout-note">Este producto está agotado por el momento. Escríbenos por WhatsApp para avisarte cuando vuelva al stock.</div>
      ` : `
        <div class="pm-sizes-label">Seleccionar color</div>
        <div class="pm-color-select">
          ${p.colors.map((c, idx) => `<button type="button" class="pm-color-swatch" data-idx="${idx}" style="background:${c.hex}" title="${c.name}"></button>`).join("")}
        </div>
        <div class="pm-color-name" id="pm-color-name">Elige un color para ver sus tallas</div>

        <div class="pm-sizes-label">Elige tu talla</div>
        <div class="size-select" id="pm-size-select" data-empty="true">
          <span class="size-hint">Elige un color primero</span>
        </div>
        <div class="add-to-cart-row">
          <button class="btn btn-primary pm-add-btn" data-id="${p.id}" data-size="" data-color="" data-color-name="" data-img="" title="Elige color y talla" disabled>
            Agregar al carrito
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
        </div>
      `}
    </div>
  `;

  productModal.classList.add("open");
  productModalOverlay.classList.add("open");
  productModal.setAttribute("aria-hidden", "false");

  setupImageZoom();

  // Si el producto tiene un solo color, no hace falta que el usuario lo "elija":
  // se selecciona automáticamente para que ya vea sus tallas y fotos de una vez.
  if (!soldOut && p.colors.length === 1) {
    selectModalColor(p, 0);
  }
}

// Zoom con el mouse: al mover el cursor sobre la foto del modal, la imagen se
// amplía siguiendo la posición del cursor. Se vuelve a llamar cada vez que se
// abre el modal, ya que la foto (y su elemento) se reconstruyen desde cero.
function setupImageZoom() {
  const frame = document.getElementById("pm-zoom-frame");
  const img = document.getElementById("pm-main-image");
  if (!frame || !img) return;

  frame.addEventListener("mousemove", (e) => {
    const rect = frame.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = "scale(2.2)";
  });

  frame.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
    img.style.transformOrigin = "center center";
  });
}

// Aplica la selección de un color dentro del modal: resalta el cuadradito,
// actualiza la galería de fotos y reconstruye las tallas disponibles para ese color.
// La usan tanto el click del usuario como la auto-selección (color único).
function selectModalColor(product, idx) {
  const colorObj = product.colors[idx];
  if (!colorObj) return;

  productModalBody.querySelectorAll(".pm-color-swatch").forEach(b => b.classList.toggle("selected", Number(b.dataset.idx) === idx));

  const nameEl = document.getElementById("pm-color-name");
  if (nameEl) nameEl.textContent = colorObj.name;

  renderPmGallery(colorObj.images);

  const availableSizes = colorObj.sizes.filter(s => s.stock);
  const preselected = availableSizes.length === 1 ? availableSizes[0].t : null;

  const sizeContainer = document.getElementById("pm-size-select");
  sizeContainer.removeAttribute("data-empty");
  sizeContainer.innerHTML = sizeButtonsHTML(colorObj.sizes, preselected);

  const addBtn = productModalBody.querySelector(".pm-add-btn");
  if (addBtn) {
    addBtn.dataset.color = colorObj.hex;
    addBtn.dataset.colorName = colorObj.name;
    addBtn.dataset.img = colorObj.images[0] || "";
    addBtn.dataset.size = preselected || "";
    addBtn.disabled = !preselected; // falta talla si el color tiene más de una opción
  }
}

// Actualiza la foto principal del modal y arma la fila de miniaturas
// (solo aparece si ese color tiene más de una foto).
function renderPmGallery(images) {
  const mainImg = document.getElementById("pm-main-image");
  const thumbsEl = document.getElementById("pm-thumbs");
  if (!images || images.length === 0) return;

  if (mainImg) mainImg.src = images[0];

  if (thumbsEl) {
    if (images.length > 1) {
      thumbsEl.innerHTML = images
        .map((img, i) => `<button type="button" class="pm-thumb ${i === 0 ? "active" : ""}" data-img="${img}"><img src="${img}" alt="Foto ${i + 1}"></button>`)
        .join("");
    } else {
      thumbsEl.innerHTML = "";
    }
  }
}

function closeProductModal() {
  productModal.classList.remove("open");
  productModalOverlay.classList.remove("open");
  productModal.setAttribute("aria-hidden", "true");
}

// Abrir modal al hacer click en el nombre de un producto (en cualquier grilla)
document.addEventListener("click", (e) => {
  const nameLink = e.target.closest(".product-name-link");
  if (nameLink) {
    openProductModal(nameLink.dataset.id);
    return;
  }

  // También se abre al hacer click en la foto del producto
  const media = e.target.closest(".product-media");
  if (media) {
    const card = media.closest(".product-card");
    if (card) openProductModal(card.dataset.id);
  }
});

// Selección de color, talla y miniaturas de foto dentro del modal
productModalBody.addEventListener("click", (e) => {
  // Cambiar de foto dentro del mismo color (miniaturas de galería)
  const thumbBtn = e.target.closest(".pm-thumb");
  if (thumbBtn) {
    productModalBody.querySelectorAll(".pm-thumb").forEach(b => b.classList.remove("active"));
    thumbBtn.classList.add("active");
    const mainImg = document.getElementById("pm-main-image");
    if (mainImg) mainImg.src = thumbBtn.dataset.img;
    const addBtn = productModalBody.querySelector(".pm-add-btn");
    if (addBtn && addBtn.dataset.color) addBtn.dataset.img = thumbBtn.dataset.img;
    return;
  }

  // Seleccionar color: reconstruye las tallas Y las fotos disponibles para ESE color
  const colorBtn = e.target.closest(".pm-color-swatch");
  if (colorBtn) {
    const addBtn = productModalBody.querySelector(".pm-add-btn");
    const id = addBtn ? addBtn.dataset.id : null;
    const product = products.find(p => p.id === id);
    if (!product) return;
    selectModalColor(product, Number(colorBtn.dataset.idx));
    return;
  }

  const sizeBtn = e.target.closest(".size-btn");
  if (sizeBtn && !sizeBtn.disabled) {
    productModalBody.querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
    sizeBtn.classList.add("selected");
    const addBtn = productModalBody.querySelector(".pm-add-btn");
    if (addBtn) {
      addBtn.dataset.size = sizeBtn.dataset.size;
      addBtn.disabled = !addBtn.dataset.color; // el color ya es obligatorio antes de esto
    }
    return;
  }

  // Agregar al carrito desde el modal
  const addBtn = e.target.closest(".pm-add-btn");
  if (addBtn && !addBtn.disabled) {
    const id = addBtn.dataset.id;
    const size = addBtn.dataset.size;
    const color = addBtn.dataset.color;
    const colorName = addBtn.dataset.colorName;
    const img = addBtn.dataset.img;
    const product = products.find(p => p.id === id);
    if (!product) return;
    if (!color) {
      showToast("Selecciona un color primero");
      return;
    }
    if (!size) {
      showToast("Selecciona una talla primero");
      return;
    }
    addToCart(product, size, color, colorName, img);
    showToast(`${product.name} (${colorName}, Talla ${size}) agregado al carrito`);
    bumpBadge();
    closeProductModal();
  }
});


productModalClose.addEventListener("click", closeProductModal);
productModalOverlay.addEventListener("click", closeProductModal);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeProductModal(); });