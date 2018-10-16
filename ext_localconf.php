<?php
defined('TYPO3_MODE') || die();

/***************
 * Add default RTE configuration
 */
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['sitepackage'] = 'EXT:sitepackage/Configuration/RTE/Default.yaml';

$GLOBALS['TYPO3_CONF_VARS']['SYS']['Objects']['TYPO3\\CMS\\Core\\Resource\\FileReference'] = array(
    'className' => 'TeamDigital\\Sitepackage\\Resource\\FileReference'
);

// Flux Elemente
// Rasterelemente
\FluidTYPO3\Flux\Core::registerTemplateAsContentType(
    'TeamDigital.sitepackage',
    'EXT:sitepackage/Resources/Private/Templates/Content/30-70.html'
);
\FluidTYPO3\Flux\Core::registerTemplateAsContentType(
    'TeamDigital.sitepackage',
    'EXT:sitepackage/Resources/Private/Templates/Content/70-30.html'
);
\FluidTYPO3\Flux\Core::registerTemplateAsContentType(
    'TeamDigital.sitepackage',
    'EXT:sitepackage/Resources/Private/Templates/Content/50-50.html'
);
\FluidTYPO3\Flux\Core::registerTemplateAsContentType(
    'TeamDigital.sitepackage',
    'EXT:sitepackage/Resources/Private/Templates/Content/25-25-25-25.html'
);
\FluidTYPO3\Flux\Core::registerTemplateAsContentType(
    'TeamDigital.sitepackage',
    'EXT:sitepackage/Resources/Private/Templates/Content/20-20-20-20-20.html'
);
\FluidTYPO3\Flux\Core::registerTemplateAsContentType(
    'TeamDigital.sitepackage',
    'EXT:sitepackage/Resources/Private/Templates/Content/100.html'
);

// Accordion
\FluidTYPO3\Flux\Core::registerTemplateAsContentType(
    'TeamDigital.sitepackage',
    'EXT:sitepackage/Resources/Private/Templates/Content/Accordion.html'
);

// Tabs
\FluidTYPO3\Flux\Core::registerTemplateAsContentType(
    'TeamDigital.sitepackage',
    'EXT:sitepackage/Resources/Private/Templates/Content/Tabs_Container.html'
);
\FluidTYPO3\Flux\Core::registerTemplateAsContentType(
    'TeamDigital.sitepackage',
    'EXT:sitepackage/Resources/Private/Templates/Content/Tabs_Item.html'
);
