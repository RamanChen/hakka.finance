import React, { useCallback, useMemo, useReducer } from 'react';
import { createContext } from 'use-context-selector';
import reducer, { initialApplicationState, ApplicationState } from './reducer';
import {
  UpdateBlockNumberPayload,
  AddPopupPayload,
  RemovePopupPayload,
  updateBlockNumberAction,
  toggleWalletModalAction,
  toggleSettingsMenuAction,
  addPopupAction,
  removePopupAction,
} from './actions';

interface ApplicationContextProps {
  state: ApplicationState;
  updateBlockNumber: (payload: UpdateBlockNumberPayload) => void;
  toggleWalletModal: () => void;
  toggleSettingsMenu: () => void;
  addPopup: (payload: AddPopupPayload) => void;
  removePopup: (payload: RemovePopupPayload) => void;
}

const ApplicationContext = createContext<ApplicationContextProps>(
  {} as ApplicationContextProps
);

const ApplicationContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialApplicationState);

  const updateBlockNumber = useCallback((payload) => {
    dispatch(updateBlockNumberAction(payload));
  }, []);

  const toggleWalletModal = useCallback(() => {
    dispatch(toggleWalletModalAction());
  }, []);

  const toggleSettingsMenu = useCallback(() => {
    dispatch(toggleSettingsMenuAction());
  }, []);

  const addPopup = useCallback((payload) => {
    dispatch(addPopupAction(payload));
  }, []);

  const removePopup = useCallback((payload) => {
    dispatch(removePopupAction(payload));
  }, []);

  return (
    <ApplicationContext.Provider
      value={useMemo(
        () => ({
          state,
          updateBlockNumber,
          toggleWalletModal,
          toggleSettingsMenu,
          addPopup,
          removePopup,
        }),
        [
          state,
          updateBlockNumber,
          toggleWalletModal,
          toggleSettingsMenu,
          addPopup,
          removePopup,
        ]
      )}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export { ApplicationContext };
export default ApplicationContextProvider;
