'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const currentState = { ...state };
  const stateHistory = [];

  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const key in currentState) {
          delete currentState[key];
        }
        break;

      case 'addProperties':
        for (const key in action.extraData) {
          currentState[key] = action.extraData[key];
        }
        break;

      case 'removeProperties':
        for (const n of action.keysToRemove) {
          delete currentState[n];
        }
        break;

      default:
        return 0;
    }

    stateHistory.push({ ...currentState });
  }

  return stateHistory;
}
module.exports = transformStateWithClones;
