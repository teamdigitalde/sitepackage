#############################################################
## Manual inclusion to keep control over loading order     ##
## replace paths and remember to add new typoscript files  ##
#############################################################

/*
 * Extension Configuration with conditional inclusion
 */
[userFunc = TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('gridelements')]
	<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TypoScript/Extension/plugin.gridelements.ts">
[global]


/*
* Menu
*/
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TypoScript/Menu/menu.defaults.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TypoScript/Menu/menu.breadcrumb.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TypoScript/Menu/menu.firstlevel.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TypoScript/Menu/menu.firstAndSecondLevel.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TypoScript/Menu/menu.firstThreeLevels.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TypoScript/Menu/menu.firstFourLevels.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TypoScript/Menu/menu.secondlevel.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TypoScript/Menu/menu.top.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TypoScript/Menu/menu.footer.ts">

/*
* Page Blocks / Content
*/
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TypoScript/Page_Blocks/page.bodyTag.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TypoScript/Page_Blocks/page.content.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TypoScript/Page_Blocks/page.footer.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TypoScript/Page_Blocks/page.staticHeaderImage.ts">

/*
* Page Configuration
*/
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TypoScript/Page_Configuration/page.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TypoScript/Page_Configuration/page.config.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TypoScript/Page_Configuration/page.includeCSS.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TypoScript/Page_Configuration/page.includeJS.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TypoScript/Page_Configuration/page.headerData.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TypoScript/Page_Configuration/page.meta.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TypoScript/Page_Configuration/page.footerData.ts">

/*
* System Configuration
*/
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TypoScript/System/lib.fluidContent.ts">

/*
* PageTS
*/
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/PageTS/All.txt">
