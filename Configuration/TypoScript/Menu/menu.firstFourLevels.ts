menu.firstFourLevels = HMENU
menu.firstFourLevels {
  1 = TMENU
  1 {
    expAll = 1
    NO = 1
    NO {
      # Use the page title field the title property on the A-tag, but only if the navigation title is set
      ATagTitle {
        field = title
        #fieldRequired = nav_title
      }
      ATagParams = class="nav-link"
      wrapItemAndSub = <li class="nav-item level1 first x{field:uid}">|</li> |*| <li class="nav-item level1 x{field:uid}">|</li> |*| <li class="nav-item level1 last x{field:uid}">|</li>
      wrapItemAndSub.insertData = 1

      # HTML-encode special characters according to the PHP-function htmlSpecialChars
      stdWrap.htmlSpecialChars = 1
    }
    ACT = 1
    ACT.wrapItemAndSub = <li class="nav-item active level1 first x{field:uid}">|</li>
	ACT.wrapItemAndSub.insertData = 1
    ACT.ATagTitle.field = abstract // description // title
    ACT.ATagParams = class="nav-link"

    IFSUB = 1
    IFSUB.wrapItemAndSub = <li class="nav-item dropdown level1 first x{field:uid}">|</li> |*| <li class="nav-item dropdown level1 x{field:uid}">|</li> |*| <li class="nav-item dropdown level1 last x{field:uid}">|</li>
	IFSUB.wrapItemAndSub.insertData = 1
    IFSUB.ATagTitle.field = abstract // description // title
    IFSUB.ATagParams = class="navbarDropdown dropdown-toggle nav-link" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false"

    ACTIFSUB = 1
    ACTIFSUB.wrapItemAndSub = <li class="nav-item dropdown active level1 x{field:uid}">|</li>
    ACTIFSUB.wrapItemAndSub.insertData = 1
    ACTIFSUB.ATagTitle.field = abstract // description // title
    ACTIFSUB.ATagParams = class="navbarDropdown dropdown-toggle nav-link" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false"

    wrap = <ul class="nav navbar-nav mr-auto">|</ul>
  }
  2 < .1
  2 {

	NO.wrapItemAndSub = <li class="level2 first x{field:uid}">|</li> |*| <li class="level2 x{field:uid}">|</li> |*| <li class="level2 last x{field:uid}">|</li>

    ACT = 1
    ACT.wrapItemAndSub = <li class="active level2 first x{field:uid}">|</li>
	ACT.wrapItemAndSub.insertData = 1
    ACT.ATagTitle.field = abstract // description // title
    ACT.ATagParams = class="dropdown-toggle dropdown-item" labelledy="navbarDropdown"

	IFSUB = 1
    IFSUB.wrapItemAndSub = <li class="dropdown-submenu level2 x{field:uid}">|</li>
	IFSUB.wrapItemAndSub.insertData = 1
    IFSUB.ATagParams = class="nav-link dropdown-toggle" id="navbarDropdownMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

    ACTIFSUB = 1
    ACTIFSUB.wrapItemAndSub = <li class="dropdown-submenu active level2 x{field:uid}">|</li>
	ACTIFSUB.wrapItemAndSub.insertData = 1
    ACTIFSUB.ATagTitle.field = abstract // description // title
    ACTIFSUB.ATagParams = class="dropdown-toggle dropdown-item" // description // title

    wrap = <ul class="dropdown-menu" aria-labelledby="navbarDropdown">|</ul>
  }

  3 < .2
  3 {

	NO.wrapItemAndSub = <li class="level3 first x{field:uid}">|</li> |*| <li class="level3 x{field:uid}">|</li> |*| <li class="level3 last x{field:uid}">|</li>

    ACT = 1
    ACT.wrapItemAndSub = <li class="active level3">|</li>
    ACT.ATagTitle.field = abstract // description // title
    ACT.ATagParams = class="dropdown-toggle dropdown-item"

  	wrap = <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">|</ul>
  }

  4 < .2
  4 {

	NO.wrapItemAndSub = <li class="nav-item level4 first x{field:uid}">|</li> |*| <li class="nav-item level4 x{field:uid}">|</li> |*| <li class="nav-item level4 last x{field:uid}">|</li>

    ACT = 1
    ACT.wrapItemAndSub = <li class="active level4">|</li>
    ACT.ATagTitle.field = abstract // description // title


  	wrap = <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">|</ul>
  }
}
