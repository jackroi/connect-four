import { ClientPlayer } from '../player.model';
import { Stats } from '../stats.model';
import { FriendRequest } from '../friend-request.model';
import { Chat } from '../chat.model';
import { Match } from '../match.model';


export interface ResponseBody {
  error: boolean,
  statusCode: number,
}

export interface SuccessResponseBody extends ResponseBody {
  error: false,
}

export interface ErrorResponseBody extends ResponseBody {
  error: true,
  errorMessage: string,
}

export interface RootResponseBody extends SuccessResponseBody {
  apiVersion: string,
  endpoints: string[],
}

export interface LoginResponseBody extends SuccessResponseBody {
  token: string,
}

export interface RegistrationResponseBody extends SuccessResponseBody {
  token: string,
}

export interface GetPlayersResponseBody extends SuccessResponseBody {
  players: ClientPlayer[],
}

export interface ConfirmModeratorResponseBody extends SuccessResponseBody {
  token: string,
}

export interface GetPlayerResponseBody extends SuccessResponseBody {
  player: ClientPlayer & { online: boolean, playing: boolean },
}

export interface GetPlayerStatsResponseBody extends SuccessResponseBody {
  stats: Stats,
}

export interface GetFriendsResponseBody extends SuccessResponseBody {
  friends: string[],
}

export interface GetFriendRequestsResponseBody extends SuccessResponseBody {
  friendRequests: FriendRequest[],
}

export interface NotifyAvailabilityFriendRequestResponseBody extends SuccessResponseBody {
  newFriend: boolean,
}

export interface ChatInfo {
  playerA: string,
  playerB: string,
  playerAHasNewMessages: boolean,
  playerBHasNewMessages: boolean,
}

export interface GetChatsResponseBody extends SuccessResponseBody {
  chats: ChatInfo[],
}

export interface GetChatResponseBody extends SuccessResponseBody {
  chat: Chat,
}

export interface GetMatchesResponseBody extends SuccessResponseBody {
  matches: (Match & { _id: string })[],
}

export interface GetMatchResponseBody extends SuccessResponseBody {
  match: Match & { _id: string },
}