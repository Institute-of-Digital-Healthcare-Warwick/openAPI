/**
 * Open API OAuth Flow object
 * 
 * https://spec.openapis.org/oas/v3.1.0#oauth-flows-object
 * 
 * @author Ashley Peake, Institute of Digital Healthcare, WMG
 */
export interface IOAuthFlow {
	/**
	 * The authorization URL to be used for this flow. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS.
	 */
	authorizationUrl: string;


	/**
	 * The token URL to be used for this flow. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS.
	 */
	tokenUrl: string;


	/**
	 * The URL to be used for obtaining refresh tokens. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS.
	 */
	refreshUrl?: string;


	/**
	 * The available scopes for the OAuth2 security scheme. A map between the scope name and a short description for it. The map MAY be empty.
	 */
	scopes: {[key:string]: string};
}