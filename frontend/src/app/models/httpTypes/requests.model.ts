export interface RequestBody {
}

export interface RegistrationRequestBody extends RequestBody {
  username: string,
  password: string,
  isModerator: boolean,
}

export interface StandardPlayerRegistrationRequestBody extends RegistrationRequestBody {
  isModerator: false,
  name: string,
  surname: string,
  avatar: string, // TODO capire come gestire
}

export interface ModeratorRegistrationRequestBody extends RegistrationRequestBody {
  isModerator: true,
}

export function isStandardPlayerRegistrationRequestBody(arg: any): arg is StandardPlayerRegistrationRequestBody {
  return arg
    && arg.username
    && typeof (arg.username) === 'string'
    && arg.password
    && typeof (arg.password) === 'string'
    && arg.isModerator !== undefined && arg.isModerator !== null // Check explicity the inequality to undefined and null
    && !arg.isModerator
    && arg.name
    && typeof (arg.name) === 'string'
    && arg.surname
    && typeof (arg.surname) === 'string'
    && arg.avatar
    && typeof (arg.avatar) === 'string';
}

export function isModeratorRegistrationRequestBody(arg: any): arg is ModeratorRegistrationRequestBody {
  return arg
    && arg.username
    && typeof (arg.username) === 'string'
    && arg.password
    && typeof (arg.password) === 'string'
    && arg.isModerator !== undefined && arg.isModerator !== null // Check explicity the inequality to undefined and null
    && arg.isModerator;
}

export interface ConfirmModeratorRequestBody extends RequestBody {
  password: string,
  name: string,
  surname: string,
  avatar: string, // TODO capire come gestire
}

export function isConfirmModeratorRequestBody(arg: any): arg is ConfirmModeratorRequestBody {
  return arg
    && arg.password
    && typeof (arg.password) === 'string'
    && arg.name
    && typeof (arg.name) === 'string'
    && arg.surname
    && typeof (arg.surname) === 'string'
    && arg.avatar
    && typeof (arg.avatar) === 'string';
}

export interface NotifyAvailabilityFriendRequestRequestBody extends RequestBody {
  username: string,
}

export function isNotifyAvailabilityFriendRequestRequestBody(arg: any): arg is NotifyAvailabilityFriendRequestRequestBody {
  return arg
    && arg.username
    && typeof (arg.username) === 'string';
}

export interface NotifyUnavailabilityFriendRequestRequestBody extends RequestBody {
  username: string,
}

export function isNotifyUnavailabilityFriendRequestRequestBody(arg: any): arg is NotifyUnavailabilityFriendRequestRequestBody {
  return arg
    && arg.username
    && typeof (arg.username) === 'string';
}

export interface AddMoveRequestBody extends RequestBody {
  column: number,
}

export function isAddMoveRequestBody(arg: any): arg is AddMoveRequestBody {
  return arg
    && arg.column !== undefined
    && typeof (arg.column) === 'number'; // TODO verificare se è numero o stringa
}
