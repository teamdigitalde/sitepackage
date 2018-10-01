#wo liegen die Backend Layouts?
TCEFORM.pages.backend_layout.PAGE_TSCONFIG_ID = 13
TCEFORM.pages.backend_layout_next_level.PAGE_TSCONFIG_ID = 13

# Text -> "Kopie1" entfernen
TCEMAIN.table.pages.disablePrependAtCopy = 1
TCEMAIN.table.tt_content.disablePrependAtCopy = 1

# Text -> Kopie einblenden
TCEMAIN.table.tt_content.disableHideAtCopy = 1

# Set the default label and flag
mod.SHARED.defaultLanguageLabel = deutsch
mod.SHARED.defaultLanguageFlag = de

# Show the content element wizard with tabs (for consistency)
mod.wizards.newContentElement.renderMode = tabs

# Bild und Spalten -> Text mit Bild / Bild / Text Media
# Bildposition "Oben links"
mod.wizards.newContentElement.wizardItems.common.elements{
    textpic.tt_content_defValues.imageorient = 2
    image.tt_content_defValues.imageorient = 2
    textmedia.tt_content_defValues.imageorient = 2
}
# Anzahl der Spalten auf 1
mod.wizards.newContentElement.wizardItems.common.elements{
    textpic.tt_content_defValues.imagecols = 1
    image.tt_content_defValues.imagecols = 1
    textmedia.tt_content_defValues.imagecols = 1
    }

TCEFORM {
	pages {
		layout {
			# Rename the default options for the layout field in table pages
			altLabels.0 = Standard 3 columns
			altLabels.1 = Columns left & main
			altLabels.2 = Columns main & right
			altLabels.3 = Column main only
		}
		# There is no need for the Alias field in page properties when we use RealURL
		alias.disabled = 1
	}

	tt_content {
		# Remove the 'border' option from selectbox 'column' in content records
		colPos.keepItems = 1,0,2
	}
}

// Redakteure Zugriff: Wenn ein Editor eine Seite erstellt, sollte sie für alle Editoren und Administratoren sichtbar sein.
TCEMAIN {
	permissions {
		// group "all users"
		groupid = 1
		user = show,edit,delete,new,editcontent
		group = show,edit,delete,new,editcontent
		everybody =
	}
}

// Bessere Beschriftung für die Überschriften
TCEFORM.tt_content.header_layout {
  altLabels {
    1 = LLL:EXT:sitepackage/Resources/Private/Language/de.locallang.xlf:Heading 1
    2 = LLL:EXT:sitepackage/Resources/Private/Language/de.locallang.xlf:Heading 2
    3 = LLL:EXT:sitepackage/Resources/Private/Language/de.locallang.xlf:Heading 3
    4 = LLL:EXT:sitepackage/Resources/Private/Language/de.locallang.xlf:Heading 4
    5 = LLL:EXT:sitepackage/Resources/Private/Language/de.locallang.xlf:Heading 5
    6 = LLL:EXT:sitepackage/Resources/Private/Language/de.locallang.xlf:Heading 6
}
  removeItems = 0
  addItems.200 = Überschrift ohne H-Tag
}

### Erscheinungsbild ###
TCEFORM.tt_content {
    // Layouts hinzufügen, bestehende entfernen - Anpassungen in page.content.ts
    layout {
	addItems {
		#100 = Beispiel 100
		#200 = Beispiel 200
		}
    altLabels {
        #100 = Beispiel 1
        #200 = Beispiel 2
       }
       # Bei Bedarf anpassen
       removeItems = 1,2,3,4,5,6,7,9,10
       ## Layout Select-Feld entfernen
       //disabled = 1
    }
    // Section Frames
	frame_class {
		## Standard: Default, alle Weiteren auf einmal entfernen
        keepItems = default
        ## Auswahlmöglichkeiten einzeln entfernen
        //removeItems = ruler-before, ruler-after, indent, indent-left, indent-right, none
        ## Eigene Rahmen fuer Content Elemente Hinzufügen - CSS-Klasse "frame-Beispiel1" wird hinzugefügt
        addItems {
            Beispiel1 = Beispiel 1
            Beispiel2 = Beispiel 2
        }
        ## SectionFrame Select-Feld entfernen
        //disabled = 1
    }
    // Space Before
	space_before_class {
        ## Standard entfernen - je Größe +1em Abstand
        removeItems = small, extra-small, medium, large, extra-large
        ## Eigene Klasse hinzufügen - CSS-Klasse "frame-space-before-beispiel1" wird hinzugefügt
        addItems {
            Beispiel1 = Beispiel 1
            Beispiel2 = Beispiel 2
        }
        ## Space Before Select-Feld entfernen
		//disabled = 1
	}
    // Space After entfernen
	space_after_class {
        ## Standard entfernen - je Größe +1em Abstand
        removeItems = small, extra-small, medium, large, extra-large
        ## Eigene Klasse hinzufügen - CSS-Klasse "frame-space-before-beispiel1" wird hinzugefügt
        addItems {
            Beispiel1 = Beispiel 1
            Beispiel2 = Beispiel 2
        }
        ## Space After Select-Feld entfernen
		//disabled = 1
    }
}

