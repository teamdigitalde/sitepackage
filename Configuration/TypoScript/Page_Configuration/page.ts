# Make the PAGE object
page = PAGE
page {
  # Regular pages always have typeNum = 0
  typeNum = 0

  # Add the icon that will appear in front of the url in the browser
  # This icon will also be used for the bookmark menu in browsers
  shortcutIcon = {$filepaths.images}favicon.ico
	bodyTag >
	bodyTagCObject < lib.bodyTag
	10 = FLUIDTEMPLATE
	10 {

		partialRootPath = EXT:sitepackage/Resources/Private/Partials/Page/
		layoutRootPath = EXT:sitepackage/Resources/Private/Templates/Page/

		file.stdWrap.cObject = CASE
		file.stdWrap.cObject {
			key.data = levelfield:-1, backend_layout_next_level, slide
			key.override.field = backend_layout
			default = TEXT
			default.value = EXT:sitepackage/Resources/Private/Templates/Page/Layout1.html
			pagets__Layout2 = TEXT
			pagets__Layout2.value = EXT:sitepackage/Resources/Private/Templates/Page/Layout2.html
			pagets__Layout3 = TEXT
			pagets__Layout3.value = EXT:sitepackage/Resources/Private/Templates/Page/Layout3.html
			pagets__Layout4 = TEXT
			pagets__Layout4.value = EXT:sitepackage/Resources/Private/Templates/Page/Layout4.html
		}

		# fill the subparts and markers
		variables {
			# Insert menu's from lib-objects into the appropriate subparts
			mainMenu < menu.firstFourLevels
			topMenu < menu.top
			headerslideshow < lib.headerslideshow
			backend_layout < lib.backend_layout
			layoutclass < lib.layoutSwitch

			# Insert content as already constructed in TypoScript objects into subparts
			content_col0 < styles.content.get
			content_col1 < styles.content.get
			content_col1.select.where = colPos=1
			content_col2 < styles.content.get
			content_col2 {
				select.where = colPos=2
				stdWrap.required = 1
				slide = -1
			}
		}
	}
}
