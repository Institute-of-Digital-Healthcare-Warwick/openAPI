import { IContact } from "./IContact.ts";
import { ILicense } from "./ILicense.ts";


/**
 * Open API Info object
 * 
 * https://spec.openapis.org/oas/v3.1.0#info-object
 * 
 * @author Ashley Peake, Institute of Digital Healthcare, WMG
 */
export interface IInfo {
	/**
	 * The title of the API.
	 */
	title: string;


	/**
	 * A short summary of the API.
	 */
	summary?: string;


	/**
	 * A description of the API. CommonMark syntax MAY be used for rich text representation.
	 */
	description?: string;


	/**
	 * A URL to the Terms of Service for the API. This MUST be in the form of a URL.
	 */
	termsOfService?: string;


	/**
	 * The contact information for the exposed API.
	 */
	contact?: IContact;


	/**
	 * The license information for the exposed API.
	 */
	license?: ILicense;


	/**
	 * The version of the OpenAPI document (which is distinct from the OpenAPI Specification version or the API implementation version).
	 */
	version: string;
}