<?php
defined('TYPO3_MODE') || die();
use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
        '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/TypoScript/Page_Configuration/page.ts">'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $_EXTKEY,
    'Configuration/TypoScript',
    'sitepackage'
);
\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
    $_EXTKEY,
    'Configuration/TypoScript',
    'sitepackage'
);
