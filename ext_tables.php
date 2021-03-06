<?php
defined('TYPO3_MODE') || die();

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
        '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/PageTS/page.ts">'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::allowTableOnStandardPages('tx_sitepackage_domain_model_anchor');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    'sitepackage',
    'Configuration/TypoScript',
    'sitepackage'
);
\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
    'sitepackage',
    'Configuration/TypoScript',
    'sitepackage'
);

$GLOBALS['TCA']['pages']['columns']['slug']['config']['generatorOptions']['fields'][0] = 'nav_title,title';
