/**
 * External dependencies
 */
import type { ReactNode } from 'react';

/**
 * Internal dependencies
 */
import type { ButtonAsButtonProps } from '../button/types';

export type MatchParams = Record< string, string | string[] >;

export type NavigateOptions = {
	focusTargetSelector?: string;
	isBack?: boolean;
	skipFocus?: boolean;
	replace?: boolean;
};

export type NavigateToParentOptions = Omit< NavigateOptions, 'isBack' >;

export type NavigatorLocation = NavigateOptions & {
	/**
	 * Wether the current location is the initial one (ie. first in the stack).
	 */
	isInitial?: boolean;
	/**
	 * The path associated to the location.
	 */
	path?: string;
	/**
	 * Whether focus was already restored for this location (in case of
	 * backwards navigation).
	 */
	hasRestoredFocus?: boolean;
};

// Returned by the `useNavigator` hook.
export type Navigator = {
	/**
	 * The current location.
	 */
	location: NavigatorLocation;
	/**
	 * Params associated with the current location
	 */
	params: MatchParams;
	/**
	 * Navigate to a new location.
	 */
	goTo: ( path: string, options?: NavigateOptions ) => void;
	/**
	 * Go back to the parent location (ie. "/some/path" will navigate back
	 * to "/some")
	 */
	goBack: ( options?: NavigateToParentOptions ) => void;
	/**
	 * _Note: This function is deprecated. Please use `goBack` instead._
	 * @deprecated
	 * @ignore
	 */
	goToParent: ( options?: NavigateToParentOptions ) => void;
};

export type NavigatorContext = Navigator & {
	addScreen: ( screen: Screen ) => void;
	removeScreen: ( screen: Screen ) => void;
	match?: string;
};

export type NavigatorProviderProps = {
	/**
	 * The initial active path.
	 */
	initialPath: string;
	/**
	 * The children elements.
	 */
	children: ReactNode;
};

export type NavigatorScreenProps = {
	/**
	 * The screen's path, matched against the current path stored in the navigator.
	 */
	path: string;
	/**
	 * The children elements.
	 */
	children: ReactNode;
};

export type NavigatorBackButtonProps = ButtonAsButtonProps;

export type NavigatorBackButtonHookProps = NavigatorBackButtonProps & {
	/**
	 * _Note: this prop is deprecated and won't have any effect on the component._
	 * Whether we should navigate to the parent screen.
	 *
	 * @deprecated
	 * @ignore
	 */
	goToParent?: boolean;
};

export type NavigatorButtonProps = NavigatorBackButtonProps & {
	/**
	 * The path of the screen to navigate to. The value of this prop needs to be
	 * a valid value for an HTML attribute.
	 */
	path: string;
	/**
	 * The HTML attribute used to identify the `NavigatorButton`, which is used
	 * by `Navigator` to restore focus.
	 *
	 * @default 'id'
	 */
	attributeName?: string;
};

export type Screen = {
	id: string;
	path: string;
};
