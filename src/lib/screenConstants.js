export const screenTypes = {
  SET_SCREEN: 'set_screen',
  SET_PLAYER_MODE: 'set_player_mode',
  SET_GAME_MODE: 'set_game_mode',
  REVERSE: 'reverse_state',
  RESET: 'reset_state',
};

export const SINGLE_PLAYER = 'Single Player';
export const MULTIPLAYER = 'Multi Player';

export const screenStates = {
  screen: {
    DEFAULT: 'start',
    PLAY: 'play',
  },
  players: {
    SINGLE_PLAYER,
    MULTIPLAYER,
    DEFAULT: null,
  },
  mode: {
    [SINGLE_PLAYER]: {
      PRACTICE: 'Practice',
      SURVIVAL: 'Survival',
      TIME_ATTACK: 'Time Attack',
    },
    [MULTIPLAYER]: {
      'LOCAL': 'Local',
      'REMOTE': 'P2P',
    },
    DEFAULT: null,
  },
};

export const screenStatesArrays = Object.entries(screenStates).reduce(
  (acc, [stateKey, statesObj]) => ({
    ...acc,
    [stateKey]:
      stateKey !== 'mode'
        ? Object.values(statesObj).filter((_) => _)
        : Object.entries(statesObj).reduce(
            (modeAcc, [playerModeKey, playerModesObj]) => ({
              ...modeAcc,
              [playerModeKey]: playerModesObj === null ? null : Object.values(playerModesObj), // check for the default: null thing and get rid of it
            }),
            {},
          ),
  }),
  {},
);

export const initialScreenState = {
  screen: screenStates.screen.DEFAULT,
  mode: screenStates.mode.DEFAULT,
  players: screenStates.players.DEFAULT,
};
