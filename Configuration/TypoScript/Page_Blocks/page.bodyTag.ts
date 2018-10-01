lib.backend_layout = TEXT
lib.backend_layout {
	data = levelfield:-1, backend_layout_next_level, slide
	override.field = backend_layout
}
lib.layoutSwitch < lib.backend_layout
lib.layoutSwitch.wrap = layout|
	
	
# BODY-Tag CSS Klasse Seiten PID ###############################
lib.sitepid = COA
lib.sitepid {
  10 = HMENU
  10 {
  special = rootline
  special.range = 1|-1
  includeNotInMenu = 1
    1 = TMENU
    1 {
      NO {
        doNotLinkIt = 1
        doNotShowLink = 0
        allStdWrap.cObject = COA
        allStdWrap.cObject {
          10 = TEXT
          10 {
            field = uid
          }
          10.noTrimWrap = | uid_| |
        }
      }
    }
  }
}

# BODY-Tag erstellen ###############################
lib.bodyTag = COA
lib.bodyTag {
	10 = TEXT
	10.dataWrap = <body id="p{TSFE:id}" class="
	# === insert layout switch (page|backend_layout)
	20 < lib.layoutSwitch
	30 < lib.sitepid
	90 = TEXT
	90.value = ">
} 