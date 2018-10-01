<?php
namespace TeamDigital\Sitepackage\Domain\Model;


/***************************************************************
 *
 *  Copyright notice
 *
 *  (c) 2015 Tim Büschken <bueschken@team-digital.de>, team digital GmbH
 *
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

use TYPO3\CMS\Extbase\Persistence\ObjectStorage;

/**
 * Machinery
 */
class Sitepackage extends \TYPO3\CMS\Extbase\DomainObject\AbstractEntity {

    /**
     * ausrichtung
     *
     * @var string
     */
    protected $ausrichtung = '';

    /**
     * __construct
     */
    public function __construct() {
        //Do not remove the next line: It would break the functionality
        $this->initStorageObjects();
    }

    /**
     * Initializes all ObjectStorage properties
     * Do not modify this method!
     * It will be rewritten on each save in the extension builder
     * You may modify the constructor of this class instead
     *
     * @return void
     */
    protected function initStorageObjects() {
//        $this->image = new ObjectStorage();
    }

    /**
     * Returns the ausrichtung
     *
     * @return string $ausrichtung
     */
    public function getAusrichtung() {
        return $this->ausrichtung;
    }

    /**
     * Sets the ausrichtung
     *
     * @param string $ausrichtung
     * @return void
     */
    public function setAusrichtung($ausrichtung) {
        $this->ausrichtung = $ausrichtung;
    }
}
