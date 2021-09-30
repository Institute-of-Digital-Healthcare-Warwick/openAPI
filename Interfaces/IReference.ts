import { IJsonSchemaRef } from "../mod.ts";


/**
 * Open API Reference object
 * 
 * https://spec.openapis.org/oas/v3.1.0#reference-object
 * 
 * @author Ashley Peake, Institute of Digital Healthcare, WMG
 */
export interface IReference extends IJsonSchemaRef {
	/**
	 * The reference identifier. This MUST be in the form of a URI.
	 */
	$ref: string;


	/**
	 * A short summary which by default SHOULD override that of the referenced component. If the referenced object-type does not allow a summary field, then this field has no effect.
	 */
	summary?: string;


	/**
	 * A description which by default SHOULD override that of the referenced component. CommonMark syntax MAY be used for rich text representation. If the referenced object-type does not allow a description field, then this field has no effect.
	 */
	description?: string;
}