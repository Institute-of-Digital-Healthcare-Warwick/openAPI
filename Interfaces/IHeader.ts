import { IJsonSchema } from "../mod.ts";


/**
 * Open API Header object
 * 
 * https://spec.openapis.org/oas/v3.1.0#header-object
 * 
 * @author Ashley Peake, Institute of Digital Healthcare, WMG
 */
export interface IHeader {
	/**
	 * 	A brief description of the parameter. This could contain examples of use. CommonMark syntax MAY be used for rich text representation
	 */
	description?: string;

	
	/**
	 * The schema defining the type used for the parameter.
	 */
	schema?: IJsonSchema;
}