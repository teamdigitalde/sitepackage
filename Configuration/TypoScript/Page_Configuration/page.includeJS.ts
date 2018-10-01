page {
  includeJSLibs {
    modernizr = {$filepaths.scripts}Dist/modernizr-3.2.0-custom.min.js
    #selectivizr = {filepaths.scripts}libs/selectivizr-min.js
    #selectivizr {
    #  allWrap = <!--[if (gte IE 6)&(lte IE 8)]>|<![endif]-->
    #  excludeFromConcatenation = 1
    #}
    jQuery = //ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js
    jQuery {
      external = 1
      excludeFromConcatenation = 1
      disableCompression = 1
    }
  }
  includeJSFooterlibs {
    10 = {$filepaths.scripts}Dist/bootstrap.min.js
    30 = {$filepaths.scripts}Dist/bootstrap-dropdown.js
  }
  includeJSFooter {

    fancybox = {$filepaths.scripts}Dist/jquery.fancybox.pack.js
    main = {$filepaths.scripts}Src/main.js
  }
}
