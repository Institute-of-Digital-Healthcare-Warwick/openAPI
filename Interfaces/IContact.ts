/**
 * Open API Contact object
 * 
 * https://spec.openapis.org/oas/v3.1.0#contact-object
 * 
 * @author Ashley Peake, Institute of Digital Healthcare, WMG
 */
 export interface IContact {
	/**
	 * The identifying name of the contact person/organization.
	 * */
	name?: string;


	/**
	 * The URL pointing to the contact information. This MUST be in the form of a URL.
	 */
	url?: string;


	/**
	 * The email address of the contact person/organization. This MUST be in the form of an email address.
	 */
	email?: string;	
}