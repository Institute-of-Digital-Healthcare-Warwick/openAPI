/**
 * Open API External Documentation object
 * 
 * https://spec.openapis.org/oas/v3.1.0#external-documentation-object
 * 
 * @author Ashley Peake, Institute of Digital Healthcare, WMG
 */
 export interface IExternalDocumentation {
	/**
	 * 	A description of the target documentation. CommonMark syntax MAY be used for rich text representation.
	 */
	description?: string;


	/**
	 * The URL for the target documentation. This MUST be in the form of a URL.
	 */
	url: string;
}