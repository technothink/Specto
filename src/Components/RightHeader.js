import React from 'react';

const RightHeader = () => (

    <section class="mdc-toolbar__section mdc-toolbar__section--align-end" role="toolbar">


        <div class="mdc-menu-anchor mr-1">
            <a href="#" class="mdc-toolbar__icon toggle mdc-ripple-surface" data-toggle="dropdown" toggle-dropdown="logout-menu" data-mdc-auto-init="MDCRipple">
                <i class="material-icons">more_vert</i>
            </a>
            <div class="mdc-simple-menu mdc-simple-menu--right" tabindex="-1" id="logout-menu">
                <ul class="mdc-simple-menu__items mdc-list" role="menu" aria-hidden="true">
                    <li class="mdc-list-item" role="menuitem" tabindex="0">
                        <i class="material-icons mdc-theme--primary mr-1">settings</i>
                        Settings
            </li>
                    <li class="mdc-list-item" role="menuitem" tabindex="0">
                        <i class="material-icons mdc-theme--primary mr-1">power_settings_new</i>
                        Logout
            </li>
                </ul>
            </div>
        </div>
    </section>
);

export default RightHeader;