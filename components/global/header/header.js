document.writeln(
  '<div class="load load-id"></div>' +
    '<div class="load load-en hide"></div>' +
    '<section class="header">' +
    '<div class="container d-flex align-items-center">' +
    '<div class="row d-flex align-items-center justify-content-between">' +
    '<div class="col-3 logo">' +
    '<a href="index.html"><img src="assets/images/afc-logo.png" /></a>' +
    "</div>" +
    '<div class="col-9 d-flex justify-content-end">' +
    '<ul class="menu desktop-view">' +
    '<li><a href="index.html"><span class="translate" data-translate="menu.header.home"></span></a></li>' +
    '<li><a href="about.html"><span class="translate" data-translate="menu.header.about"></span></a></li>' +
    '<li><a href="care.html"><span class="translate" data-translate="menu.header.care"></span></a></li>' +
    '<li><a href="product.html"><span class="translate" data-translate="menu.header.product"></span></a></li>' +
    '<li><a href="news.html"><span class="translate" data-translate="menu.header.news"></span></a></li>' +
    '<li><a href="#"><span class="translate" data-translate="menu.header.login"></span></a></li>' +
    // '<li><a href="/download/KODE_ETIK_ASAYAMA_FAMILY_CAHAYA_INDONESIA.pdf">CODE ETHICS</a></li>' +
    // '<li><a href="/download/MARKETING_PLAN_ASAYAMA.pdf">MARKETING PLAN</a></li>' +
    "</ul>" +
    '<div class="multi-lang">' +
    '<div class="change-language" id="id-lang" data-action="load-id" data-switch="true" onclick="changeLangId()">' +
    '<a class="translate active" aria-current="page" href="javascript:;">' +
    '<img src="assets/images/flag_circle_id.png" alt="ID" />' +
    "</a>" +
    "</div>" +
    '<div class="change-language" id="en-lang" data-action="load-en" data-switch="true" onclick="changeLangEn()">' +
    '<a class="translate" href="javascript:;">' +
    '<img src="assets/images/flag_circle_en.png" alt="EN" />' +
    "</a>" +
    "</div>" +
    "</div>" +
    '<a class="mobile-view offcanvas-menu" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">' +
    '<i class="fa-solid fa-bars"></i>' +
    "</a>" +
    '<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">' +
    '<div class="offcanvas-header">' +
    '<div class="logo"><img src="assets/images/logo.png" /></div>' +
    '<button type="button" class="btn-close btn-sm text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>' +
    "</div>" +
    '<div class="offcanvas-body">' +
    '<ul class="menu">' +
    '<li><a href="index.html"><span class="translate" data-translate="menu.header.home"></span></a></li>' +
    '<li><a href="about.html"><span class="translate" data-translate="menu.header.about"></span></a></li>' +
    '<li><a href="care.html"><span class="translate" data-translate="menu.header.care"></span></a></li>' +
    '<li><a href="product.html"><span class="translate" data-translate="menu.header.product"></span></a></li>' +
    '<li><a href="news.html"><span class="translate" data-translate="menu.header.news"></span></a></li>' +
    '<li><a href="#"><span class="translate" data-translate="menu.header.login"></span></a></li>' +
    '<li><a href="/download/KODE_ETIK_ASAYAMA_FAMILY_CAHAYA_INDONESIA.pdf"><span class="translate" data-translate="menu.header.ethic"></span></a></li>' +
    '<li><a href="/download/MARKETING_PLAN_ASAYAMA.pdf">MARKETING PLAN</a></li>' +
    "</ul>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</section>"
);
