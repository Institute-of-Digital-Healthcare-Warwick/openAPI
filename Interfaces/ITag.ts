/**
 * Open API Tag object
 * 
 * https://spec.openapis.org/oas/v3.1.0#tag-object
 * 
 * @author Ashley Peake, Institute of Digital Healthcare, WMG
 */
 export interface ITag {
	/**
	 * The name of the tag.
	 */
	name: string;


	/**
	 * A description for the tag. CommonMark syntax MAY be used for rich text representation.
	 */
	description?: string;


	/**
	 * Additional external documentation for this tag.
	 */
	externalDocs?: string;
}