### News Einstellungen - tx_news
# Use different views for the news plugin, those entries show up in the news content element configuration
tx_news {
	templateLayouts {
		normal = Normal
		latest = Latest
		# You can even translate those if you create a custom ll-xml file.
		#custom = fileadmin/Language/news-templates.xml:keyForCustom
	}
	# prefill author informations from user settigns
	predefine.author = 0
}
# set showInPreview flag for news as default
TCAdefaults {
	sys_file_reference {
		showinpreview =  1
	}
}

# "Save and Preview" for news records
#TCEMAIN.preview {
#	tx_news_domain_model_news {
#		# !!! EDIT PID !!!
#		previewPageId = 123
#		useDefaultLanguageRecord = 0
#		fieldToParameterMap {
#			uid = tx_news_pi1[news_preview]
#		}
#		additionalGetParameters {
#			tx_news_pi1.controller = News
#			tx_news_pi1.action = detail
#		}
#	}
#}


### Tabs Container
tx_gridelements.setup.uebb_bootstrap_tabs_container {
    title = Tabs: Umfassender Container für die Tab Inhalte
	description = Ein Element welches mehrere Tabs enthält
	flexformDS = FILE:EXT:sitepackage/Resources/Public/XML/Tabs.xml

	config {
		colCount = 1
		rowCount = 1

		rows {
			1 {
				columns {
					1 {
						name = Tabs: Umfassender Container für die Tab Inhalte - Überschrift auf VERBORGEN stellen
						colPos = 0
						allowed = gridelements_pi1
					}
				}
			}
		}
	}
}

### Tab Element
tx_gridelements.setup.uebb_bootstrap_tabs_tab {
  	title = Tab
	description = Ein einzelner Tab für einen Tab-Container - Überschrift auf VERBORGEN stellen - wird als Tab angezeigt

	config {
		colCount = 1
		rowCount = 1

		rows {
			1 {
				columns {
					1 {
						name = Tab Inhalt Element
						colPos = 0
					}
				}
			}
		}
	}
}

### Accordion Container außen herum
tx_gridelements.setup.uebb_bootstrap_collapsible_container {
  title = Accordion äußerer Container - Überschrift auf VERBORGEN stellen
	description = Ein Element das den Accordion Inhalt enthält

	config {
		colCount = 1
		rowCount = 1

		rows {
			1 {
				columns {
					1 {
						name = Accordion äußerer Container
						colPos = 0
						allowed = gridelements_pi1
					}
				}
			}
		}
	}
}

### Accordion Inhaltselement
tx_gridelements.setup.uebb_bootstrap_collapsible_element {
  	title = Accordion Element zum Ausklappen - Überschrift auf VERBORGEN stellen - wird als Link verwendet
	description = Ein Element für einen Accordion Inhalt
	flexformDS = FILE:EXT:sitepackage/Resources/Public/XML/Accordion.xml

	config {
		colCount = 1
		rowCount = 1

		rows {
			1 {
				columns {
					1 {
						name = Collapsible Element
						colPos = 0
					}
				}
			}
		}
	}
}

//RTE.default.preset = sitepackage
// RTE.config.tt_content.bodytext.preset = sitepackage

RTE.default.preset = sitepackage
RTE.config.tt_content.bodytext.types.textmedia.preset = sitepackage
RTE.config.tt_content.bodytext.types.textpic.preset = sitepackage
RTE.config.tt_content.bodytext.types.text.preset = sitepackage
