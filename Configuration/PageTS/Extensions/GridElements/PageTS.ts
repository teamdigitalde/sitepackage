tx_gridelements {
# TS Elemente haben Vorrang vor Datensätzen mit gleichen IDs
	overruleRecords = 1

	setup {
      1 {
			title = 70-30
			description = Zweispaltig 70-30
			icon = EXT:sitepackage/Resources/Public/Images/Grids/grid-2spaltig70-30.png
			config {
				colCount = 3
				rowCount = 1
				rows {
					1 {
						columns {
							1 {
								name = Inhalt links
								colspan = 2
								colPos = 0
							}
							2 {
								name = Inhalt rechts
								colPos = 1
							}
						}
					}
				}
			}
		}
		2 {
			title = 30-70
			description = Zweispaltig 30-70
			icon = EXT:sitepackage/Resources/Public/Images/Grids/grid-2spaltig30-70.png
			config {
				colCount = 3
				rowCount = 1
				rows {
					1 {
						columns {
							1 {
								name = Inhalt links
								colPos = 0
							}
							2 {
								name = Inhalt rechts
								colspan = 2
								colPos = 1
							}
						}
					}
				}
			}
		}
		3 {
			title = 50-50
			description = Zweispaltig 50-50
			icon = EXT:sitepackage/Resources/Public/Images/Grids/grid-2spaltig-50-50.png
			config {
				colCount = 2
				rowCount = 1
				rows {
					1 {
						columns {
							1 {
								name = Inhalt links
								colPos = 0
							}
							2 {
								name = Inhalt rechts
								colPos = 1
							}
						}
					}
				}
			}
		}
		4 {
			title = 33-33-33
			description = Zweispaltig 33-33-33
			icon = EXT:sitepackage/Resources/Public/Images/Grids/grid-3spaltig-33.png
			config {
				colCount = 3
				rowCount = 1
				rows {
					1 {
						columns {
							1 {
								name = Inhalt links
								colPos = 0
							}
							2 {
								name = Inhalt mitte
								colPos = 1
							}
							3 {
								name = Inhalt rechts
								colPos = 2
							}
						}
					}
				}
			}
		}
		5 {
			title = 25-25-25-25
			description = Zweispaltig 25-25-25-25
			icon = EXT:sitepackage/Resources/Public/Images/Grids/grid-4spaltig-25.png
			config {
				colCount = 4
				rowCount = 1
				rows {
					1 {
						columns {
							1 {
								name = Inhalt links
								colPos = 0
							}
							2 {
								name = Inhalt mitte links
								colPos = 1
							}
							3 {
								name = Inhalt mitte rechts
								colPos = 2
							}
							4 {
								name = Inhalt rechts
								colPos = 3
							}
						}
					}
				}
			}
		}
	}
}
