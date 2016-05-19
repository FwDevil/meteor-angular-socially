import * as angular from 'angular';

import { Meteor } from 'meteor/meteor';

import { registerAuth } from '../imports/ui/components/auth/auth';
import { registerLogin } from '../imports/ui/components/login/login';
import { registerNavigation } from '../imports/ui/components/navigation/navigation';
import { registerPartiesList } from '../imports/ui/components/partiesList/partiesList';
import { registerPartiesMap } from '../imports/ui/components/partiesMap/partiesMap';
import { registerPartiesSort } from '../imports/ui/components/partiesSort/partiesSort';
import { registerPartyAdd } from '../imports/ui/components/partyAdd/partyAdd';
import { registerPartyAddButton } from '../imports/ui/components/partyAddButton/partyAddButton';
import { registerPartyCreator } from '../imports/ui/components/partyCreator/partyCreator';
import { registerPartyDetails } from '../imports/ui/components/partyDetails/partyDetails';
import { registerPartyImage } from '../imports/ui/components/partyImage/partyImage';
import { registerPartyMap } from '../imports/ui/components/partyMap/partyMap';
import { registerPartyRemove } from '../imports/ui/components/partyRemove/partyRemove';
import { registerPartyRsvp } from '../imports/ui/components/partyRsvp/partyRsvp';
import { registerPartyRsvpsList } from '../imports/ui/components/partyRsvpsList/partyRsvpsList';
import { registerPartyUninvited } from '../imports/ui/components/partyUninvited/partyUninvited';
import { registerPartyUpload } from '../imports/ui/components/partyUpload/partyUpload';
import { registerPassword } from '../imports/ui/components/password/password';
import { registerRegister } from '../imports/ui/components/register/register';
import { registerSocially, SociallyNg1Module } from '../imports/ui/components/socially/socially';

registerAuth();
registerLogin();
registerNavigation();
registerPartiesList();
registerPartiesMap();
registerPartiesSort();
registerPartyAdd();
registerPartyAddButton();
registerPartyCreator();
registerPartyDetails();
registerPartyImage();
registerPartyMap();
registerPartyRemove();
registerPartyRsvp();
registerPartyRsvpsList();
registerPartyUninvited();
registerPartyUpload();
registerPassword();
registerRegister();
registerSocially();

function onReady() {
  angular.bootstrap(document, [
    SociallyNg1Module.name
  ]);
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}